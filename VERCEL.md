# Deploy no Vercel - MyBP Front Vagas

## 🌟 Por que Vercel?

O Vercel é uma plataforma otimizada para aplicações frontend que oferece:

- ✅ **Deploy automático** via Git
- ✅ **CDN global** com edge locations
- ✅ **HTTPS automático** 
- ✅ **Preview deployments** para branches
- ✅ **Zero configuração** para Vue.js
- ✅ **Rollbacks instantâneos**
- ✅ **Analytics integrado**
- ✅ **Domínios customizados gratuitos**

## 🚀 Setup Rápido

### 1. Instalar Vercel CLI
```bash
npm i -g vercel
```

### 2. Login no Vercel
```bash
vercel login
```

### 3. Deploy imediato
```bash
# Deploy de preview
./deploy-vercel.sh

# Deploy de produção  
./deploy-vercel.sh prod
```

## 📋 Configuração Detalhada

### Arquivo vercel.json
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Estrutura de Rotas
- **Static Assets**: Cache de 1 ano para arquivos estáticos
- **SPA Routing**: Todas as rotas redirecionam para index.html
- **API Routes**: Não aplicável (frontend only)

## 🔧 Configuração via Dashboard

### 1. Conectar Repositório Git
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Conecte seu repositório GitHub/GitLab/Bitbucket
4. Configure as settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm ci`

### 2. Variáveis de Ambiente
No dashboard do Vercel:
1. Vá em Project Settings > Environment Variables
2. Adicione suas variáveis:
   ```
   NODE_ENV=production
   VUE_APP_API_URL=https://api.mybp.com.br
   VUE_APP_ENVIRONMENT=production
   ```

### 3. Domínio Customizado
1. Vá em Project Settings > Domains
2. Adicione seu domínio: `app.mybp.com.br`
3. Configure DNS conforme instruções

## 🌍 Workflows de Deploy

### Deploy Automático (Recomendado)
```bash
# 1. Push para branch main/master = deploy produção
git push origin main

# 2. Push para outras branches = deploy preview
git checkout feature/nova-funcionalidade
git push origin feature/nova-funcionalidade
```

### Deploy Manual
```bash
# Preview
vercel

# Produção
vercel --prod

# Com target específico
vercel --prod --target production
```

## 📊 Monitoramento e Analytics

### Vercel Analytics (Gratuito)
```javascript
// Adicione ao main.js
import { inject } from '@vercel/analytics';
inject();
```

### Performance Insights
- Core Web Vitals automático
- Real User Monitoring
- Lighthouse CI integrado

### Logs e Debugging
```bash
# Ver logs da função
vercel logs

# Ver deployments
vercel ls

# Informações do projeto
vercel inspect [URL]
```

## 🔒 Configurações de Segurança

### Headers de Segurança
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",  
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Proteção de Branches
- Configure branch protection no GitHub
- Apenas main/master faz deploy de produção
- PRs geram preview deployments

## 💰 Custos e Limites

### Plano Hobby (Gratuito)
- ✅ Deployments ilimitados
- ✅ 100GB bandwidth/mês
- ✅ Domínios customizados
- ✅ Analytics básico
- ❌ Sem colaboradores de team

### Plano Pro ($20/mês)
- ✅ Tudo do Hobby
- ✅ Colaboradores de team
- ✅ Analytics avançado
- ✅ Edge Functions
- ✅ Proteção por senha

## 🆚 Comparação: Vercel vs ECR/ECS

| Aspecto | Vercel | ECR/ECS |
|---------|--------|---------|
| **Setup** | ⭐⭐⭐⭐⭐ Imediato | ⭐⭐⭐ Complexo |
| **Custo** | ⭐⭐⭐⭐ Baixo | ⭐⭐ Alto |
| **Performance** | ⭐⭐⭐⭐⭐ CDN Global | ⭐⭐⭐ Regional |
| **Escalabilidade** | ⭐⭐⭐⭐⭐ Automática | ⭐⭐⭐⭐ Manual |
| **Controle** | ⭐⭐⭐ Limitado | ⭐⭐⭐⭐⭐ Total |
| **DevOps** | ⭐⭐⭐⭐⭐ Zero config | ⭐⭐ Complexo |

## 🛠️ Troubleshooting

### Build Falha
```bash
# Verificar logs
vercel logs

# Build local
npm run build

# Limpar cache
vercel --force
```

### Rota 404
- Verificar configuração SPA no vercel.json
- Conferir outputDirectory
- Validar build command

### Performance Issues  
- Verificar bundle size: `npm run build --report`
- Otimizar imagens
- Configurar cache headers

## 📞 Próximos Passos

1. **Conecte o repositório** no dashboard Vercel
2. **Configure domínio** customizado
3. **Adicione variáveis** de ambiente
4. **Configure analytics** 
5. **Setup CI/CD** com GitHub Actions (opcional)

## 🎯 Comandos Essenciais

```bash
# Deploy
./deploy-vercel.sh              # Preview
./deploy-vercel.sh prod         # Produção

# Gerenciamento
vercel ls                       # Listar deployments  
vercel logs                     # Ver logs
vercel domains                  # Gerenciar domínios
vercel env                      # Variáveis ambiente
vercel rollback [URL]           # Rollback

# Desenvolvimento
vercel dev                      # Servidor local com funcionalidades Vercel
vercel link                     # Conectar projeto local
```

O Vercel é perfeito para aplicações Vue.js como a sua - simples, rápido e sem complexidade de infraestrutura! 🚀