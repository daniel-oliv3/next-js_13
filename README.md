##
### Next JS - 13
##




**Next.js**

Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React. É uma estrutura pronta para produção que permite que os desenvolvedores criem rapidamente sites JAMstack estáticos e dinâmicos e é amplamente usada por muitas grandes empresas


**Plano de fundo**

Next.js é uma estrutura React que permite vários recursos extras, incluindo renderização do lado do servidor e geração de sites estáticos. React é uma biblioteca JavaScript tradicionalmente usada para construir aplicações web renderizadas no navegador do cliente com JavaScript. Os desenvolvedores reconhecem vários problemas com esta estratégia, no entanto, como não atender aos usuários que não têm acesso ao JavaScript ou o desativaram, problemas de segurança em potencial, tempos de carregamento de página significativamente estendidos e pode prejudicar a otimização geral do mecanismo de pesquisa do site. Frameworks como Next.js contornam esses problemas, permitindo que parte ou todo o site seja renderizado no lado do servidor antes de ser enviado ao cliente. Next.js é um dos componentes mais populares disponíveis no React.

O Google fez uma doação para o projeto Next.js, contribuindo com 43 solicitações pull em 2019, onde ajudaram na remoção de JavaScript não utilizado, reduzindo o tempo de sobrecarga e adicionando métricas aprimoradas. Em março de 2020, a estrutura é usada por muitos sites, incluindo Netflix, GitHub, Uber, Ticketmaster e Starbucks. No início de 2020, foi anunciado que Vercel havia garantido 21 milhões de dólares americanos em financiamento da Série A para apoiar melhorias no software. O autor original do framework, Guillermo Rauch, é atualmente o CEO da Vercel e o desenvolvedor principal do projeto é Tim Neutkens.


**Estilo e recursos**

A estrutura Next.js utiliza a arquitetura JAMstack, que distingue entre front-end e back-end e permite o desenvolvimento de front-end eficiente que é independente de quaisquer APIs de back-end. A estrutura suporta CSS comum, bem como Scss e Sass pré-compilados, CSS-in-JS e JSX estilizado. Além disso, é construído com suporte TypeScript e pacote inteligente.

- Fonte:
    - Link: https://pt.wikipedia.org/wiki/Next.js



### 1 - VAMOS DAR INÍCIO A ESTA AVENTURA!

**Next JS**

- Link: https://nextjs.org/

**Terminal do vscode**

- Criar o projeto nextjs

```
npx create-next-app@latest
```

- Exemplo
    - next-js_001


### 2 - PRIMEIRO CONTACTO COM A DOCUMENTAÇÃO

**O que é Next.js?**

Next.js é uma estrutura React para construir aplicativos web full-stack. Você usa React Components para construir interfaces de usuário e Next.js para recursos e otimizações adicionais.

Nos bastidores, Next.js também abstrai e configura automaticamente as ferramentas necessárias para React, como agrupamento, compilação e muito mais. Isso permite que você se concentre na construção de seu aplicativo em vez de perder tempo com configuração.

Quer você seja um desenvolvedor individual ou parte de uma equipe maior, Next.js pode ajudá-lo a construir aplicativos React interativos, dinâmicos e rápidos.

- Documentação: https://nextjs.org/docs

- https://nextjs.org/docs/getting-started/installation

- TailwindCSS


**Terminal**

- Verifica a versão do NodeJS
```
node -v
```

**Instalação Automatica**


- Cria o projeto Nextjs
```
npx create-next-app@latest
```

- Exemplo
    - next-js_002




### 3 - TYPESCRIPT, ESLINT, TAILWIND

**Links**

- TypeScript
    - Link: https://www.typescriptlang.org/
- ESLint
    - Link: https://eslint.org/    
- TailwindCSS
    - Link: https://tailwindcss.com/


**ESLint**    

ESLint é uma ferramenta de análise de código estática para JavaScript. ele é usado para detectar erros de sintaxe, estilo e padroes de código que podem levar a problemas de qualidade de software. 

O ESLint pode ser usado para verificar arquivos JavaScript individuais ou projetos inteiros. Ele pode ser
executado na linha de comando ou integrado a editores de texto e IDEs.

O ESLint é uma ferramenta valiosa para desenvolvimento JavaScript. ele pode ajudar a garantir a qualidade dp código e evitar erros

Aqui estão alguns benefícios do uso do ESLint

- Ajuda a detectar erros de sintaxe
- Detecta padrões de código problemáticos
- Pode ser personalizado para atender as suas necessidades
- Pode ser integrado a editores de texto e IDEs
- Se você é um desenvolvedor Javascript, eu recomendo que você experimente o ESLint. É uma ferramenta poderosa que pode ajudar-lo a escrever código de melhor qualidade


- Exemplo
    - next-js_003




### 4 - PRIMEIRA EXECUÇÃO DE UM PROJETO

- Install
    - link: https://nextjs.org/docs/getting-started/installation


**Instalação Automatica**

- Cria o projeto Nextjs
```
npx create-next-app@latest
```

- Roda o projeto
```
npm run dev
```

- R
    - L: http://localhost:3000/

- Exemplo
    - next-js_004



### 5 - INTRODUÇÃO AO APP ROUTER

**Instalação Automatica**

- Cria o projeto Nextjs
```
npx create-next-app@latest
```

- Roda o projeto
```
npm run dev
```

**Routing Fundamentals**

- Documentação: 
    - Link: https://nextjs.org/docs/app/building-your-application/routing


- URLs

- http://localhost:3000/
- http://localhost:3000/home
- http://localhost:3000/servicos

- Exemplo
    - next-js_005



### 6 - APP ROUTER COM SUBPASTAS E LINKS

**Linking and Navigating**

- Documentação:
    - Link: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

**< Link > Component**

- Link: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component

- URLs

- http://localhost:3000/
- http://localhost:3000/home
- http://localhost:3000/servicos
- http://localhost:3000/servicos/manutencao
- http://localhost:3000/contato

- Exemplo
    - next-js_006



### 7 - CSS MODULES NO APP ROUTER


**Styling**

- Documentação:
    - Link: https://nextjs.org/docs/app/building-your-application/styling


**CSS Modules**

 - Link: https://nextjs.org/docs/app/building-your-application/styling/css-modules

- Exemplo
    - next-js_007



### 8 - INÍCIO DA CONSTRUÇÃO DE SITE COM POUCAS BASES DE NEXTJS


- Exemplo
    - next-js_008


### 9 - ORGANIZAÇÃO DO CÓDIGO EM COMPONENTES

**Routing**

- Documentação: https://nextjs.org/docs/app/building-your-application/routing


Na versão 13, Next.js introduziu um novo App Router construído em React Server Components, que oferece suporte a layouts compartilhados, roteamento aninhado, estados de carregamento, tratamento de erros e muito mais.

O App Router funciona em um novo diretório chamado app. O diretório app funciona junto com o diretório pages para permitir a adoção incremental. Isso permite que você opte por algumas rotas do seu aplicativo para o novo comportamento, enquanto mantém outras rotas no diretório de páginas para comportamento anterior. Se o seu aplicativo usa o diretório de páginas, consulte também a documentação do Pages Router.


- Exemplo
    - next-js_009





### 10 - ATRIBUTO STYLE PARA DEFINIR CSS INLINE


**URLs**

- http://localhost:3000/
- http://localhost:3000/home


- Exemplo
    - next-js_010


### 11 - MAIS COMPONENTES E CSS ESPECÍFICO POR COMPONENTE

- Exemplo
    - next-js_011


### 12 - ROTAS E COMPONENTE DE NAVEGAÇÃO LINK

- Documentação:
    - Link: https://nextjs.org/docs/app/api-reference/components/link

**URLs**

- http://localhost:3000/
- http://localhost:3000/home nok
- http://localhost:3000/services
- http://localhost:3000/contacts

- Exemplo
    - next-js_012


### 13 - INSERÇÃO DE IMAGENS COM O COMPONENTE IMAGE

- Documentação:
    - Link: https://nextjs.org/docs/app/api-reference/components/image

- Exemplo
    - next-js_013


### 14 - REVISÃO DA DOCUMENTAÇÃO SOBRE ROTEAMENTO 1 / 2

- Documentação:
    - Link: https://nextjs.org/docs

**Routing Fundamentals**

- https://nextjs.org/docs/app/building-your-application/routing


- Exemplo
    - next-js_014






### 15 - REVISÃO DA DOCUMENTAÇÃO SOBRE ROTEAMENTO 2 / 2

- Documentação:
    - Link: https://nextjs.org/docs

**Pages and Layouts**


- Documentação:
    - Link: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts


- Exemplo
    - next-js_015



### 16 - UTILIZANDO ROUTE GROUPS

**Route Groups**

- Documentação:
    - Link: https://nextjs.org/docs/app/building-your-application/routing/route-groups

**URLs**

- http://localhost:3000/services1
- http://localhost:3000/services2
- http://localhost:3000/services3

- Exemplo
    - next-js_016



### 17 - USANDO LAYOUTS - INTRODUÇÃO

- Exemplo
    - next-js_017


### 18 - INTRODUÇÃO ÀS DYNAMIC ROUTES

**Dynamic Routes**

- Link: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes


**URLs**

- http://localhost:3000/
- http://localhost:3000/service
- http://localhost:3000/services
- http://localhost:3000/contacts

- http://localhost:3000/service/1

- Exemplo
    - next-js_018









### 19 - EXPERIÊNCIAS COM DYNAMIC ROUTES


**URLs**

- http://localhost:3000/services
- http://localhost:3000/service/1
- http://localhost:3000/service/2
- http://localhost:3000/service/3

- Exemplo
    - next-js_019





### 20 - EXPERIÊNCIAS COM DYNAMIC ROUTES PARTE 2


- Exemplo
    - next-js_20








































