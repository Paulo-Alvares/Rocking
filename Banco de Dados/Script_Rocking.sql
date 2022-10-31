-- Criar banco de dados "rocking"
create database rocking;

-- Usar banco de dados "rocking"
use rocking;

-- Criar tabela "usuario"
create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
telefone char(11),
senha varchar(45)
);

-- Criar tabela "artigo"
create table artigo(
idArtigo int primary key auto_increment,
nome varchar(45),
categoria varchar(45),
dtPubli date
);


-- Criar tabela "favorito"
create table favorito(
idFavorito int,
fkUsuario int,
foreign key(fkUsuario) references usuario(idUsuario),
fkArtigo int, 
foreign key(fkArtigo) references artigo(idArtigo),
primary key(idFavorito, fkUsuario, fkArtigo)
);