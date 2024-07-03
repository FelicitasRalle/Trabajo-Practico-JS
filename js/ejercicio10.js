const numero = parseInt(prompt('Ingrese un numero'));
if(numero % 2 === 0){
    alert(numero + ' es divisible por 2');
} else if (numero % 3 === 0){
    alert(numero + ' es divisible por 3');
} else if(numero % 5 === 0){
    alert(numero + ' es divisble en 5');
} else if(numero % 7 === 0){
    alert(numero + ' es divisible en 7');
} else{
    alert(numero + 'no es divisible por 2, 3, 5 o 7');
}