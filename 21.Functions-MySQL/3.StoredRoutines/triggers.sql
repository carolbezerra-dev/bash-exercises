-- TRIGGER
-- 1 
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_insert
    BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;
-- como usar:
SELECT * FROM betrybe_automoveis.carros;
INSERT INTO carros(preco) VALUES (31650);
-- 2
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_update
    BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;
-- como usar
SELECT * FROM betrybe_automoveis.carros;
UPDATE carros SET preco = 45712 WHERE id_carro = 1;
-- 3
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_carros_delete
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
    INSERT INTO betrybe_automoveis.log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;
-- como usar
SELECT * FROM betrybe_automoveis.log_operacoes;
DELETE FROM carros WHERE id_carro = 1;