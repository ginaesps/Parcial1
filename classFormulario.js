class Producto{
    constructor(name,price,quantity){
        this.name=name;
        this.price=price;
        this.qty=quantity;
    }
}

class UI{ 
    addProduct(product){
        const productList=document.getElementById('productList');
        const element=document.createElement('div');
        element.innerHTML =` 
            <div class='card text-center mb-4>
            <div class='card-body'>
            </div>
            </div>
            <div>
                <div>
                    <strong>product Name</strong>: ${product.name} 
                    <strong>Price</strong>: ${product.price}
                    <strong>Quantity</strong>: ${product.qty}
                    <a href='#' class='btn btn-danger' name='delete'>Delete</a>
                </div>
            </div>
        `; 
        productList.appendChild(element);
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
    ui.resetForm();
    e.preventDefault();
})
