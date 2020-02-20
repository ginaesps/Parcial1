var veces=8;

console.log("e: ",calcularE(veces));

function calcularE(reps)
{
    var i,suma=1,denom=1;

    for(i=0;i<reps;i++)
    {
        suma+=1/factorial(denom);
        denom++;
    }

    return suma;
}

function factorial(num)
{
    var n=num,i;

    for(i=num-1;i>0;i--)
        n*=i;
    return n;
}
