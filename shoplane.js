$('#slider').slick({
    infinite: true,
    
    dots:true,
    infinite:true,
    autoplay:true,
    speed:2000,
    arrows:false,
});

var xhttp=new XMLHttpRequest();

xhttp.onload=function(){
    var res = this.responseText;

    // document.getElementById("res").innerHTML=this.responseText;
    getelement(res);
}

xhttp.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product",true);
xhttp.send();



var tab=document.getElementById("menu-tab");

var menu=document.getElementById("menu_");

tab.addEventListener("click",function (){
    menu.classList.toggle("side-menu_bar");
    tab.classList.toggle("toggle");

})

const clothings_list=document.getElementById("clothings_list");

const acc_section=document.getElementById("acc_list");

function getelement(prod){
    const prod_=JSON.parse(prod);

    for(let x of prod_){

        if(x.isAccessory===false){
            console.log(x.isAccessory);

            const card=document.createElement('div');               //div containing image and details of clothings (card)

            
            clothings_list.append(card);                             //appending card in clothing list (container div)

            card.id="card";                                                 //providing id to card div

            const link=document.createElement('a');                     //creating hyperlink 

            card.append(link);

            link.href="product.html?product_id=" + x.id;
            
            const img_div=document.createElement('div');                    //image div  creation

            link.append(img_div);                                            //appending image div in card

            img_div.id="img_div";                                               // providing id to image div
            
            const design_img= document.createElement('img');                //creating image element

            design_img.src=x.preview;                                       


            img_div.append(design_img);

           

            const details_div=document.createElement('div');
            link.append(details_div);

            details_div.id="pr_details";                    

            const design_name=document.createElement('h3');

            details_div.append(design_name);            //appending name of clothing in details div

            design_name.innerHTML=x.name;

            const brand=document.createElement('h4');

            details_div.append(brand);                     //appending brand name in details div
            brand.innerHTML=x.brand;

            const price=document.createElement('h5');

            details_div.append(price);                      //appending price of the prod in details div

            price.innerHTML="Rs. " + x.price;
    


            console.log(card);

            
        }

        

            


        
        else{
            const card=document.createElement('div');               //div containing image and details of clothings (card)

            
            acc_list.append(card);                             //appending card in clothing list (container div)

            card.id="card";                                                 //providing id to card div

            const link=document.createElement('a');                     //creating hyperlink 

            card.append(link);

            link.href="product.html?product_id=" + x.id;

            const img_div=document.createElement('div');                    //image div  creation

            link.append(img_div);                                            //appending image div in card

            img_div.id="img_div";                                               // providing id to image div
            
            const design_img= document.createElement('img');                //creating image element

            design_img.src=x.preview;                                       


            img_div.append(design_img);

           

            const details_div=document.createElement('div');
            link.append(details_div);

            details_div.id="pr_details";

            const design_name=document.createElement('h3');

            details_div.append(design_name);            //appending name of clothing in details div

            design_name.innerHTML=x.name;

            const brand=document.createElement('h4');

            details_div.append(brand);                     //appending brand name in details div
            brand.innerHTML=x.brand;

            const price=document.createElement('h5');

            details_div.append(price);                      //appending price of the prod in details div

            price.innerHTML="Rs. " + x.price;
    


            console.log(card);


        }

            
        }

    }

    if (localStorage.getItem("cart_val")===null)
        localStorage.setItem("cart_val",0);
    
    else
        document.getElementById("cart-count").innerHTML=localStorage.getItem("cart_val");




