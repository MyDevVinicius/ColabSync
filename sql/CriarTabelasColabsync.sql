
-- Tabelas principais
CREATE TABLE empresa (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cnpj BIGINT NOT NULL UNIQUE
);

CREATE TABLE departamento (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE colaborador (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    cargo VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    departamento_id INT NOT NULL REFERENCES departamento(id),
    empresa_id INT NOT NULL REFERENCES empresa(id)
);

CREATE TABLE usuario (
    id INT PRIMARY KEY REFERENCES colaborador(id),
    email_institucional VARCHAR(100) UNIQUE,
    senha VARCHAR(100),
    departamento_id INT NOT NULL REFERENCES departamento(id),
    empresa_id INT NOT NULL REFERENCES empresa(id)
);

-- Tabela de marcas
CREATE TABLE marca (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela de ativos e subclasses
CREATE TABLE ativos (
    id SERIAL PRIMARY KEY,
    etiqueta VARCHAR(50) NOT NULL UNIQUE,
    modelo VARCHAR(50),
    serial_number BIGINT NOT NULL UNIQUE,
    data_aquisicao DATE NOT NULL,
    final_garantia DATE,
    ultima_manutencao DATE,
    tipo TEXT CHECK (tipo IN ('notebook', 'desktop', 'impressora', 'monitor')),
    comentario TEXT,
    marca_id INT REFERENCES marca(id)
);

CREATE TABLE equipamento (
    id INT PRIMARY KEY REFERENCES ativos(id),
    processador VARCHAR(150),
    memoria VARCHAR(50),
    armazenamento VARCHAR(50),
    sistema_operacional VARCHAR(150)
);

CREATE TABLE monitor (
    id INT PRIMARY KEY REFERENCES ativos(id),
    cor VARCHAR(100),
    polegadas VARCHAR(150),
    resolucao VARCHAR(150)
);

CREATE TABLE impressora (
    id INT PRIMARY KEY REFERENCES ativos(id),
    tipo TEXT CHECK (tipo IN ('USB', 'REDE')) NOT NULL,
    modelo_toner VARCHAR(100)
);

CREATE TABLE licencas (
    id INT PRIMARY KEY REFERENCES ativos(id),
    nome VARCHAR(150)
);

-- Tabela de alocacoes
CREATE TABLE alocacoes (
    id SERIAL PRIMARY KEY,
    ativos_id INT REFERENCES ativos(id),
    colaborador_id INT REFERENCES colaborador(id),
    status TEXT CHECK (status IN ('ativo', 'inativo', 'devolvido', 'manutencao', 'descarte')) NOT NULL,
    data_alocacao DATE NOT NULL DEFAULT CURRENT_DATE
);
