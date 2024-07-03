const numero = parseInt(prompt('Ingrese un numero: '));

let divisores = '';

if(numero % 2 === 0){
    divisores+= '2 ';
}
if(numero % 3 === 0){
    divisores+= '3 ';
}
if(numero % 5 === 0){
    divisores+= '5 ';
}
if(numero % 7 === 0){
    divisores+= '7 ';
}

if(divisores.length>0){
    alert(numero + ' es divisible por: '+ divisores);
}else{
    alert(numero + ' no es divisible por 2, 3, 5 o 7');
}