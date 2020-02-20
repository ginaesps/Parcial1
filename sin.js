var veces=8,angulo=3;

console.log("Seno de ",angulo," ",sin(angulo,veces));

function sin(x,reps)
{
    var i,suma=0,signo=1,exp=1;

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
