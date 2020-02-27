//Simular una carrera /2 usaurios con 100 posiciones. Ir mostrando el avance de ambos y decidir si hubo empate o ganador 

console.log("El ganador es",carrera());

function carrera()
{
    var pulga1=0,pulga2=0,ganador="",pos;

    while(pulga1<100 && pulga2<100)
    {
        console.log("Avance de pulga 1: ",pulga1+=salta());
        console.log("Avance de pulga 2: ",pulga2+=salta());
    }

    if(pulga1>=100 && pulga2>=100)
        ganador="Empate";
    else if(pulga1>pulga2)
        ganador="Pulga 1";
    else if(pulga2>pulga1)
        ganador="Pulga 2";

    return ganador;
}

function salta()
{
    var avance, pos=dado();
    if(pos==1)
        avance=3;
    else if(pos==2 || pos==3)
        avance=1;
    else 
        avance=2;
    return avance;
}

function dado()
{
    var num=Math.ceil(Math.random()*6);
    return num;
}
