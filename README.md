# Mybp-vagas

Este repositório contém o frontend do sistema de vagas **MyBP Vagas**, desenvolvido em **Vue.js 2** com arquitetura modular, integração com API REST e utilização de bibliotecas de interface modernas.

O projeto utiliza o ecossistema Vue 2 (Vue Router 3, Vuex 3), Bootstrap 5, Axios e Webpack 4, com estrutura pensada para escalabilidade e manutenção contínua.

## 1. Tecnologias Utilizadas

Frontend  
- Vue.js 2.6.x  
- Vue Router 3.x  
- Vuex 3.x  
- Webpack 4  
- Axios  
- Lodash  
- jQuery  
- Moment.js  
- vuedraggable  
- TinyMCE (editor WYSIWYG)

UI/Estilos  
- Bootstrap 5  
- FontAwesome Free  
- Toastr

Ferramentas de Build  
- Vue CLI 4.5  
- Babel  
- Sass + Sass Loader

## 2. Estrutura de Pastas

```
.
├── nginx/
├── public/
├── scripts/
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── directives/
│   ├── helpers/
│   ├── mixins/
│   ├── router/
│   ├── services/
│   ├── store/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── .env.example
├── AMBIENTES.md
├── README.md
├── VERCEL.md
├── vue.config.js
└── package.json
```

## 3. Instalação

```
npm install
```

## 4. Ambiente de Desenvolvimento

```
npm run serve
```

URL padrão: http://localhost:8080

## 5. Build para Produção

```
npm run build
```

Saída gerada em `dist/`.

## 6. Variáveis de Ambiente

Copiar `.env.example`:

```
cp .env.example .env
```

## 7. Comunicação com API

Serviços em:

```
src/services/
```

Exemplo:

```js
import api from './api';

export function getVagas(params) {
  return api.get('/vagas', { params });
}
```

## 8. Estado Global (Vuex)

Localização:

```
src/store/
```

## 9. Rotas

Localização:

```
src/router/index.js
```

## 10. Deploy com Nginx

1. `npm run build`  
2. Enviar `dist/` para o servidor  
3. Configurar Nginx

## 11. Padrões de Código

- Componentes em PascalCase  
- Arquitetura modular  
- Helpers, mixins e directives separados

## 12. Licença

Código proprietário da organização BPSE.
