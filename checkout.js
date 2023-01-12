document.getElementById("cart-count").innerHTML=localStorage.getItem("cart_val");

var cartItems=document.getElementById("items_in_cart");

var total_amt=document.getElementById("amt");

var numOfItems=document.getElementById("total_crt_val");

var prod_data=JSON.parse(localStorage.getItem("prod-list"));

console.log(prod_data);

function checkoutItems(item_prev,item_name,item_count,item_price){

    var prod_det=document.createElement('div');

    prod_det.id="item-details";

    var prod_img=document.createElement('img');
    prod_img.src=item_prev;

    var prod_info=document.createElement('div');
    prod_info.id="prod-info";

    var prod_name=document.createElement('h3');

    prod_name.innerHTML=item_name;

    var prod_count=document.createElement('p');
    prod_count.innerHTML="x" + item_count;

    var price=document.createElement('p');
    price.innerHTML="Amount: " + item_count * item_price;

    prod_info.append(prod_name);

    prod_info.append(prod_count);

    prod_info.append(price);

    prod_det.append(prod_img);
    prod_det.append(prod_info);


    cartItems.append(prod_det);
    
    


}

for(i=0;i<prod_data.length;i++){
    checkoutItems(
        prod_data[i].preview,
        prod_data[i].title,
        prod_data[i].count,
        prod_data[i].price,
        
        );
};


var cost=0;

var count=0;

for(y=0;y<prod_data.length;y++){

    count+=prod_data[y].count;

    cost+=parseInt(prod_data[y].price) * parseInt(prod_data[y].count);

}

total_amt.innerHTML=cost;
numOfItems.innerHTML=count;

var place_order=document.getElementById("place-order");

place_order.addEventListener("click", function(){
    localStorage.removeItem("prod-list");
    localStorage.setItem("cart_val", 0)
    document.getElementById("cart-count").innerHTML=localStorage.getItem("cart_val");

})

