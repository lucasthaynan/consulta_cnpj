# Consulta de CNPJ

Este repositório contém um código que permite consultar informações de um CNPJ utilizando a API do BrasilAPI. O código consiste em um formulário HTML e um script JavaScript que realiza a requisição à API e exibe os resultados na página.

## Funcionamento

O formulário HTML contém um campo de entrada para o número de CNPJ e um botão "Consultar". Ao submeter o formulário, o script JavaScript é acionado. Ele realiza as seguintes etapas:

1. Obtém o número de CNPJ inserido pelo usuário e remove a pontuação.
2. Faz uma requisição à API do BrasilAPI, passando o número de CNPJ como parâmetro.
3. Verifica se a resposta da API é bem-sucedida. Caso contrário, lança um erro.
4. Extrai os dados retornados pela API (razão social, nome fantasia e atividade principal).
5. Exibe os resultados da consulta na página, inserindo os dados dentro do elemento HTML com o id "result".
6. Em caso de erro, exibe uma mensagem de erro no elemento HTML com a classe "error".

## Como usar

1. Clone o repositório em sua máquina local.
2. Abra o arquivo `index.html` em um navegador web.
3. Insira o número de CNPJ desejado no campo de entrada.
4. Clique no botão "Consultar".
5. Os resultados da consulta serão exibidos na página.

## Dependências

O código utiliza a seguinte dependência:

- [BrasilAPI](https://brasilapi.com.br/) - Uma API brasileira que fornece informações sobre CNPJ.

Certifique-se de incluir o arquivo `style.css` no mesmo diretório do arquivo `index.html` para que o estilo da página seja aplicado corretamente.

