// document.getElementById("current_date").innerHTML = Date();

// date = new Date();
// year = date.getFullYear();
// month = date.getMonth() + 1;
// day = date.getDate();
// document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;

/* ------------ pego da internet ------------ */

// function atualizaRelogio(){ 
//     var momentoAtual = new Date();
    
//     var vhora = momentoAtual.getHours();
//     var vminuto = momentoAtual.getMinutes();
//     var vsegundo = momentoAtual.getSeconds();
    
//     var vdia = momentoAtual.getDate();
//     var vmes = momentoAtual.getMonth() + 1;
//     var vano = momentoAtual.getFullYear();
    
//     if (vdia < 10){ vdia = "0" + vdia;}
//     if (vmes < 10){ vmes = "0" + vmes;}
//     if (vhora < 10){ vhora = "0" + vhora;}
//     if (vminuto < 10){ vminuto = "0" + vminuto;}
//     if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

//     dataFormat = vdia + " / " + vmes + " / " + vano;
//     horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

//     document.getElementById("data").innerHTML = dataFormat;
//     document.getElementById("hora").innerHTML = horaFormat;

//     setTimeout("atualizaRelogio()",1000);
// };

/* ------------- termino de código ----------------*/

// Pega data atual
var data = new Date();
document.write(data);

//Pega hora
let hora = data.getHours();

//Pega minutos
let minutos = data.getMinutes();

//Pega segundos
let segundos = data.getSeconds();

//Data especifica
let dataEspecifica = new Date(Date.parse("March 10, 2022"));

// Pegar dia do Mês

let diaMes = data.getDate();

// pegar Mes
let mes = data.getMonth();

//Pegar Ano
let ano = data.getFullYear();

// Padrão Brasileiro

let brasil= data.getDate() = '/' + (data.getMonth()+1) + '/' + data.getFullYear();

// Mostrar apenas o nome do dia sabado, domingo..

let dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

console.log(dias[data.getDay()]);

//Somar Data
let somarData = data.setDate(data.getDate() + 60);

//somar horas
let somarHoras = data.setHours( data.getHours() + 20);
