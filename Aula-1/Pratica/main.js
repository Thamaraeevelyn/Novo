//console.log("alo mundo");

// const fala = "to rica, mil reais de verdade";

// const promessa = new Promise ((aceitar, rejeitar) => {
//     if (fala.includes("mil reais") && fala.includes ("de verdade")) {
//         aceitar ("very good") ;
//     } else{

//         rejeitar ("amm, droga");
//     }
// })

// .then((mensagemSucesso) => console.log (mensagemSucesso))
// .catch((mensagemErro) => console.log (mensagemErro));

// 
// function ComunicaçãoPerdida() {
//     const random = Math.floor (Math.random() * (2 - 0) + 1);

//     console.log(random === 1 ? true : false);
// }
// comunicacaoPerdida()

const chalk = require ('chalk');
console.log(chalk.blue("olá"), chalk.white("mundo"),chalk.magenta("colorido"));