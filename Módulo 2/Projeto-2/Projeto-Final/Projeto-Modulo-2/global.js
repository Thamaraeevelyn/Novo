function btn(){
    var botao = document.querySelector(".btnResultado")
    var opcoes = document.querySelector("#escolhas")

    botao.addEventListener("click", function(event){
        // event.preventDefault();
        if(opcoes.value=="base"){
            base64()
        }else {
            validaRotacao()
        }
    })
}

var codify = document.getElementById('mensagemCodificada')

var encoding = document.getElementById('cod1')
var decoding = document.getElementById('cod2')

encoding.addEventListener('click', function() {

    codify.innerText = 'Mensagem para Codificar '
    codify.setAttribute('onClick', 'encodeText()')
})
decoding.addEventListener('click', function() {
    codify.innerText = "Mensagem para Decodificar"
    codify.setAttribute('onClick', 'decodeText()')

})

var codify2 = document.getElementById('mensagemDecodificada')

var encoding2 = document.getElementById('cod1')
var decoding2 = document.getElementById('cod2')

encoding.addEventListener('click', function() {

    codify2.innerText = 'Resultado Codificado'
    codify2.setAttribute('onClick', 'encodeText()')
})
decoding.addEventListener('click', function() {
    codify2.innerText = "Resultado Decodificado"
    codify2.setAttribute('onClick', 'decodeText()')

})
