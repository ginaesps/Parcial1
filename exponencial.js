var veces=15,valor=3;

console.log(" ",eX(valor,veces));

function eX(x,reps)
{
    var i,suma=1,exp=1;

    for(i=0;i<reps;i++)
    {
        suma+=(Math.pow(x,exp))/factorial(exp);
        exp++;
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
