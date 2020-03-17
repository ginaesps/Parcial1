class hora
{
    constructor(h,m,s)
    {
        this.h=h;
        this.m=m; 
        this.s=s;
    }
}

let entra= new hora(2,20,30);
let sale= new hora(4,10,20);
let cuantoTiempo= new hora(0,0,0);
var cont=0;

cuantoTiempo.s=(60-entra.s+sale.s);
if(cuantoTiempo.s>0)
{
    cont++;
    if(cuantoTiempo.s>=60)
    {
        cuantoTiempo.s-=60;
        cont++;
    }   
}

cuantoTiempo.m=60-entra.m+sale.m;
cuantoTiempo.m-=cont;
cont=0;
if(cuantoTiempo.m>0)
{
    cont++;
    if(cuantoTiempo.m>=60)
    {
        cuantoTiempo.m-=60;
        cont=1;
    }
}

cuantoTiempo.h=sale.h-entra.h;
cuantoTiempo.h-=cont;

console.log("Duró",cuantoTiempo.h,"h",",",cuantoTiempo.m,",",cuantoTiempo.s);
