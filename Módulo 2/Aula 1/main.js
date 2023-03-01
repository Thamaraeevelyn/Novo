// var divDesc = 
// document.createElement('div');

// var divDesc = document.createElement('div');
// var paragrafoDesc = document.createElement('p');
// divDesc.append(paragrafoDesc);

// var cardDescricao = 
// document.querySelector("h1");
// cardDescricao.remove();

// function abrir() {
//     var aberto = document.createElement('p');
//     aberto.innerText = 'Estamos aberto';
//     document.body.appendChild(aberto);
// }


/*
let elementoPai = document.body;

let btnEnable = document.querySelector('#enable');
let btnDisable = document.querySelector('#disable');

function abrir() {
    // let remover = document.querySelector('h1');
    // remover.remove();
    
    let titulo = document.createElement('h1');
    
    let paragrafo = document.createTextNode('Está aberto')
    
    // titulo.remove('h1');
    
    titulo.appendChild(paragrafo);

    elementoPai.appendChild(titulo);

    btnEnable.style.backgroundColor = 'green';
    btnDisable.style = 'none';
}

function fechar() {
    document.querySelector('h1').innerHTML= 'Restaurante fechado';
    

    btnDisable.style.backgroundColor = 'red';
    btnEnable.style = 'none';
}
*/


function operaArray(arr, func) {
    return func(arr);
}
function somaArray(arr) {
    var soma = 0;
    for (var i=0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

console.log(operaArray([1,2,3], somaArray))

// Funções anonimas


