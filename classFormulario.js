class Formulario{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.qty=quantity;
    }
}

const btn=document.getElementById("boton").addEventListener("click",function(){
    let nombre=getElementById("name").value;
    console.log("nombre"+nombre);
})
