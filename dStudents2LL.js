//creación de la clase nodo (estudiante) para listas dobles
class Student {
    constructor() {
        this.numControl = 0;
        this.name = "";
        this.gender = -1;
        this.age = 0;
        this.grades = new Array(5);
        this.subjects = ["MAT_1", "MAT_2", "MAT_3", "MAT4", "MAT_5"];
        this.next = null;
        this.previous = null;
    }
    ShowInfo() {//mostrar información del alumno
        let object = {//json
            NumberOfControl: this.numControl,
            Name: this.name,
            Gender: this.gender, //0: femenino   1:masculino
            Age: this.age, //rango entre 16-20
            Grades: this.grades,
            Subjects: this.subjects
        };
        return object;
    }
    ShowTextInfo() {
        let data = "",i,sub_grds = "";

        for (i = 0; i < 5; i++)
            sub_grds += this.subjects[i] + ": " + this.grades[i] + " ";

        data +="Data:" +this.name +", number of control: " +this.numControl +",gender: " +(this.gender == 0 ? "W" : "M") +",age: " +this.age +", subjects&grades: " +sub_grds;
        
        return data;
    }
    GradesAverage() {
        let suma = 0,i;
        for (i = 0; i < 5; i++) suma += this.grades[i];
        return suma / 5;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
    }
    AddNew(node) {
        if (this.head === null) this.head = node;
        else {
            if (this.head.numControl > node.numControl) {
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            } 
            else {//head.numControl<node.numControl
                let temp = this.head;
                while (temp.numControl < node.numControl && temp.next != null)
                    temp = temp.next;

                if (temp.numControl > node.numControl) {
                    node.previous = temp.previous;
                    node.next = temp;
                    temp.previous.next = node;
                    temp.previous = node;
                } 
                else {
                    temp.next = node;
                    node.previous = temp;
                }
            }
        }
    }
    LookFor(numOfControl) {
        if (this.head != null) {
            let temp = this.head;
            while (temp.next != null && temp.numControl != numOfControl && temp.numControl < numOfControl)
                temp = temp.next;
            if (temp.numControl === numOfControl) return temp;
            else return null;
        }
    }
    List() {
        if (this.head === null) return " ";
        else return this.ListRecursive(this.head);
    }
    ListRecursive(node) {
        let data = node.ShowTextInfo();
        if (node.next === null) return data;
        else return data + "\n" + this.ListRecursive(node.next);
    }
    Delete(numOfCOntrol) {
        let node = this.LookFor(numOfCOntrol);
        if (node != null) {
            if (node === this.head) {
                this.head = node.next;
                this.head.previous = null;
                node.next = null;
            } 
            else {
                node.previous.next = node.next;
                if (node.next != null) {
                    node.next.previous = node.previous;
                    node.next = null;
                }
                node.previous = null;
            }
        }
    }
    //MÉTODOS SOLICITADOS EN EL CORREO
    GradesAverageByStudent() {
        if (this.head === null) return " ";
        else return this.GradesRecursive(this.head);
    }
    GradesRecursive(joint) {
        let data = joint.name + ": " + joint.GradesAverage() + ", ";
        if (joint.next === null) return data;
        else return data + this.GradesRecursive(joint.next) + " ";
    }
    HigherAverage() {
        if (this.head === null) return " ";
        else return this.HigherAverageRecursive(this.head, this.head);
    }
    HigherAverageRecursive(joint, higherAvgSt) {
        if (joint.GradesAverage() > higherAvgSt.GradesAverage())
            higherAvgSt = joint;
        if (joint.next === null) return higherAvgSt.name;
        else return this.HigherAverageRecursive(joint.next, higherAvgSt);
    }
    GradesAverageSub2(gender) {
        if (this.head === null) return 0;
        else {
            let temp = this.head,
                suma = 0,
                i = 0;
            while (temp != null) {
                if (temp.gender === gender) {
                    suma += temp.grades[1];
                    i++;
                }
                temp = temp.next;
            }
            return suma / i;
        }
    }
    HigherGradeSub2() {
        if (this.head === null) return " ";
        else {
            let temp = this.head,
                higher = temp;
            while (temp != null) {
                if (higher.grades[1] < temp.grades[1]) higher = temp;
                temp = temp.next;
            }
            return higher.name;
        }
    }
}

//a partir de aquí será la aplicación del programa
const dLs = new DoubleLinkedList();
let newStudent;

//creación y llenado de los campos de información de los alumnos
for (let i = 0; i < 25; i++) {
    newStudent = new Student();
    randomData(newStudent);
    dLs.AddNew(newStudent);
}
//mostrar todos los alumnos creados
console.log(dLs.List());

//obtener promedio de calificaciones de cada alumno
console.log(dLs.GradesAverageByStudent());

//obtener nombre del alumno con mayor promedio
console.log(dLs.HigherAverage());

//promedio de la materia dos de mujeres
console.log(dLs.GradesAverageSub2(0));
//promedio de la materia dos de hombres
console.log(dLs.GradesAverageSub2(1));

//nombre del alumn@ con mayor calificación en la materia dos
console.log(dLs.HigherGradeSub2());

//llenado de información del estudiante con valores aleatorios
function randomData(student) {
    student.numControl = Math.floor(Math.random() * 2000);
    student.name =
        String.fromCharCode(65 + Math.floor(Math.random() * 25)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 24)) +
        String.fromCharCode(65 + Math.floor(Math.random() * 25)); //las primeras tres letras representarán el nombre
    student.gender = Math.floor(Math.random() * 2); //0=mujer   1=hombre
    student.age = 16 + Math.floor(Math.random() * 4); // rango de 16-20
    for (let i = 0; i < 5; i++)
        student.grades[i] = Math.floor(1 + Math.random() * 10);
}
