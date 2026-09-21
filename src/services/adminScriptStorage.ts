import { SEMINAR_SCRIPTS } from '../data/seminarScriptData';
import type { MemberScript } from '../data/seminarScriptData';

// Chaves de armazenamento
const STORAGE_KEY = 'amazon_seminar_custom_scripts_v1';
const ADMIN_SESSION_KEY = 'amazon_seminar_admin_auth';

// Credenciais hardcoded para o painel administrativo
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'amazonia2026'
};

// URL de fallback pública em nuvem compartilhada para sincronização entre dispositivos
// Usamos a API npoint.io / myjson pública para persistência global
const CLOUD_STORAGE_URL = 'https://api.npoint.io/469c849e7b2ff9bc0192';

/**
 * Carrega os scripts com prioridade:
 * 1. Nuvem (compartilhado entre todos os usuários)
 * 2. Cache Local (se já foi editado neste browser)
 * 3. Script original padrão
 */
export async function getPersistedScripts(): Promise<MemberScript[]> {
  // 1. Tenta carregar do cache local primeiro para resposta imediata
  let localData: MemberScript[] | null = null;
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      localData = JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Erro ao ler do localStorage', e);
  }

  // 2. Tenta buscar da nuvem para atualizar se houver versão mais recente
  try {
    const response = await fetch(CLOUD_STORAGE_URL, {
      headers: { 'Accept': 'application/json' },
      cache: 'no-store'
    });
    if (response.ok) {
      const cloudData = await response.json();
      if (Array.isArray(cloudData) && cloudData.length === 5) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudData));
        return cloudData;
      }
    }
  } catch (err) {
    console.log('Nuvem offline ou inacessível, usando versão local/padrão', err);
  }

  return localData || SEMINAR_SCRIPTS;
}

/**
 * Salva as alterações feitas pelo Admin:
 * Grava localmente e envia para a nuvem pública para todos os visitantes receberem
 */
export async function savePersistedScripts(updatedScripts: MemberScript[]): Promise<{ success: boolean; cloudSynced: boolean; message: string }> {
  // Gravação local imediata
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedScripts));
  } catch (e) {
    console.error('Falha ao salvar no localStorage', e);
  }

  // Gravação na nuvem compartilhada
  let cloudSynced = false;
  try {
    const response = await fetch(CLOUD_STORAGE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedScripts)
    });
    if (response.ok) {
      cloudSynced = true;
    }
  } catch (err) {
    console.warn('Não foi possível sincronizar na nuvem agora:', err);
  }

  return {
    success: true,
    cloudSynced,
    message: cloudSynced 
      ? 'Textos atualizados e sincronizados na nuvem para todos os usuários!' 
      : 'Textos salvos no dispositivo. (A sincronização em nuvem usará fallback local).'
  };
}

/**
 * Restaura os textos originais do seminário
 */
export function resetToDefaultScripts(): MemberScript[] {
  localStorage.removeItem(STORAGE_KEY);
  return SEMINAR_SCRIPTS;
}

/**
 * Gestão de Autenticação do Admin
 */
export function checkIsAdminAuthenticated(): boolean {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
}

export function setAdminAuthenticated(status: boolean): void {
  if (status) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
  } else {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}
