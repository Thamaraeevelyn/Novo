
// const fetch = require ('node-fetch');

// fetch("https://randomuser.me/api/")
// .then( (result) => {
//     console.log(result);
// })
// .catch((erro) => {
//     console.log(erro);
// });

// const fetch = require ('node-fetch');
// fetch("https://pokeapi.co/api/v2/pokemon?imit=151")
// .then( (result) => {
//     console.log(result);
// })
// .cath((erro) => {
//     console.log(erro);
// });

fetch('https:pokeapi.co/api/v2/pokemon?limit=151')
  .then(response => response.json())
  .then(allpokemon => console.log(allpokemon))