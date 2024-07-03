const frase = prompt('Ingrese una frase corta: ');
let vocales = '';
for(let i=0; i<frase.length; i++){
    let caracter = frase.charAt(i).toLowerCase();

    if('aeiou'.includes(caracter)){
        vocales+=caracter;
    }
}
if(vocales.length>0){
    alert('Las vocales en la frase son: '+ vocales);
}
else{
    alert('No se encontraron vocales en la frase');
}