// $('#jq').css('border', '3px solid red')
// $('#jq').css( 'height', '80px')

// $.ajax({url: 'https://randomuser.me/api',
// success: function(result) {
//     console.log(result);
// }})

// class pc {
//     constructor(tipo, quantidade, modelo) {
//         this.processador = tipo;
//         this.ram = quantidade;
//         this.video = modelo;
//     }
//             desempenho() {
//                 return `O computador possui processador ${this.processador}, com memória de ${this.ram} e com placa de video modelo ${this.video}`
//     }
// }

// const gamer = new pc("Core i7", 16, "RTX 3090");

// console.log(gamer.desempenho());

// let titulo = document.createElement('h1');
//     titulo.innerText = gamer.desempenho();
//     document.body.appendChild(titulo);


class imcc {
    constructor(peso, altura) {
        this.kg = peso;
        this.metros = altura;
    }
    calculo() {
        let imc = this.kg / (this.metros * this.metros);

        if (imc <= 18.4) {
            return `Abaixo do seu peso normal ${imc} Massa`
        } else if (imc >= 18.5 && imc <= 29.9) {
            return `Peso normal`
        } else if (imc >= 30 && imc <= 34.9) {
            return `Obesidade classe I`
        } else if (imc >= 35 && imc <= 39.9) {
            return `Obesidade classe II`
        } else if (imc > 40) {
            return `Obesidade classe III`
        }
    }
}

let pes = parseFloat(prompt("Digite seu peso. Ex: 71"));
let altur = parseFloat(prompt("Digite sua altura. Ex:1.70"));

const Seuimc = new imcc(pes, altur);
// console.log(Seuimc.calculo());

let titulo = document.createElement('h1');
titulo.innerText = Seuimc.calculo();
document.body.appendChild(titulo);

// function imc(){
//     let peso = parseFloat( prompt("Digite seu peso. Ex: 71"));
//     let altura = parseFloat(prompt("Digite sua altura. Ex:1.70"));

//     let imc = peso/(altura*altura);

//     if(imc <= 18.4){
//         console.log("Abaixo do seu peso normal " + imc + " Massa")
//     } else if( imc>= 18.5 && imc<= 29.9){
//         console.log("Peso normal " + imc + " Massa")
//     } else if(imc >= 30 && imc <= 34.9){
//         console.log("Obesidade classe I" + imc + " Massa")
//     } else if(imc >= 35 && imc <= 39.9){
//         console.log("Obesidade classe II" + imc + " Massa")
//     } else if(imc > 40){
//         console.log("Obesidade classe III" + imc + " Massa")
//     }

// }