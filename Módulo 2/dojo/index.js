
// $("#myDiv").css("border", "3px solid red");

// $.ajax({url:"https://randomuser.me/api",success:function(result){renderUser(result);
// }}); 

// class caixa {
//     constructor(dinheiro, Valor){
//         this.dinheiro = dinheiro;
//         this.Total= Valor;
    
//     }
// }
// class person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName; 
//     }

//     getFullName() {
//         return `${this.fistName} ${this.lastName}`;
//     }
// };

// const Person1 = new Person('Lukas','Monteiro');
// console.log(Person1.getFullName());

class Person{
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    sumIMC(){
        return this.weight/(this.height *)
    }
}