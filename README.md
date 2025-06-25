# ColabSync

**ColabSync** é um sistema open source para gerenciamento de **colaboradores**, **ativos de TI** e **alocações de equipamentos** em empresas e organizações. Ideal para equipes de TI, RH ou qualquer setor que precise manter controle sobre quem está usando o quê.

![PostgreSQL](https://img.shields.io/badge/database-PostgreSQL-blue)
![Frontend](https://img.shields.io/badge/frontend-React%20%2B%20Vite%20%2B%20Tailwind-blueviolet)
![License MIT](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

---

## 🚀 Funcionalidades

- 📋 Cadastro de empresas e departamentos
- 👤 Gestão de colaboradores e usuários (com herança entre eles)
- 💻 Registro de ativos de TI (notebooks, monitores, impressoras, licenças)
- 🔄 Controle de alocação de equipamentos por colaborador
- 📊 Consultas avançadas por tipo, status ou colaborador
- 📦 Base de dados modelada em PostgreSQL
- 📲 Monitoramento de Desktop e notebooks

---

## 🛠️ Tecnologias

- **Frontend:** React + Vite + TailwindCSS + Axios
- **Banco de dados:** PostgreSQL
- **Estrutura pensada para expansão com backend (ex: Node.js/Express )**

---

## 📂 Estrutura

```
colabsync/
├── frontend/        # React + Vite + Tailwind (interface)
├── backend/         # API e lógica de negócios (em definição)
├── api/             # Documentação de API (ex: Swagger)
├── sql/
│   ├── criacao_tabelas_colabsync.sql
│   └── insercao_dados_colabsync.sql
├── docs/            # Diagramas e documentação técnica
├── README.md
└── LICENSE
```

---

## 🧪 Como usar

### 1. Clone o repositório

```bash
git clone https://github.com/MyDevVinicius/colabsync.git
cd colabsync/sql
```

### 2. Importe o banco de dados

Certifique-se de ter o PostgreSQL instalado e rodando.

```bash
psql -U seu_usuario -d sua_base -f criacao_tabelas_norsync.sql
psql -U seu_usuario -d sua_base -f insercao_dados_norsync.sql
```

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você quiser sugerir melhorias, corrigir bugs ou adicionar funcionalidades, siga os passos abaixo:

1. Faça um fork deste repositório
2. Crie uma branch: `git checkout -b minha-melhoria`
3. Faça suas alterações e dê commit: `git commit -m 'minha melhoria'`
4. Envie para seu fork: `git push origin minha-melhoria`
5. Crie um Pull Request aqui no GitHub

Sinta-se à vontade para abrir issues para discutir ideias, bugs ou sugestões!

## ✨ Autor

Desenvolvido com dedicação por Vinicius Nascimento. Inspirado pela necessidade real de controle simples e eficiente de ativos em ambientes empresariais.
