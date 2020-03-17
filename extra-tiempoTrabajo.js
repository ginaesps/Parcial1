let entra= new hora(11,59,39);
let sale= new hora(17,34,1);
let cuantoTiempo= new hora(0,0,0);
var cont=0;

cuantoTiempo.s=(60-entra.s+sale.s);
if(cuantoTiempo.s>=60)
{
    cuantoTiempo.s-=60;
    cont=-1;
}

cuantoTiempo.m=60-entra.m+sale.m+cont;
cont=0;
if(cuantoTiempo.m>=60)
{
    cuantoTiempo.m-=60;
    cont=-1;
}

cuantoTiempo.h=sale.h-entra.h+cont;

console.log("Duró",cuantoTiempo.h,"h");

class hora
{
    constructor(h,m,s)
    {
        this.h=h;
        this.m=m; 
        this.s=s;
    }
}
