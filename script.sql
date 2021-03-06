CREATE DATABASE IF NOT EXISTS loja;

USE loja;

CREATE TABLE IF NOT EXISTS `encomenda` (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    telefone varchar(255) NOT NULL,
    preco float NOT NULL,
    nome_produto varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;