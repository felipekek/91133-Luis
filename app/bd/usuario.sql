-- Cria o banco de dados caso ainda não exista
CREATE DATABASE IF NOT EXISTS estoque;

-- Usa o banco criado
USE estoque;

-- Cria a tabela de usuário
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- Insere o usuário admin com senha "admin123"
INSERT INTO usuarios(usuario, senha)
values('admin', password('admin123'));