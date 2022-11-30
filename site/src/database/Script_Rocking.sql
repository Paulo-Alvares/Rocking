-- Criar banco de dados "rocking"
CREATE DATABASE rocking;

-- Usar banco de dados "rocking"
USE rocking;

-- Criar tabela "usuario"
CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(70),
email VARCHAR(200),
senha VARCHAR(40)
);

SELECT * FROM usuario;