/* EXERCICIO 1 */
const alunos = ['Alice', 'Gabriela', 'João', 'Francisco', 'Natália', 'Giovana', 'Gabriel']

//Resp.
const [aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7] = alunos;
console.log (aluno1,aluno2,aluno3,aluno4,aluno5,aluno6,aluno7);



/* EXERCICIO 2 */
const disciplinas = ['Matemática', 'Física', 'Química', 'Língua Portuguesa', 'Biologia']
//resp
const [mat1,mat2,mat3,,mat5] = disciplinas;
console.log (mat1,mat2,mat3,mat5);

/* EXERCICIO 3 */
const dadosCliente = {
    nome: 'Fabio',
    idade: 45,
    endereco: {
        logradouro: 'Rua das Palmeiras',
        numero: 42,
        bairro: 'Barra da Tijuca',
        cidade: 'Rio de Janeiro'
    },
    assinanteDesde: 2017
}
let {nome: foo,
     idade: w,
     endereco: {
        logradouro : bar,
        numero : x,
        bairro : y,
        cidade : z,
    },
      assinanteDesde: l,

   } =dadosCliente ;

   console.log(foo,w,bar,x,y,z,l);
   

/* EXERCICIO 4 */
const vestimenta = {
    camisa: {
        listrada: true,
        cor: 'Vermelha e branca',
        colecao: 'Outono/Inverno 2019'
    },
    calca: {
        cor: 'Azul escuro',
        colecao: 'Primavera/Verão 2021'
    }
}

/* EXERCICIO 5 - IF/ELSE/ELSE IF */
/*
Você irá escrever uma condicional que avaliará um saldo de conta e retornará um texto:
SE o saldo for 0 irá exibir 'Não há saldo disponível'
SE o saldo estiver abaixo de 0 irá exibir 'Possivelmente no cheque especial'
SE o saldo for maior que zero, irá exibir o saldo formatado em reais
*/

function avaliaSaldo(saldo) {
    // seu código aqui
}
avaliaSaldo(1000) // teste a saída passando-a como argumento


/* EXERCICIO 6 - SWITCH/CASE */
/*
Você irá escrever uma condicional que avaliará um texto e retornará um hexadecimal:
SE for 'vermelho' exibirá '#e81c0e'
SE for 'amarelo' exibirá '#eef211'
SE for 'roxo' exibirá '#b322e3'
SE não vier texto válido, exibirá a cor branca '#fff'
*/

function retornaCor(cor) {
    // seu código aqui
}

retornaCor('vermelho') // teste a saída passando-a como argumento

/* EXERCICIO 7 - Object Literal */
/*
Você irá escrever uma condicional que avaliará o produto e definirá uma seção para o mesmo:
Deverá ser criado um objeto chamado secoes
SE for 'cadeira' retornará 'móveis'
SE for 'lápis' retornará 'material escolar'
SE for 'fone de ouvido' retornará 'acessórios eletrônicos'
SE for 'camisa' retornará 'vestuário'
*/


