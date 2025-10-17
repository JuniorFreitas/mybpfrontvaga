#!/usr/bin/env node

/**
 * Script para gerar config.json baseado no ambiente
 * Usado durante o build para selecionar a configuração correta
 */

const fs = require('fs');
const path = require('path');

// Determinar o ambiente
const environment = process.env.NODE_ENV || process.env.VUE_APP_ENVIRONMENT || 'development';
const vercelEnv = process.env.VERCEL_ENV; // preview, production, development

console.log(`🌍 Ambiente detectado: ${environment}`);
console.log(`🚀 Vercel ENV: ${vercelEnv || 'não detectado'}`);

// Mapear ambiente para arquivo de config
let configFile;

// Lógica para Vercel
if (vercelEnv) {
  switch (vercelEnv) {
    case 'production':
      configFile = 'config-prod.json';
      break;
    case 'preview':
      configFile = 'config-homol.json';
      break;
    case 'development':
    default:
      configFile = 'config-dev.json';
      break;
  }
} else {
  // Lógica padrão
  switch (environment) {
    case 'production':
      configFile = 'config-prod.json';
      break;
    case 'homologation':
    case 'staging':
      configFile = 'config-homol.json';
      break;
    case 'development':
    case 'dev':
    default:
      configFile = 'config-dev.json';
      break;
  }
}

console.log(`📁 Usando arquivo: ${configFile}`);

const configDir = path.join(__dirname, '../src/config');
const sourceConfig = path.join(configDir, configFile);
const targetConfig = path.join(configDir, 'config.json');

try {
  // Verificar se o arquivo fonte existe
  if (!fs.existsSync(sourceConfig)) {
    console.error(`❌ Arquivo ${configFile} não encontrado!`);
    process.exit(1);
  }

  // Ler configuração do ambiente
  const config = JSON.parse(fs.readFileSync(sourceConfig, 'utf8'));
  
  // Permitir override via variáveis de ambiente
  if (process.env.VUE_APP_API_URL) {
    config.urlApi = process.env.VUE_APP_API_URL;
    console.log(`🔧 API URL alterada para: ${config.urlApi}`);
  }

  if (process.env.VUE_APP_TINYMCE_KEY) {
    config.tinyPadrao.key = process.env.VUE_APP_TINYMCE_KEY;
    console.log(`🔑 TinyMCE key atualizada`);
  }

  // Sobrescrever config.json
  fs.writeFileSync(targetConfig, JSON.stringify(config, null, 2));
  
  console.log(`✅ config.json gerado com sucesso!`);
  console.log(`📊 Configuração ativa:`);
  console.log(`   - API URL: ${config.urlApi}`);
  console.log(`   - Modo dev: ${config.dev}`);
  console.log(`   - TinyMCE configurado: ${!!config.tinyPadrao.key}`);

} catch (error) {
  console.error(`❌ Erro ao gerar config.json:`, error.message);
  process.exit(1);
}