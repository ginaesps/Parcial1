var veces=8,angulo=30;

console.log("Coseno de ",angulo," ",cos(angulo,veces));

function cos(x,reps)
{
    var i,suma=1.0,signo=-1.0,exp=2;

    for(i=0;i<reps;i++)
    {
        
        suma+=(Math.pow(x,exp))/factorial(exp)*signo;
        exp+=2;
        signo*=-1;
    }

    return suma;
}

function factorial(num)
{
    var n=num,i;

    for(i=num-1;i>0;i--)
        n*=i;
    return n;
    //return parseFloat(n);
}
