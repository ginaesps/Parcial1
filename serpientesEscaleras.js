class Tablero{  
    constructor(){
        this._vtr=new Array(100);
        this._vtr.fill(0);
        this._vtr[1]=36;
        this._vtr[6]=7;
        this._vtr[7]=23;
        this._vtr[14]=11;
        this._vtr[15]=-10;
        this._vtr[20]=21;
        this._vtr[27]=56;
        this._vtr[35]=8;
        this._vtr[45]=-21;
        this._vtr[48]=-38;
        this._vtr[50]=16;
        this._vtr[61]=-43;
        this._vtr[63]=-4;
        this._vtr[70]=20;
        this._vtr[73]=-21;
        this._vtr[77]=20;
        this._vtr[86]=7;
        this._vtr[88]=-21
        this._vtr[91]=-4;
        this._vtr[94]=-20;
        this._vtr[98]=-19;
    }
    evaluarCasilla(posicionJugador){
        var avance;
        if(posicionJugador>=0 && posicionJugador<=98)
            avance=this._vtr[posicionJugador-1];
        else
            avance=0;
        return avance;
    }
}
  
class Dado{
    constructor(caras=6){
        this.caras=caras;
    }
    lanzar(){
        var num=Math.ceil(Math.random()*this.caras);
        return num;
    }
}
 
class Jugador{
    constructor(nombre){
        this.nombre=nombre;
	    this._pscn=0;
        this._xlug="";
    }
    get Posicion(){ return this._pscn;}
    get LugarLlegada(){return this._xlug;}
    avanzar(dado,tablero){
        var pos=dado.lanzar()+dado.lanzar();
        this._pscn+=pos;
        this._pscn+=tablero.evaluarCasilla(this._pscn);
        if(this._pscn>100)
            this._pscn=100;
        return this._pscn;
    }
}
  
class Juego{
    constructor(jugador1, jugador2){
        this.j1=jugador1;
        this.j2=jugador2;
        this.dado=new Dado(); 
        this.tablero=new Tablero();
        this._cas=100;
    }
    jugar(){
        while (this.j1.Posicion < this._cas && this.j2.Posicion < this._cas){
        this.j1.avanzar(this.dado,this.tablero);
        this.j2.avanzar(this.dado,this.tablero);
        console.log("Avance de",this.j1.nombre,":",this.j1.Posicion);
        console.log("Avance de",this.j2.nombre,":",this.j2.Posicion);
        }
        this.terminar();
    }
    terminar(){
        if(this.j1.Posicion >= 100 && this.j2.Posicion >= 100){
            this.j1._xlug="Primero";
            this.j2._xlug="Primero";
            console.log("Empate");
        }
        else if (this.j1.Posicion > this.j2.Posicion){
            this.j1._xlug="Primero";
            this.j2._xlug="Segundo";
            console.log(this.j1.nombre,"ganó");
        }
    
        else{
            this.j1._xlug="Segundo"
            this.j2._xlug="Primero";
            console.log(this.j2.nombre,"ganó");
        }
    }
}

var miTablero= new Tablero();
var miDado=new Dado();
var ana=new Jugador("Ana");
var pedro=new Jugador("Pedro");
// para imprimir la posición por ejemplo, sería console.log(pedro.Posicion)

var serpientesEscaleras=new Juego(ana,pedro);
serpientesEscaleras.jugar();