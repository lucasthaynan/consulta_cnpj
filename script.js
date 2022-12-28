// script.js

const form = document.querySelector("#form-cnpj");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtém o número de CNPJ inserido pelo usuário e remove a pontuação
  const cnpj = document.querySelector("#cnpj").value.replace(/[^\d]/g, "");

  // Faz uma requisição à API com o número de CNPJ
  fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao consultar CNPJ");
      }
      return response.json();
    })
    .then((data) => {
      // Exibe os resultados da consulta
      result.innerHTML = `
        <p>Razão Social: ${data.razao_social}</p>
        <p>Nome Fantasia: ${data.nome_fantasia}</p>
        <p>Atividade Principal: ${data.cnae_fiscal_descricao}</p>
      `;
    })
    .catch((error) => {
      // Exibe uma mensagem de erro se algo der errado
      result.innerHTML = `<p class="error">${error.message}</p>`;
    });
});
