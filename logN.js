var veces=20,valor=3;

console.log("Logaritmo natural de ",valor," ",ln(valor,veces));

function ln(x,reps)
{
    var i,suma=0,exp=1,base,denom=1;

    base=(x-1)/x;

    for(i=0;i<reps;i++)
    {
        suma+=(Math.pow(base,exp))/denom;
        denom++;
        exp++;
    }

    return suma;
}
