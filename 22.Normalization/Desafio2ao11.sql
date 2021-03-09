-- 2
CREATE VIEW SpotifyClone.estatisticas_musicais AS
SELECT COUNT(DISTINCT nome) AS cancoes,
	   COUNT(DISTINCT artista_id) AS artistas,
       COUNT(DISTINCT album_id) AS albuns FROM SpotifyClone.cancoes;
SELECT * FROM estatisticas_musicais;
-- 3
CREATE VIEW SpotifyClone.historico_reproducao_usuarios AS
SELECT u.nome AS usuario, c.nome AS nome FROM SpotifyClone.usuarios AS u
INNER JOIN SpotifyClone.usuario_ouve_cancao AS uoc ON u.id = uoc.usuario_id
INNER JOIN SpotifyClone.cancoes AS c ON c.id = uoc.cancao_id
ORDER BY usuario, nome;
-- 4
CREATE VIEW SpotifyClone.top_3_artistas AS
SELECT a.nome AS artista, COUNT(u.nome) AS seguidores FROM SpotifyClone.artistas AS a
INNER JOIN SpotifyClone.usuario_segue_artista AS usa ON a.id = usa.artista_id
INNER JOIN SpotifyClone.usuarios AS u ON u.id = usa.usuario_id
GROUP BY artista ORDER BY seguidores DESC, artista LIMIT 3;
-- 5
CREATE VIEW SpotifyClone.top_2_hits_do_momento AS
SELECT c.nome AS cancao, COUNT(uoc.cancao_id) AS reproducoes FROM SpotifyClone.cancoes AS c
INNER JOIN SpotifyClone.usuario_ouve_cancao AS uoc ON c.id = uoc.cancao_id
GROUP BY cancao ORDER BY reproducoes DESC, cancao LIMIT 2;
-- 6
CREATE VIEW SpotifyClone.faturamento_atual AS
SELECT MIN(p.valor) AS faturamento_minimo, MAX(p.valor) AS faturamento_maximo,
ROUND(AVG(p.valor), 2) AS faturamento_medio, SUM(p.valor) AS faturamento_total
FROM SpotifyClone.usuarios AS u INNER JOIN SpotifyClone.planos AS p ON u.plano_id = p.id;
-- 7
CREATE VIEW SpotifyClone.perfil_artistas AS
SELECT a.nome AS artista, al.nome AS album, COUNT(*) AS seguidores FROM SpotifyClone.artistas AS a
INNER JOIN SpotifyClone.albuns AS al ON a.id = al.artista_id
INNER JOIN SpotifyClone.usuario_segue_artista AS usa ON a.id = usa.artista_id
GROUP BY artista, album ORDER BY seguidores DESC, artista, album;
-- 8
USE SpotifyClone;
DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON SpotifyClone.usuarios
FOR EACH ROW
BEGIN
DELETE FROM SpotifyClone.usuario_segue_artista WHERE usuario_id = OLD.id;
DELETE FROM SpotifyClone.usuario_ouve_cancao WHERE usuario_id = OLD.id;
END $$

DELIMITER ;
DELETE FROM SpotifyClone.usuarios WHERE id = 1;
-- 9
DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN nomeUsuario VARCHAR(50))
BEGIN
SELECT a.nome AS artista, al.nome AS album FROM SpotifyClone.artistas AS a
RIGHT JOIN SpotifyClone.albuns AS al ON a.id = al.artista_id
WHERE a.nome = nomeUsuario ORDER BY album;
END $$

DELIMITER ;
-- 10
DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(idUsuario INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE retorneNumero INT;
	SELECT COUNT(uoc.cancao_id) AS quantidade_musicas_no_historico
		FROM SpotifyClone.usuario_ouve_cancao AS uoc
		INNER JOIN SpotifyClone.usuarios AS u ON uoc.usuario_id = u.id
		WHERE u.id = idUsuario INTO retorneNumero;
	RETURN retorneNumero;
END $$

DELIMITER ;
-- 11
CREATE VIEW SpotifyClone.cancoes_premium AS
SELECT c.nome AS nome, COUNT(uoc.cancao_id) AS reproducoes FROM SpotifyClone.cancoes AS c
INNER JOIN SpotifyClone.usuario_ouve_cancao AS uoc ON c.id = uoc.cancao_id
LEFT JOIN SpotifyClone.usuarios AS u ON uoc.usuario_id = u.id
LEFT JOIN SpotifyClone.planos AS p ON u.plano_id = p.id
WHERE p.tipo IN ('familiar', 'universitário')
GROUP BY nome ORDER BY nome;