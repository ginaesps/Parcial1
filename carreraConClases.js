class Corredor {
  constructor(nombre, numero) {
    this.nombre = nombre;
    this.num = numero;
    this.posicion = 0;
    this.lugar = "";
    this.dado = new Dado(); // this.dado = nombre del dado creado
  }
  correr() {
    var pos = this.dado.lanzar(), avance = 0;
    if (pos == 1)
      avance = 3;
    else if (pos == 2 || pos == 3)
      avance = 1;
    else
      avance = 2;
    this.posicion += avance;
    return this.posicion;
  }
}

class Dado {
  constructor(caras = 6) {//permite definir las caras o por default 6
    this.caras = caras;
  }
  lanzar() {
    var num = Math.ceil(Math.random() * this.caras);
    return num;
  }
}

class Carrera {
  constructor(distancia, corredor1, corredor2) {
    this.distancia = distancia;
    this.c1 = corredor1;
    this.c2 = corredor2;
  }
  iniciar() {
    while (this.c1.posicion < this.distancia && this.c2.posicion < this.distancia) {
      this.c1.correr();
      this.c2.correr();
      console.log("Avance de", this.c1.nombre, "", this.c1.posicion);
      console.log("Avance de", this.c2.nombre, "", this.c2.posicion);
    }
    this.terminar();
  }
  terminar() {
    if (this.c1.posicion >= 100 && this.c2.posicion >= 100) {
      this.c1.lugar = "Empate";
      this.c2.lugar = "Empate";
      console.log("Empate");
    }
    else if (this.c1.posicion > this.c2.posicion) {
      this.c1.lugar = "Primero";
      this.c2.lugar = "Segundo";
      console.log(this.c1.nombre,"ganó");
    }

    else {
      this.c1.lugar = "Segundo"
      this.c2.lugar = "Primero";
      console.log(this.c2.nombre,"ganó");
    }
  }
}

var juan = new Corredor("Juan", 1);
var ana = new Corredor("Ana", 2);
var carrera100 = new Carrera(100, juan, ana);

carrera100.iniciar();
