
-- Inserindo empresas
INSERT INTO empresa (nome, cnpj) VALUES
('TechNova', 12345678000199),
('InovaTI', 98765432000188);

-- Inserindo departamentos
INSERT INTO departamento (nome) VALUES
('TI'),
('Financeiro'),
('Recursos Humanos');

-- Inserindo colaboradores
INSERT INTO colaborador (nome, cargo, email, departamento_id, empresa_id) VALUES
('Ana Silva', 'Analista de Sistemas', 'ana@technova.com', 1, 1),
('Bruno Costa', 'Desenvolvedor', 'bruno@inovati.com', 1, 2),
('Carla Lima', 'RH', 'carla@inovati.com', 3, 2);

-- Inserindo usuários (herdam de colaborador)
INSERT INTO usuario (id, email_institucional, senha, departamento_id, empresa_id) VALUES
(1, 'ana.silva@technova.com', 'senha123', 1, 1),
(2, 'bruno.costa@inovati.com', 'senha456', 1, 2);

-- Inserindo marcas
INSERT INTO marca (nome) VALUES
('Dell'),
('HP'),
('Lenovo');

-- Inserindo ativos
INSERT INTO ativos (etiqueta, modelo, serial_number, data_aquisicao, final_garantia, ultima_manutencao, tipo, comentario, marca_id)
VALUES
('EQ001', 'Latitude 5500', 10001, '2022-01-15', '2024-01-15', '2023-12-01', 'notebook', 'Notebook de uso geral', 1),
('EQ002', 'ProDesk 600', 10002, '2021-06-10', '2023-06-10', '2023-05-20', 'desktop', 'Computador da recepção', 2),
('MON001', 'ThinkVision', 20001, '2023-03-01', '2025-03-01', '2024-03-01', 'monitor', 'Monitor do setor financeiro', 3);

-- Inserindo subclasses de ativos
INSERT INTO equipamento (id, processador, memoria, armazenamento, sistema_operacional) VALUES
(1, 'Intel i5', '8GB', '256GB SSD', 'Windows 10'),
(2, 'Intel i7', '16GB', '512GB SSD', 'Windows 11');

INSERT INTO monitor (id, cor, polegadas, resolucao) VALUES
(3, 'Preto', '24', '1920x1080');

-- Inserindo alocações
INSERT INTO alocacoes (ativos_id, colaborador_id, status) VALUES
(1, 1, 'ativo'),
(2, 2, 'manutencao'),
(3, 3, 'ativo');
