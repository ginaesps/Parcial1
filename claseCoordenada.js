class Punto{
    constructor(x,y){
        Punto.contador=0;
        this.cont=Punto.contador++;
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
}

var mipunto=new Punto(3,5);
var destino=new Punto(4,7);

console.log(mipunto)
console.log(destino)
