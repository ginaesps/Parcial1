class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    mostrar(){
        console.log("("+this.x+","+this.y+")");
    }
}

var mipunto=new Punto(3,5);
mipunto.mostrar();

