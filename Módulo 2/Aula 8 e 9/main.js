//criar um input 
//criar função para verificar se é par

// $('#form').submit(function(event) {
//     event.preventDefault();
//     let txt = $('#num').val();
    
//         if (txt % 2 === 0) {
//             console.log("É par")
//         } else {
//             console.log("É impar")
//         };
// })


// // $('#form').submit(function(event) {
//     event.preventDefault();
//     let txt = $('#num').val();
//     try {
//         if (txt % 2 === 0) {
//             console.log("É par")
//         } else if (typeof txt === "string") {
//             let error = 'erro'
//             console.error(error)
//         } else {
//             console.log("É impar")
//         };
//     } catch (error) {
//         console.log('Ensira um número');
//         console.log(error)
//     }
// })

//Exercicio 2

// aula 9
// function mae() {
//     this.nome = "Função mãe";
//     function filha () {

//         console.log("Rodando função flha");
//         console.log(`Nome dp escorpo da mãe: $(this.nome)`);        
//     }
//     filha();
// }

// mae();
// try {
//     filha();
// } catch (error){
//     console.log("Essa função não existe no escopo global")

// }

// Exercício Api Professor 
// $.ajax({url:'https://viacep.com.br/ws/23040300/json/', 
// success:(result) => {
//     for(info in result) {
//         document.write(`${result[info]} <br />`)
//     }
// }});

// Exercício Número 2
// let numbers = [8,6,3] ;
// let doubles = numbers.map(function(num) {
//     return num * 3;
// });

// console.log(doubles);

