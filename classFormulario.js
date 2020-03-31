class Producto{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.qty=quantity;
    }
}

class UI{ //UI: User Interface
    addProduct(product){
        const productList=document.getElementById('productList');
        const element=document.createElement('div');
        element.innerHTML =` 
            <div>
                <div>
                    <strong>product Name</strong>: ${product.name} 
                    <strong>Price</strong>: ${product.price}
                    <strong>Quantity</strong>: ${product.qty}
                </div>
            </div>
        `; // ese tipo de apóstrofe es para indicar una instrucción de varias líneas
        productList.appendChild(element); // INVESTIGAR
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
}

const btn=document.getElementById("product-form").addEventListener('submit',(e)=>{
    console.log(e);
    const name=document.getElementById('name').value;
    const qty=document.getElementById('quantity').value;
    const price=document.getElementById('price').value;
    const product=new Producto(name,price,qty);
    console.log(product);
    var ui=new UI();
    ui.addProduct(product);
    e.preventDefault();
})
