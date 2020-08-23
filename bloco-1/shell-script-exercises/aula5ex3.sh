#!/bin/bash

#3 Escreva um Shell Script que guarde o resultado do comando hostname em uma variável. Imprima na tela uma mensagem: "Este script está rodando no computador: _"   
HOST=$(hostname) 
echo $HOST
# $() tem o mesmo efeito que ` ` crases
