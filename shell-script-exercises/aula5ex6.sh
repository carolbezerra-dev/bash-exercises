#!/bin/bash

#6 Modifique o Shell Script do exercício anterior de forma que ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro), em vez de perguntar ao usuário.
if [ -f "$1" ] #quer saber se é arquivo (file). $1 = 1º parâmetro
then
    echo "É arquivo"
elif [ -d "$1" ] #quer saber se é diretório (directory)
then
    echo "É diretório"
else
    echo "Outro tipo de arquivo"
fi

