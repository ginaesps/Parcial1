var repeticiones=3;

console.log("El resultado es ",calcularE(repeticiones));

function calcularE(reps)
{
    var i,e;
    
    for(i=1;i<=reps;i++)
        e+=(1 / factorial(i));
}

function factorial(num)
{
    var n=num,i;

    for(i=num-1;i>0;i--)
        n*=i;

    return n;
}