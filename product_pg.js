var xhttp=new XMLHttpRequest();

xhttp.onload=function(){
    var obj = this.responseText;

    display_product_details(obj);
}

const prodId=window.location.search.split("=")[1];


xhttp.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + prodId,true);
xhttp.send();

function display_product_details(pr_obj){


    const product=JSON.parse(pr_obj); 

    const prod_im=document.getElementById("prod_im"); //adding image in main image of product preview
    prod_im.src=product.preview;

    const name=document.getElementById("name"); 
    name.innerHTML=product.name;

    const brand=document.getElementById("brand");
    brand.innerHTML=product.brand;

    const price=document.getElementById("price");
    price.innerHTML=product.price;

    const description=document.getElementById("description");
    description.innerHTML=product.description;


// for generating list of images of product in product.photos array

    for(const x in product.photos){
        const img_list=document.getElementById('preview-list');
        const img_=document.createElement('img');
        img_list.append(img_);

        img_.src=product.photos[x];
        img_.id=x;

        img_.addEventListener("click",function (){
            prod_im.src=product.photos[x]; addClass(this);

        })
        

    }

        const img_1=document.querySelector('#preview-list img');

        

        img_1.setAttribute("class","active");


}


//adding active class to the selected image and removing active class from sibling elements

    function addClass(el){
        let pr_sib=el.previousElementSibling; 

        while(pr_sib){
        if(pr_sib.classList.contains('active')) 
        pr_sib.classList.remove('active');
        pr_sib=pr_sib.previousElementSibling;
        }


        let nxt_siblng=el.nextElementSibling;

        while(nxt_siblng){

            if(nxt_siblng.classList.contains('active'))
            nxt_siblng.classList.remove('active');

            nxt_siblng=nxt_siblng.nextElementSibling; 
            }

        el.classList.add('active'); 
        
    }


    //getting no. of items in cart from local storage

    if (localStorage.getItem("cart_val")===null)
        localStorage.setItem("cart_val",0);
    
    else
        document.getElementById("cart-count").innerHTML=localStorage.getItem("cart_val");

        const addCart=document.getElementById("add-to-crt");

    
    //click event of add-to-cart button 

    addCart.addEventListener("click",function(){
        IncCartCount();
        requestData();
    });


    //increasing no. of items in cart on click event of add-to-cart button

    function IncCartCount(){
        var cartval=JSON.parse(localStorage.getItem("cart_val"));
        cartval++;
        localStorage.setItem("cart_val", cartval);

        document.getElementById("cart-count").innerHTML=localStorage.getItem("cart_val");

    }

    //making API call for getting data for local storage

    function requestData(){

            var prod_Id=window.location.search.split("=")[1];
            
            var http_request= new XMLHttpRequest();
            http_request.onload= function(){

            prodData=JSON.parse(this.responseText);
            addProdList(prodData);


        };

        http_request.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + prod_Id,true);
        http_request.send();

    }

    

    dataList=[]; 
    

    function addProdList(prodData){
        

        if (localStorage.getItem("prod-list")===null)

            dataList=[];

        
        else

            
            dataList=JSON.parse(localStorage.getItem("prod-list"));
            

        //adding product data in empty array
        if (dataList.length==0){

            var prod_info={
                id:prodData.id,
                title:prodData.name,
                count:1,
                price:prodData.price,
                preview:prodData.preview,
            };


            dataList.push(prod_info);


        }


        else{

            var prod_exst_count=0;

            //checking whether the product with same id is already present in the array

            for(i=0;i<dataList.length;i++){


                if(dataList[i].id==prodData.id){
                    prod_exst_count++;
                    dataList[i].count= parseInt(dataList[i].count) + 1;
                }
            }


            //if the product id is not present in the array // then adding details of new product id in the array

            if (prod_exst_count==0){

                var prod_info={
                    id:prodData.id,
                    title:prodData.name,
                    count:1,
                    price:prodData.price,
                    preview:prodData.preview,
            
                };

                
                dataList.push(prod_info);
            
                
            }

        }

        //storing product data in array in the local storage

        localStorage.setItem("prod-list", JSON.stringify(dataList));
        
        }

    