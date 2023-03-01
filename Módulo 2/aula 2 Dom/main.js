
// console.log('Thamara'.charCodeAt(4));

// "ABC".charCodeAt(4)//65

// function decimal (valor){
//    let Resultado = valor.charCodeAt(0);

//    let exibir = document.createElement('p');
//    exibir.innerText = valor + ' = ' + Resultado;
//    document.body.append(exibir);

//    event.preventDefault();
// }

// 
// const Caneca= {
//     tipo : 'vidro',
//     modelo : 'rosa',

//     locomove(event){
//         console.log(event)
//     }
// }

// Caneca.locomove('girando');

// const Cachorro ={

//     raça : "vira-lata",
//     cor: "preto",
//     genero: "macho",

//     locomove(event) {
//         console.log (event)

//     }
// }
// Cachorro.locomove('correndo')


// pega a data atual//
 



function date(){
    var data = new Date ();

    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundos = data.getSeconds();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();

    document.querySelector('.hora').innerHTML = (`${hora}H : ${minuto}M : ${segundos}`)
}

setInterval(date, 1000)