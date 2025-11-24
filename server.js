const express = require('express');
const cors = require('cors');
const chatRoutes = require('./api/chat');
require('dotenv').config();

const app = express();

// Habilita CORS para aceitar requisições de outros domínios (ex.: frontend rodando em outra porta)
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://matheuslombard.github.io', 'https://chat-alpha-three-59.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Configura o servidor para interpretar JSON no corpo das requisições
app.use(express.json());

// Rota padrão para verificar status do servidor
app.get('/', (req, res) => {
  res.send('Esta rodadno');
});

app.use('/api/chat', chatRoutes);

// Define a porta: pega da variável de ambiente (.env) ou usa 3000 por padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor e exibe no console em qual porta está rodando
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});