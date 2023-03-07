
//PRÁTICA GUIADA 1

// function somaNumInser(){
//     let numero = Number(prompt(`Digite um numero`))

//     let soma = 0

//     while (numero !== 0) {
//         soma = soma + numero
//         numero = Number(prompt(`Digite outro numero`))
//     }

//     console.log(`Soma: ${soma}`)
// }

// somaNumInser()


//PRÁTICA GUIADA 2

// function imprimeNumAteEscolhido(){

// const numeroEsc = Number(prompt(`Digite um numero`))

// for (let i = 0; i <= numeroEsc; i++) {
    
//     console.log(i)
// }

// }

// imprimeNumAteEscolhido ()


//PRÁTICA GUIADA 3

// function impMsgArray(array) {
//     console.log(array)

//     for(let i = 0; i < array.length; i++) {

//         console.log(`O elemento de indice ${i} é ${array[i]}.`)
//     }
// }

// impMsgArray ([3, 7, 10, 12, 33])


//PRÁTICA GUIADA - SAIDERA

// function permiteAdm() {
//     let tipoUsuario = prompt(`Digite o tipo de usuário de acordo com a legenda abaixo:
//     "A" para administrador
//     "B" para usuario comum
//     "C" para usuário assinante`).toUpperCase()

//     while(tipoUsuario !== 'A'){
//         console.log(`Acesso Negado !`)

//         tipoUsuario = prompt(`Digite o tipo de usuário de acordo com a legenda abaixo:
//     "A" para administrador
//     "B" para usuario comum
//     "C" para usuário assinante`).toUpperCase()

//     }

//     console.log(`Boas vindas, ADMIN !`)
// }

// permiteAdm()


//PRÁTICA GUIADA - SAIDERA 2

// for(let i = 1; i < 11; i++){
// 	console.log(`2 x ${i} = ${2*i}`)
// }

//SAIDERA 2/A

let num = Number(prompt("Informe um número para a tabuada:"));

for (let j = num; j <= 10; j++) {
  console.log(`Tabuada do ${j}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${j} x ${i} = ${j * i}`);
  }
  console.log('\n');
}


//SAIDERA 3

// function impStrCxAlta(array){
//     console.log(array)

//     for(let i = 0; i < array.length; i++){
//         const palavraMaiusc = array[i].toUpperCase()

//         console.log(palavraMaiusc)
//     }
// }

// const palavras = ['wenderson', 'bendinelle','guimaraes', 'de', 'souza']

// impStrCxAlta(palavras)