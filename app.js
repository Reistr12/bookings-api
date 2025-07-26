const express = require('express');
const routes = require('./routers/reserv');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
