'use strict'; // Modo restrito
// Este modo faz com que o Javascript opere de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação 
// * Consumo de API - https://viacep.com.br/ */

// FUNÇÃO PARA LIMPAR O FORMULARIO 
const limparFormulario = () =>{
    document.getElementById ('logradouro').value = '';
    document.getElementById ('uf').value = '';
    document.getElementById ('bairro').value = '';
    document.getElementById ('complemento').value = '';
    document.getElementById ('localidade').value = '';
}

// VERIFICAR SE TEM SOMENTE NÚMERO NO CÓDIGO - EXPRESSÃO REGULAR (REGEX) PARA TESTAR O VALOR INFORMADO PELO USUARIO
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);
// length É UMA PROPRIEDADE QUE VERIFICA A QUANTIDA DE CARACTERES DENTRO DO CEP 

