const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors()); // libera requisições CORS (ajuste se quiser limitar)
app.use(express.json()); // para receber JSON no corpo da requisição

// Map para armazenar máquinas com chave única: Nome do Computador
const maquinas = new Map();

// Rota para receber as infos do Python
app.post("/api/coletar-info", (req, res) => {
  const dados = req.body;
  const nomePc = dados["Nome do Computador"];

  if (!nomePc) {
    return res
      .status(400)
      .json({ status: "erro", message: "Nome do Computador é obrigatório" });
  }

  // Atualiza ou insere os dados da máquina, adicionando lastSeen (timestamp atual)
  maquinas.set(nomePc, { ...dados, lastSeen: Date.now() });

  console.log(`Dados recebidos de ${nomePc} às ${new Date().toLocaleString()}`);
  res.json({ status: "ok", message: "Dados recebidos com sucesso" });
});

// Rota para listar as máquinas recebidas, retornando um array com objetos
app.get("/api/maquinas", (req, res) => {
  res.json(Array.from(maquinas.values()));
});

// Opcional: função para limpar máquinas que não enviaram dados há mais de X minutos (exemplo 30min)
const LIMITE_INATIVIDADE_MS = 30 * 60 * 1000; // 30 minutos
setInterval(() => {
  const agora = Date.now();
  for (const [nomePc, dados] of maquinas.entries()) {
    if (agora - dados.lastSeen > LIMITE_INATIVIDADE_MS) {
      maquinas.delete(nomePc);
      console.log(`Removida máquina inativa: ${nomePc}`);
    }
  }
}, 10 * 60 * 1000); // roda a limpeza a cada 10 minutos

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
