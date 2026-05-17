🚀 CADASTRO DE USUÁRIOS
APLICAÇÃO FULL STACK PARA GERENCIAMENTO DE USUÁRIOS
🌐 DEPLOY DA APLICAÇÃO
🔗 LINK DO PROJETO

Cadastro de Usuários

⚛️ FRONTEND

Frontend hospedado utilizando:

Vercel
FUNCIONALIDADES DO DEPLOY

✔️ Deploy automático via GitHub

✔️ Atualização automática a cada push

✔️ Hospedagem da aplicação React

✔️ Ambiente otimizado para frontend

⚙️ BACKEND

Backend hospedado utilizando:

Render
FUNCIONALIDADES DO DEPLOY

✔️ Deploy automático da API

✔️ Integração com GitHub

✔️ Hospedagem do servidor Node.js

✔️ Disponibilização pública da API RESTful

📖 SOBRE O PROJETO

O projeto Cadastro de Usuários é uma aplicação Full Stack desenvolvida com foco na integração entre frontend e backend.

A aplicação permite cadastrar usuários através de um formulário, enviar os dados para o banco utilizando uma API RESTful e exibir todos os usuários cadastrados diretamente na interface.

Também é possível remover usuários tanto da interface quanto do banco de dados através da rota DELETE da API.

O projeto foi desenvolvido com o objetivo de fortalecer conhecimentos em desenvolvimento backend, integração de APIs e comunicação entre frontend e backend.

🎯 OBJETIVOS DO PROJETO
Desenvolver uma aplicação Full Stack
Integrar frontend e backend
Trabalhar com consumo de API RESTful
Aplicar validação de dados
Trabalhar com gerenciamento de estado
Utilizar tipagem estática com TypeScript
Praticar integração com banco de dados NoSQL
Simular estrutura utilizada em aplicações reais
✨ FUNCIONALIDADES
👤 GERENCIAMENTO DE USUÁRIOS
FUNCIONALIDADES IMPLEMENTADAS

✔️ Cadastro de usuários

✔️ Listagem de usuários cadastrados

✔️ Remoção de usuários

✔️ Atualização automática da interface

✔️ Integração completa entre frontend e backend

✔️ Comunicação com API RESTful

✅ VALIDAÇÃO DE DADOS

Validação implementada utilizando:

Zod
REGRAS APLICADAS

✔️ Nome obrigatório

✔️ Email válido

✔️ Idade obrigatória

✔️ Validação de tipo numérico

🔔 NOTIFICAÇÕES

Sistema de notificações implementado utilizando:

React Hot Toast
FUNCIONALIDADES DAS NOTIFICAÇÕES

✔️ Usuário cadastrado com sucesso

✔️ Usuário deletado com sucesso

✔️ Exibição de mensagens de erro

✔️ Feedback visual para ações da aplicação

🛠️ TECNOLOGIAS UTILIZADAS
⚛️ FRONTEND
React
TypeScript
Tailwind CSS
React Hook Form
Zod
React Hot Toast
⚙️ BACKEND
Node.js
Express
JavaScript
Zod
🗄️ BANCO DE DADOS & ORM
MongoDB
Prisma
📡 FUNCIONAMENTO DA APLICAÇÃO
➕ CADASTRO DE USUÁRIOS

O usuário preenche o formulário com:

Nome
Email
Idade
APÓS O ENVIO

✔️ Os dados são validados

✔️ A requisição é enviada para a API através da rota POST

✔️ Os dados são armazenados no MongoDB

✔️ O usuário aparece automaticamente na interface

📄 LISTAGEM DE USUÁRIOS

A aplicação realiza uma requisição GET para buscar todos os usuários cadastrados.

Os usuários são renderizados dinamicamente na interface através do React.

❌ REMOÇÃO DE USUÁRIOS

A aplicação permite deletar usuários diretamente pela interface.

AO DELETAR

✔️ A rota DELETE da API é acionada

✔️ O usuário é removido do MongoDB

✔️ A interface é atualizada automaticamente

✔️ Uma notificação de sucesso é exibida

📁 ESTRUTURA DO PROJETO
⚛️ FRONTEND
src/
│
├── components/
│
├── pages/
│
├── services/
│
├── types/
│
├── schemas/
│
├── App.tsx
│
└── main.tsx
⚙️ BACKEND
src/
│
├── controllers/
│
├── services/
│
├── routes/
│
├── schemas/
│
├── config/
│
├── app.js
│
└── server.js
▶️ COMO EXECUTAR O PROJETO
1️⃣ INSTALAR DEPENDÊNCIAS
FRONTEND
npm install
BACKEND
npm install
2️⃣ CONFIGURAR VARIÁVEIS DE AMBIENTE

Crie um arquivo .env no backend:

DATABASE_URL="sua_string_do_mongodb"
PORT=3000
3️⃣ EXECUTAR O PROJETO
FRONTEND
npm run dev
BACKEND
npm run dev
📈 FUNCIONALIDADES IMPLEMENTADAS

✔️ Integração Full Stack

✔️ API RESTful

✔️ Rotas GET, POST e DELETE

✔️ Integração com MongoDB

✔️ Prisma ORM

✔️ Validação de dados com Zod

✔️ Formulários com React Hook Form

✔️ Notificações com React Hot Toast

✔️ Interface desenvolvida com React

✔️ Estilização com Tailwind CSS

✔️ Tipagem estática com TypeScript

✔️ Atualização dinâmica da interface

✔️ Deploy do frontend e backend

🚧 PRÓXIMAS MELHORIAS
Tratamento global de erros
Responsividade avançada
Tela de loading
Atualização de usuários
Autenticação de usuários
Paginação de dados
Testes automatizados
Dockerização da aplicação
💡 OBJETIVO DO PROJETO

Este projeto foi desenvolvido como forma de fixação dos conhecimentos adquiridos em desenvolvimento backend e integração Full Stack.

🧠 CONCEITOS DEMONSTRADOS

✔️ Comunicação entre frontend e backend

✔️ Consumo de API RESTful

✔️ Validação de dados

✔️ Integração com banco NoSQL

✔️ Organização escalável de código

✔️ Desenvolvimento tipado com TypeScript

✔️ Estrutura modular

✔️ Gerenciamento de formulários

✔️ Feedback visual para o usuário
