//Mostrar o valor do número de passos

let range = document.querySelector('#rangeIn');
let result = document.querySelector('#result');

range.addEventListener('input', function(){
  result.textContent = this.value
})

// input do usuário

function inputDoUsuario() {
    let input = document.querySelector("#intext")
    return input.value
}

// retorno codificado/decodificado do input do usuário

function outputDaMensagem(resultadoDaMensagem) {
    let output = document.querySelector('#outext')
    output.value = resultadoDaMensagem
    return
}

// função para verificar qual tipo de código o usuário escolheu no radio button

var tipoDeCodigo = document.querySelector('#options')

tipoDeCodigo.addEventListener('change', function (tipoDeCodigo) {
    var codigoEscolhido = tipoDeCodigo.target.value
    let steps = document.querySelector('.steps')
   
    if (codigoEscolhido == 'base64') {
        steps.style.display = 'none'
    }
    else if (codigoEscolhido == 'cesar') {
        steps.style.display = 'inline'
    }


})

// trocando escrita do botão -> codificar e decodificar

var codify = document.getElementById('codify')

var encoding = document.getElementById('encode')
var decoding = document.getElementById('decode')

encoding.addEventListener('click', function() {

    codify.innerText = 'Codificar'
    codify.setAttribute('onClick', 'encodeText()')
})


decoding.addEventListener('click', function() {
    codify.innerText = "Decodificar"
    codify.setAttribute('onClick', 'decodeText()')

})

// criando funções de codificar e decodificar

function encodeText() {
    let deslocamento = Number(document.getElementById('rangeIn').value)
    let selecao = document.getElementById("options")
    if (selecao.value == 'cesar') {
        outputDaMensagem(algoritmoCaesar(inputDoUsuario(), deslocamento))
    } else if (selecao.value == 'base64') {
        outputDaMensagem(btoa(inputDoUsuario()))
    } else { outputDaMensagem('Escolha um algoritmo no menu') }
}

function decodeText() {
    let deslocamento = 26 - Number(document.getElementById('rangeIn').value)
    let selecao = document.getElementById("options")
    if (selecao.value == 'cesar') {
        outputDaMensagem(algoritmoCaesar(inputDoUsuario(), deslocamento))
    } else if (selecao.value == 'base64') {
        outputDaMensagem(atob(inputDoUsuario()))
    } else { outputDaMensagem('Escolha um algoritmo no menu')
}
}

// Lógica Cifra de César

function algoritmoCaesar(mensagem, passos) {
    let mensagemCifrada = ''

    for (i = 0; i <= mensagem.length; i++) {
        let varCaesar = mensagem.charCodeAt(i)
        if (mensagem.match(/[a-z]/i)) {
            if (varCaesar >= 97 && varCaesar <=122) {
                varCaesar = (varCaesar - 97 + passos) % 26 + 97
            } else if (varCaesar >= 65 && varCaesar <=90){
                varCaesar = (varCaesar - 65 + passos) % 26 + 65
            }
            mensagemCifrada = mensagemCifrada + String.fromCharCode(varCaesar)
        }
    }
    return mensagemCifrada
}

// botão RESET //

// var buttonReset = document.querySelector('#botaoReset')
// var textAreaInput = document.getElementById('inputDoUsuario')
// var textAreaOutput = document.getElementById('outputDaMensagem')
// console.log(buttonReset)
// console.log(textAreaInput)
// buttonReset.addEventListener('click', function(){
//     textAreaInput.value = ' '
//     textAreaOutput.value = ' '
// })
