// comentario de 1 linea
/* comentario de varias lineas*/
// para correr programa directamente en visual es ctr + f5
// otra manera de correr programa es crear html e inspeccionar elemento en el buscador (necesitas internet): CHECAR PROBAR.HTML
// Generar 3 numeros random entre 0-19 (incluido) y mostrar el menor; al final mostrar los 3 para asegurar el buen funcionamiento

let num1=Math.floor(Math.random()*20);
let num2=Math.floor(Math.random()*20);
let num3=Math.floor(Math.random()*20);

if(num1<num2)
{
    if(num1<num3)
        console.log("El número menor es "+num1);
    else
        console.log("El número menor es "+num3);
}

else
{
    if(num2<num3)
        console.log("El número menor es "+num2);
    else
        console.log("El número menor es "+num3);
}

console.log(""+num1+" , "+num2+" y "+num3);