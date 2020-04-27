// Vector de objetos
class Student {
    constructor() {
      this.numControl = 0;
      this.name = "";
      this.gender = -1;
      this.age = 0;
    }
    RandomData() { //generación de información aleatoria para el alumno
      this.numControl = Math.floor(Math.random() * 2000);
      this.name =
        String.fromCharCode(65 + Math.floor(Math.random() * 25)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 24)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 25));
      this.gender = Math.floor(Math.random() * 2);
      this.age = 16 + Math.floor(Math.random() * 4);
    }
    ShowInfo() { //mostrar información del alumno
      let object = {//json
        NumberOfControl: this.numControl,
        Name: this.name,
        Gender: this.gender, //0: femenino   1:masculino
        Age: this.age //rango entre 16-20
      };
      return object;
    }
  }
  
  class Register {
    constructor(length) {
      this.length = length;
      this.array = new Array(this.length);
    }
    Initialize() {//llenado de vector con estudiante por posición y su respectiva info
      for (let i = 0; i < this.length; i++) {
        this.array[i] = new Student();
        this.array[i].RandomData();
      }
    }
    ShowRegister() {//mostrar el json de todos los alumnos contenidos en el vector
      console.clear();
      for (let i = 0; i < this.length; i++) 
        console.log(this.array[i].ShowInfo());
    }
    ShowAlumni(gender) {// mostrar todos los alumnos del género especificado
      console.clear();
      for (let i = 0; i < this.length; i++)
        if (this.array[i].gender === gender) 
          console.log(this.array[i].ShowInfo());
    }
    TotalAlumni(gender){//arrojar la CANTIDAD de alumnos existentes del género especificado
      console.clear();
      let i,cont=0;
      for(i=0;i<this.length;i++)
        if(this.array[i].gender===gender)
          cont++;
      return cont;
    }
    AgeAverage(gender) {//mostrar la edad promedio de los alumnos del género especificado
      let add = 0, cont = 0, i;
      for (i = 0; i < this.length; i++) {
        if (this.array[i].gender === gender) {
          add += this.array[i].age;
          cont++;
        }
      }
      return add / cont;
    }
    OldestStudent(){//mostrar el nombre del alumno de >edad
      console.clear();
      let i,oldest;
      for(i=0;i<this.length-1;i++){
        if(this.array[i].age>this.array[i+1].age)
          oldest=this.array[i];
        else if(this.array[i].age<this.array[i+1].age)
          oldest=this.array[i+1];
      }
      for(i=0;i<this.length;i++)//Mostrar los demás alumnos que tengan la =edad que el mayor
        if((oldest.age===this.array[i].age)&&oldest.name!=this.array[i].name)
          console.log(this.array[i].name)
      return oldest.name;//regresar alumno originalmente identificado como el mayor
    }
  }
  
  var vec = new Register(25);
  vec.Initialize();
  vec.ShowRegister();
  vec.ShowAlumni(0);
  vec.TotalAlumni(1);
  vec.AgeAverage(0);
  vec.OldestStudent();