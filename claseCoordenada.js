class Punto{
    constructor(x,y){
        //Punto.contador=0;
        //this.cont=Punto.contador++;
        this.x=x;
        this.y=y;
    }
    mostrar(){
        console.log("("+this.x+","+this.y+")");
    }
    distanciaADestino(x,y){
        var d=Math.sqrt(Math.pow((x-this.x),2)+Math.pow((y-this.y),2)); 
        return d;
    }
    distanciaAPunto(pDestino){
        var d=Math.sqrt(Math.pow((pDestino.x-this.x),2)+Math.pow((pDestino.y-this.y),2)); 
        return d;
    }
    static distanciaEntrePuntos(x1,y1,x2,y2){
        var d=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)); 
        return d;
    }
}
