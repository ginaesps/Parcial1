//Calcular tiempo que un trabajador duró en su jornada a partir de una hora de entrada y salida (h a 24, jornada<24h)

class hora
{
    constructor(h,m,s)
    {
        this.h=h;
        this.m=m; 
        this.s=s;
    }
}

var entra= new hora(2,20,30), sale= new hora(4,10,20);
var segundosTotalesEntrada=hmsAsegundos(entra.h,entra.m,entra.s);
var segundosTotaleSalida=hmsAsegundos(sale.h,sale.m,sale.s);
var segundosTotalesTrabajo=segundosTotaleSalida-segundosTotalesEntrada;

console.log(segundosAhms(segundosTotalesTrabajo));

function hmsAsegundos(h,m,s)//debe regresar los segundos que han pasado desde las 00:00:00 hasta la hora dada a formato de 24
{
    var segundos;
    segundos=h*3600+m*60+s;
    return segundos;
}

function segundosAhms(s)//debe recibir un valor total de segundos e imprimir con console.log() las horas, minutos y segundos equivalentes
{
    var hr,min,seg;

    hr=Math.floor(s/3600);
    min=Math.floor((s-hr*3600)/60);
    seg=s-(hr*3600+min*60);
    console.log(hr,"h",min,"min",seg,"seg");
    return ":)";
}