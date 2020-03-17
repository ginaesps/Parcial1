var entra= new hora(11,59,39),sale= new hora(17,34,1),contS=0,contM=0;contH=0;

while(entra.s!=sale.s)
{
    entra.s++;
    if(entra.s==60)
    {
        entra.s=0;
        entra.m++;
    }
    contS++;
}

while(entra.m!=sale.m)
{
    entra.m++;
    if(entra.m==60)
    {
        entra.m=0;
        entra.h++;
    }
    contM++;
}

contH=sale.h-entra.h;

var cuantoTiempo= new hora(contH,contM,contS);
console.log("Trabajó",cuantoTiempo);

function hora(h,m,s)
{
    this.h=h;
    this.m=m;
    this.s=s;
}

