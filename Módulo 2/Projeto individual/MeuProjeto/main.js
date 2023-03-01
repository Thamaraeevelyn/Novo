//Mostrar o valor do número de passos

let range = document.querySelector('#rangeIn');
let result = document.querySelector('#result');

range.addEventListener('input', function(){
  result.textContent = this.value
})

//Função para mostrar a opção de escolha do número de passos quando a Cifra de Cesar for selecionada
let options = document.querySelector('#options')
let steps = document.querySelector('.steps')

options.addEventListener('change', function(){
  if(options.value === 'cesar') {
    steps.style.display = 'block';
  } else {
    steps.style.display = 'none';
  }
})

//botão que troca o nome de acordo com a escolhade de codificar ou decodificar
let encode = document.querySelector('#encode');
let decode = document.querySelector('#decode');
let btn = document.querySelector('#codify');

encode.checked = true;

decode.addEventListener('click', function() {
  btn.innerText = 'Decodificar';
  btn.setAttribute('onClick', 'decodeText()')
})

encode.addEventListener('click', function () {
  btn.innerText = 'Codificar';
  btn.setAttribute('onClick', 'encodeText()')
})

//acesso às áreas de texto
function intext() {
  let input = document.getElementById("intext")
  return input.value
}

function outext(resultadoDaMensagem) {
  let output = document.querySelector('#outext')
  output.value = resultadoDaMensagem
  return
}

// let intext = document.querySelector('#intext').value;
// let outext = document.querySelector('#outext');


function encodeText() {
  let deslocamento = Number(document.getElementById('rangeIn').value)
  let selecao = document.getElementById("options")
  if (selecao.value == 'cesar') {
      outext(algoritmoCaesar(intext(), deslocamento))
  } else if (selecao.value == 'base64') {
      outext(btoa(intext()))
  } else { outext('Escolha um algoritmo no menu') }
}

function decodeText() {
  let deslocamento = 26 - Number(document.getElementById('rangeIn').value)
  let selecao = document.getElementById("options")
  if (selecao.value == 'cesar') {
      outext(algoritmoCaesar(intext(), deslocamento))
  } else if (selecao.value == 'base64') {
      outext(atob(intext()))
  } else { outext('Escolha um algoritmo no menu')
}
}

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


//---------------------------------------------------------------
// function btnCode() {
//   let options = document.querySelector('#options').value;

//   if(options === 'cesar'){
//     cesar(intext.value);
    
//   }else {
//     base64(intext);
//   }
// }
 
// ---------------------------------------------------     
// function base64() {
//   if(encode.checked) {
//     base64Encode();
//   } else {
//     base64Decode(intext);
//   }
// };
      
// function base64Encode() {
//   let txt = intext.value;
//   outext.value = btoa(txt);
//   console.log(btoa)
// };
      
// function base64Decode() {
//   let txt = intext.value;
//   outext.value = atob(txt);
//   console.log(btoa)
// };
      
// function cesar() {
//   if(encode.checked) {
//     cesarEncode();
//   } else {
//     cesarDecode(intext);
//   }
// };
// ---------------------------------------------------  
      
// function cesarEncode() {
//   let intext = document.querySelector('#intext').value;
//   let outext = document.querySelector('#outext');
//   let rangeValue = parseInt(range.value);
//   let calc = '';
  
//   for(let i=0; i<intext.length; i++) {
//     let asciiValue = intext[i].charCodeAt();
    
//     if(asciiValue >= 65 && asciiValue <= 90) {
//       calc += String.fromCharCode(((asciiValue - 65 + rangeValue) % 26) + 65);
//     } else if (asciiValue >= 97 && asciiValue <= 122) {
//       calc += String.fromCharCode(((asciiValue - 97 + rangeValue) % 26) + 97);
//     } else {
//       calc += String.fromCharCode(asciiValue);
//     };
//   };
//   outext.value = calc;
//   console.log(calc)
// };

// function cesarDecode() {
//   let intext = document.querySelector('#intext').value;
//   let outext = document.querySelector('#outext');
//   let rangeValue = parseInt(range.value);
//   let calc = '';

//   for(let i=0; i<intext.length; i++) {
//     let asciiValue = intext[i].charCodeAt();

//     if(asciiValue >= 65 && asciiValue <=90) {
//       calc += String.fromCharCode(((asciiValue - 65 - rangeValue + 26) % 26) + 65);
//     } else if (asciiValue >= 97 && asciiValue <= 122) {
//       calc += String.fromCharCode(((asciiValue - 97 - rangeValue + 26) % 26) + 97);
//     } else {
//       calc += String.fromCharCode(asciiValue);
//     };
//   };
//   outext.value = calc;
//   console.log(calc)
// };
