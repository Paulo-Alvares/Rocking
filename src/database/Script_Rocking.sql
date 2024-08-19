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

-- Criar tabela "artigo"
CREATE TABLE artigo(
idArtigo INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
categoria VARCHAR(45),
CONSTRAINT chkCategoria CHECK(categoria in('Bandas', 'Instrumentos', 'Personalidades')),
dtPubli DATE
);

-- Criar tabela "favorito"
CREATE TABLE favorito(
fkUsuario INT,
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario),
fkArtigo INT,
FOREIGN KEY(fkArtigo) REFERENCES artigo(idArtigo),
PRIMARY KEY(fkUsuario, fkArtigo)
);

-- Inserindo dados na tabela "artigo"
INSERT INTO artigo (nome, categoria, dtPubli) VALUES
('The Beatles', 'Bandas','2022-11-28'),
('Nirvana', 'Bandas','2022-11-28'),
('Queen', 'Bandas','2022-11-28'),
('Arctic Monkeys', 'Bandas','2022-11-28'),
('Metallica', 'Bandas','2022-11-28'),
('Legião Urbana', 'Bandas','2022-11-28'),
("Guns N' Roses", 'Bandas','2022-11-28'),
('Black Sabbath', 'Bandas','2022-11-28'),
('Bateria', 'Instrumentos','2022-11-29'),
('Guitarra', 'Instrumentos','2022-11-29'),
('Violão', 'Instrumentos','2022-11-29'),
('Teclado', 'Instrumentos','2022-11-29'),
('Baixo', 'Instrumentos','2022-11-29'),
('Voz', 'Instrumentos','2022-11-29'),
('Paul McCartney', 'Personalidades','2022-11-30'),
('John Lennon', 'Personalidades','2022-11-30'),
('George Harrison', 'Personalidades','2022-11-30'),
('Ringo Starr', 'Personalidades','2022-11-30'),
('Elvis Presley', 'Personalidades','2022-12-01'),
('Chuck Berry', 'Personalidades','2022-12-01'),
('Rosseta Tharpe', 'Personalidades','2022-12-01'),
('Raul Seixas', 'Personalidades','2022-12-01'),
('Rita Lee', 'Personalidades','2022-12-01'),
('Freddie Mercury', 'Personalidades','2022-12-01'),
('Kurt Kubain', 'Personalidades','2022-12-01'),
('Dave Grohl', 'Personalidades','2022-12-01');

SELECT * FROM usuario;
SELECT * FROM artigo;
SELECT * FROM favorito;