#!/bin/bash

#2. Modifique o Shell Script do exercício 6 para aceitar uma quantidade ilimitada de arquivos ou diretórios como argumento (ou parâmetro)
FILES=$@
FILE=$1
for FILE in $FILES
do
if [ -f "$FILE" ]
then
    echo "$FILE é um arquivo comum"
elif [ -d "$FILE" ]
then
    echo "$FILE é um diretório"
else
    echo "$FILE é alguma outra coisa"
fi
done

