function add(event)
{
    var currentuser = document.getElementById("tshirts");
    console.log(currentuser)


    var ProName = document.getElementById("pname").value;
    var ProPrice = document.getElementById("pprice").value;
    var ProImage = document.getElementById("pimage").value
    var product ={ProName,ProPrice,ProImage}

    var Ls = JSON.parse(localStorage.getItem("ProductList")) || []
    Ls.push(product);
    alert("Product Added Succesful")
    localStorage.setItem("CurrentProductList",JSON.stringify(Ls));
}