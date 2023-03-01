//FUNÇÃO DE ARRAY MAP

// const names = ['Lukas','Daniel','Carla','Yeshua'];
// names.map(item) => {
//     console.log(`${item} é incrivel`)

// });

// Função do Array Filter

const lista = [10, 15, 45, 78, 94];
const novoArr = lista.filter((item) => {
    
})
console.log(novoArr)

//Função Filter em Objetos

const estudantes = [ 
    {nome : 'Samuel', nota : 8},
    {nome : 'Matheus' , nota: 10},
    {nome : 'Davi' , nota : 9 },
    {nome : 'seilá' , nota : 3},
    {nome :'Thamara' , nota : 8},
];

const final = estudantes.filter( est => est.nota <= 6? true :false);

console.log(final)

final.forEach ( aluno => {
    console.log(`${aluno.nome} não passou`);
})

const aprovado = estudantes.filter( est => est.nota >= 6? true :false);

console.log(aprovado)

aprovado.forEach ( alun => {
    console.log(`${alun.nome}  passou`);
})