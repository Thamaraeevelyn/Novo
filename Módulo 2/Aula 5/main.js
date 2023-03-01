// let pessoa = {
//     altura: 1.8,
//     raca: 'negro',
//     nacionalidade: 'brasileiro',
// }

// let objString = JSON.stringify(pessoa)

// let objString = JSON.stringify(
//     {
//         'cor': 'Amarela',
//         'acessa': false
//     }
// )

// console.log(objString, typeof(objString))

// document.write(pessoa);




/* Método Antigo de consumir a API */
// var url = 'https://api.github.com/users/LukasDniel'; // Sua URL

// var xhttp = new XMLHttpRequest();
// xhttp.open("GET", url, false);
// xhttp.send(); // A execução do script para aqui até a requisição retornar do servidor

// console.log(xhttp.responseText);


// Atual

// let URL = 'https://api.github.com/users/LukasDniel';

// const requisicao = fetch(URL).then(response => response.json());

// console.log(requisicao);

//Quem é esse Pokemon
//Ditto
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(data => {
    return data.json();
})
.then(get => {
    let ditto_str = JSON.stringify(get.moves[0].move.name);
    console.log(get.moves[0].move.name)
    document.write(ditto_str + "<br>")
})

// //Charmander
fetch('https://pokeapi.co/api/v2/pokemon/charmander')
.then(data => {
    return data.json();
})
.then(get => {
    let charmander_str = JSON.stringify(get.moves[15].move.name);
    let charmander2_str = JSON.stringify(get.moves[38].move.name);
    console.log(get.moves[15].move.name);
    document.write(charmander_str + "<br>" + charmander2_str + "<br>")
})

// //Evolution
fetch('https://pokeapi.co/api/v2/evolution-chain/10')
.then(data => {
    return data.json();
})
.then(get => {
    let evolution_str = JSON.stringify(get.chain.evolves_to[0].evolves_to[0].species.name);
    console.log(get)
    document.write(evolution_str)
})

//exercicio Extra
function fazerRequisicao() {
    var url = document.getElementById('url').value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
   
    xhttp.send();

    let pegarDados = JSON.parse(xhttp.responseText);

    document.getElementById("resposta").
    innerHTML = pegarDados.name
}
