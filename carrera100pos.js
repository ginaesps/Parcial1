//Simular una carrera /2 usaurios con 100 posiciones. Ir mostrando el avance de ambos y decidir si hubo empate o ganador 

console.log("El ganador es",carrera());

function carrera()
{
    var pulga1=0,pulga2=0,avance=0,ganador="";

    while(pulga1<=100 && pulga2<=100)
    {
        pos1=dado();
        if(pos1==1)
            avance=3;
        else if(pos1==2 || pos1==3)
            avance=1;
        else 
            avance=2;
        pulga1+=pos1;
        console.log("Avance de pulga 1: ",pulga1);

        pos2=dado();
        if(pos2==1)
            avance=3;
        else if(pos2==2 || pos2==3)
            avance=1;
        else 
            avance=2;
        pulga2+=pos2;
        console.log("Avance de pulga 2: ",pulga2);
    }

    if(pulga1>pulga2)
        ganador="Pulga 1";
    else if(pulga2>pulga1)
        ganador="Pulga 2";
    else
        ganador="Empate";
    return ganador;
}

function dado()
{
    var num=Math.ceil(Math.random()*6);
    return num;
}