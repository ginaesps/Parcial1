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
            <div class='card text-center mb-4'>
                <div class='card-body'>
                    <strong>Name:</strong> ${product.name} 
                    <strong>Price:</strong> ${product.price}
                    <strong>Quantity:</strong> ${product.qty}
                    <a href='#' class='btn btn-danger' name='delete'>Delete</a>
                </div>
            </div>
        `; 
        productList.appendChild(element);        
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage('Producto eliminado exitosamente','danger');
        }
    }
    showMessage(mensaje,clase){
        const element=document.createElement('div');
        element.className=`alert alert-${clase} mt-2`;
        element.appendChild(document.createTextNode(mensaje));
        const contenedor=document.querySelector('.container');
        const app=document.querySelector('#App');
        contenedor.insertBefore(element,app);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },2500)
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
    ui.showMessage('Producto agregado exitosamente','success') ; 
    e.preventDefault();
})

const btnDelete=document.getElementById("productList").addEventListener('click',(e)=>{
    if(e.target.name==='delete'){
        var ui=new UI();
        ui.deleteProduct(e.target);
    }  
})
