#!/bin/bash

#4 Escreva um Shell Script que verifique se o caminho até um arquivo existe ("file path"). Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _"
FILE=`pwd` #para encontrar o caminho
if [ -e "$FILE" ] #-e quer saber se existe, dentro dos [ ], variável vem entre " "
then
    echo "O caminho $FILE está habilitado"
fi #é como se fosse o fechar chaves do JavaScript
if [ -w "$FILE" ] #-w quer saber se pode escrever
then
    echo "Você tem permissão para editar $FILE"
else
    echo "Você NÃO foi autorizado a editar $FILE"
fi

