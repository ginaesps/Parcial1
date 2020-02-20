var veces=4;

console.log(" ",expont(veces));

function expont(exp)
{
    var e=0, x=2, mult=1, res=0, potencia=0, suma=0, sumafactorial=0,i;
    for(i=1; i<=exp; i++)
    {
        mult*=i;
        sumafactorial+=mult;
    }
    
    for(var j=1; j<=a; j++)
    {
        potencia+=Math.pow(x,j);
        suma+=potencia;
    }
    
    e=1+(suma/sumafactorial);
    res= Math.pow(e,x);
    return res;
}
