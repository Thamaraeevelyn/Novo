var submit = document.querySelector('#bt');
var text = document.querySelector('#txt');
// var criar = document.body

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let cod = text.value;
    console.log(cod.charCodeAt(cod))

    let titulo = document.createElement('h1');
    titulo.innerText = cod.charCodeAt(cod);
    document.body.appendChild(titulo);
    
    // let titulo = document.createElement('h1')
    // let resp = document.createTextNode(cod.charCodeAt(cod));
    // titulo.appendChild(resp);
    // criar.appendChild(titulo);
})


// Exercicio facilitador
// let caneca = {
//     tamanho: 10,
//     cor: 'verde',

//     funcao(Tomar) { console.log(Tomar)
//     }
// }

// caneca.funcao('Tomar café');


//Exercicio final
// let zicao = {
//     raca: "vira-lata",
//     cor: 'caramelo',
//     tamanho: 'médio',
//     import(event) { console.log(event)
//     }
// }
// zicao.import("Simbolo do Brasil")
// console.log(zicao)






