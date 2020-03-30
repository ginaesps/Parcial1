class Producto{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.qty=quantity;
    }
}

const btn=document.getElementById("boton").addEventListener("click",function(){
    let nombre=document.getElementById("name").value;
    let precio=document.getElementById("price").value;
    let cantidad=document.getElementById("quantity").value;
    //let product=document.getElementById("productList");
    //let price=document.getElementById("productList");
    //let qty=
    //las 3 variables de arriba no las necesitamos, ya que estamos haciendo una asignación directa al elemento ProductList
    //si le ponemos un += nos vamos a asegurar que se vaya quedando todo, pero lo ideal entonces serìa meterlo en un DIV como en la siguiente linea
    //    document.getElementById("productList").innerHTML+="<div><p><strong>Nombre:</strong>"+nombre+"<strong>Precio:</strong>"+precio+"<strong>Cantidad:</strong>"+cantidad+"<p></div>"
    //para que al agregar algo de CSS podamos separar los elementos, pero ya es una linea un poco complicada leer y mantener,
    //por eso crear la clase UI y utilizar el createElement es mejor alternativa
    document.getElementById("productList").innerHTML+="<p><strong>Nombre:</strong>"+nombre+"<strong>Precio:</strong>"+precio+"<strong>Cantidad:</strong>"+cantidad+"<p>"
    //let nomP=document.createElement("div");
    console.log("nombre",nombre);
})
