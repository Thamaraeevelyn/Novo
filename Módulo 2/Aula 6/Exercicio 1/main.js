
let search = document.getElementById('submit');
let text = document.getElementById('pk-name');

// search.addEventListener('click', (event) => {
//     event.preventDefault();
//     let resp = tex.value;
//     $.ajax({url: 'https://pokeapi.co/api/v2/pokemon/' + resp,
//     success: function(result) {
//     console.log(result);
//     }})
// })

// $('#form1').submit(function(event) {
//     event.preventDefault();
//     let resp = text.value;
//     $.ajax({url: 'https://pokeapi.co/api/v2/pokemon/' + resp,
//     success: function(result) {
//     console.log(result);
//     }})
// })


$('#form1').submit(function(event) {
    event.preventDefault();
    // var $this = $('#pk-name');
    // $value = $this.val();
    $.ajax({url: 'https://pokeapi.co/api/v2/pokemon/' + $('#pk-name').val(),
    success: function(result) {
        let dados = document.createElement('h1');
        dados.innerText = `Nome: ${result.forms[0].name},\n Peso:${result.weight};\n Altura: ${result.height};\n ID: ${result.id}.`;
        document.body.append(dados);

    // console.log(result.forms[0].name);
    // console.log(result.weight);
    // console.log(result.height);
    // console.log(result.id);

    }})
})