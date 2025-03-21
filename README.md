# Course Platform API

API RESTful para uma plataforma de cursos online, desenvolvida com Node.js, Express e MongoDB.

## 🚀 Funcionalidades

- Autenticação de usuários
- Gerenciamento de cursos
- Gerenciamento de módulos
- Upload e gerenciamento de vídeos
- Controle de progresso dos alunos
- Documentação com Swagger

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- MongoDB
- Conta no Cloudinary (para armazenamento de vídeos)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/course-platform.git
cd course-platform
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
# Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
PORT=3000
MONGODB_URI=sua_uri_do_mongodb
SECRET_KEY=sua_chave_secreta_jwt
CLOUDINARY_CLOUD_NAME=seu_cloud_name
CLOUDINARY_API_KEY=sua_api_key
CLOUDINARY_API_SECRET=seu_api_secret
```

## 🚀 Executando o projeto

1. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

2. Acesse a documentação Swagger:

```
http://localhost:3000/docs
```

## 📚 Endpoints da API

### Autenticação

- POST /v1/auth/login - Retorna um token

### Usuários

- POST /v1/users - Cria um usuário
- GET /v1/users - Lista todos os usuários
- GET /v1/users/:email - Obtém um usuário específico
- PUT /v1/users/:id - Atualiza um usuário
- DELETE /v1/users/:id - Remove um usuário

### Cursos

- POST /v1/course - Cria um novo curso
- GET /v1/course - Lista todos os cursos
- GET /v1/course/:id - Obtém um curso específico
- PUT /v1/course/:id - Atualiza um curso
- DELETE /v1/course/:id - Remove um curso

### Módulos

- POST /v1/modules - Cria um novo módulo
- GET /v1/modules - Lista todos os módulos
- GET /v1/modules/:id - Obtém um módulo específico
- PUT /v1/modules/:id - Atualiza um módulo
- DELETE /v1/modules/:id - Remove um módulo

### Vídeos

- POST /v1/video - Upload de novo vídeo
- GET /v1/video - Lista todos os vídeos
- GET /v1/video/:id - Obtém um vídeo específico
- DELETE /v1/video/:id - Remove um vídeo

### Progresso

- POST /v1/complete-video - Marca vídeo como concluído
- POST /v1/complete-module - Marca módulo como concluído
- GET /v1/progress/:userId/:courseId - Obtém progresso do usuário em um curso
- GET /v1/course-progress/:userId/:courseId - Obtém progresso geral do curso
- DELETE /v1/delete-progress/:userId/:courseId - Remove progresso do usuário

## 🛠️ Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Cloudinary
- Swagger
- TypeScript


## ✒️ Autor

- **Matheus Ramos** - _Desenvolvimento_ - [RDSMatheus](https://github.com/RDSMatheus)
