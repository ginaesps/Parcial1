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
    let product=document.getElementById("productList");
    let price=document.getElementById("productList");
    let qty=document.getElementById("productList").innerHTML="<p><strong>Nombre:</strong>"+nombre+"<strong>Precio:</strong>"+precio+"<strong>Cantidad:</strong>"+cantidad+"<p>"
    //let nomP=document.createElement("div");
    console.log("nombre",nombre);
})
