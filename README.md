
# 🏐 Reservas de Quadras Esportivas API

Esta é uma API REST construída com **Node.js**, **Express** e **Prisma ORM**, que permite o **cadastro de quadras esportivas** e o **gerenciamento de reservas** sem conflitos de horário. O projeto segue a arquitetura **MVC** e está organizado para facilitar manutenção e escalabilidade.

---

## 🚀 Funcionalidades

### 📋 Quadras
- **GET /api/courts** – Lista todas as quadras cadastradas
- **POST /api/courts** – Cria uma nova quadra (evita duplicatas)

### 📅 Reservas
- **GET /api/bookings** – Lista todas as reservas de uma quadra
- **POST /api/bookings** – Cria uma nova reserva, validando:
  - Se a quadra existe
  - Se não há conflitos de horário

---

## 🛠 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL] – para persistência de dados
- Arquitetura **MVC (Model-View-Controller)**

---

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/reservas-api.git
cd reservas-api
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o banco de dados com Prisma**
```bash
npx prisma init
```

4. **Atualize o arquivo `.env` com a URL do banco**
```env
DATABASE_URL="file:./dev.db" # ou MySQL, conforme usado
```

5. **Crie o banco e rode as migrations**
```bash
npx prisma migrate dev --name init
```

6. **Inicie o servidor**
```bash
npm start
```

A API estará disponível em: [http://localhost:5000/api](http://localhost:5000/api)

---

## 📂 Estrutura do Projeto

```
reservas-api/
├── controllers/
│   ├── court.controller.js
│   └── booking.controller.js
├── services/
│   ├── court.service.js
│   └── booking.service.js
├── routers/
│   └── reserv.js
├── prisma/
│   └── schema.prisma
├── app.js
└── package.json
```

---

## 🧪 Testando com Thunder Client / Postman

### Criar quadra

```http
POST /api/courts
Content-Type: application/json

{
  "name": "Quadra A",
  "type": "Futsal"
}
```

### Criar reserva

```http
POST /api/bookings
Content-Type: application/json

{
  "date": "2025-07-30",
  "startTime": "15:00",
  "endTime": "16:00",
  "clientName": "Gabriel Reis",
  "courtName": "Quadra A"
}
```

---

## 📌 Status do Projeto

✅ Em desenvolvimento — funcionalidades básicas finalizadas  
🔄 Próximas melhorias:
- Validação com Zod
- Autenticação JWT
- Integração com painel administrativo

---

## 👨‍💻 Autor

Gabriel Reis  
[github.com/Reistr12](https://github.com/Reistr12)


