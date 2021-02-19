#!/bin/bash

#4. Modifique o Shell Script do exercício anterior para receber o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro). Adicione também um mensagem mostrando como eram o como vão ficar os nomes dos arquivos a serem modificados
DIRECTORY=$1
EXTENSION=$2
DAY=$(date +%F)
    cd $DIRECTORY
for FILE in `ls *.$EXTENSION`
do
    mv $FILE $DAY-$FILE
    echo "Renomeando $FILE para $DAY-$FILE"
done