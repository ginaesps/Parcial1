class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    mostrar(){
        console.log("("+this.x+","+this.y+")");
    }
    distanciaDestino(x,y){
        var d=Math.sqrt(Math.pow((x-this.x),2)+Math.pow((y-this.y),2)); 
        return d;
    }
}

var mipunto=new Punto(3,5);
mipunto.mostrar();

