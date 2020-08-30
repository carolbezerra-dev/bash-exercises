#!/bin/bash

#7 Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). Se o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". Se o argumento for um diretório, conte quantos arquivos existem nele e mostre a seguinte mensagem: "O _ tem _ arquivos."
if [ -d "$1" ] #quer saber se é diretório (directory)
then
    NUM=$(ls -l $1 | wc -l) #lista os arquivos e conta
    echo "O $1 tem $NUM arquivos"
else
    echo "O argumento $1 não é um diretório"
fi

