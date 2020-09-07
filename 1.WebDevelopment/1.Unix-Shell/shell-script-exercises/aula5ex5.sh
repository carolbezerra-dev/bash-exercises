#!/bin/bash

#5 Escreva um Shell Script que peça ao usuário um caminho de arquivo ou diretório e, em seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.
echo "Insira um caminho de arquivo ou diretório"
read RES #ler a resposta do usuário, cria a variável RES e armazena o retorno do usuário
if [ -f "$RES" ] #quer saber se é arquivo (-f = file)
then
    echo "É arquivo"
elif [ -d "$RES" ] #quer saber se é diretório (-d = directory)
then
    echo "É diretório"
else
    echo "Outro tipo de arquivo"
fi
ls -l $RES

