#!/bin/bash

#BONUS 1. Escreva um Shell Script que imprima as palavras "shell", "script", "usando", "estrutura", "repetição", "for", "terminal" na tela, uma palavra por linha. Tente fazer isso usando o menor número de comandos possível
WORDS="shell script usando estrutura repetição for terminal"
for ITEM in $WORDS
do
    echo $ITEM
done

