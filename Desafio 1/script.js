
alert(`Vamos fazer varias operações usando dois numeros:`)
let numberOne = prompt("Digite o primeiro Número:")
let numberTwo = prompt("Digite o segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let soma = (numberOne + numberTwo)
let div = (numberOne/numberTwo)

alert(`A soma dos dois númuros é: ${soma}`)

alert(`A subtração entre o primeiro e o segundo número é: ${numberOne - numberTwo}`)

alert(`A multiplicação entre o primeiro e o segundo número é: ${numberOne * numberTwo}`)


if (Number.isInteger(div)){
    alert(`A divisão do primeiro pelo segundo número é: ${div}`)    
}else{
    alert(`A divisão do primeiro pelo segundo número é: ${div.toFixed(2)}`)
}


alert(`O resto da divisão do primeiro pelo segundo número é: ${numberOne % numberTwo}`)

if (soma % 2 >= 1 ){
    alert(`A soma dos dois números é impar: ${soma}`)
} else {
    alert(`A soma dos dois números é par: ${soma}`)
}

if (numberOne === numberTwo){
    alert(`Os dois números que você digitou são iguais: ${numberOne}`)
}else{
    alert(`Os dois números que você digitou são diferentes: ${numberOne} e ${numberTwo}`)
}

