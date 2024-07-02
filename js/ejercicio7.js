numero1 = parseInt(prompt('Ingrese un numero: '));
numero2 = parseInt(prompt('Ingrese un segundo numero: '));
numero3 = parseInt(prompt('Ingrese el ultimo numero: '));
let mayor;
if (numero1 > numero2 && numero1 > numero3) {
    mayor = numero1;
} else if (numero2 > numero1 && numero2 > numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}
alert('El numero mayor de los tres ingresados es: '+mayor);