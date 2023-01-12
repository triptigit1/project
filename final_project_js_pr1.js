var xhttp=new XMLHttpRequest();

xhttp.onload=function(){
    var res = this.responseText;

    // document.getElementById("res").innerHTML=this.responseText;
    getelement(res);
}

xhttp.open('GET',"https://5d76bf96515d1a0014085cf9.mockapi.io/product/1",true);
xhttp.send();

function getelement(prod_j){


    prod_=JSON.parse(prod_j);
    console.log(prod_);



const prod_div=document.getElementById("img_div");

const prod_img=document.createElement('img'); //creating img 

prod_div.append(prod_img);

prod_img.setAttribute("src",prod_.preview);

const desc_=document.getElementById("prod_d");


const design_name=document.createElement('h1'); 
desc_.append(design_name);

design_name.innerHTML= prod_.name;

const brand=document.createElement('h4');
desc_.append(brand);

brand.innerHTML=prod_.brand;

const price=document.createElement('h3');
desc_.append(price);

price.innerHTML="Price: Rs ";

const price_rs=document.createElement('span');
price.append(price_rs);

price_rs.innerHTML=prod_.price;

const descr_div=document.createElement('div');
desc_.append(descr_div);

const des_h=document.createElement('h3');
descr_div.append(des_h);

des_h.innerHTML="Description";

const para=document.createElement('p');
descr_div.innerHTML=prod_.description;

const prod_pr=document.createElement('div'); //product preview div
desc_.append(prod_pr);

const preview_h=document.createElement('h3');  //heading of product preview div
prod_pr.append(preview_h);

preview_h.innerHTML="Product Preview";

const pr_img_div=document.createElement('div');
prod_pr.append(pr_img_div);

pr_img_div.id="pr_img";  //id of preview image div

for (let x of prod_.photos){
    const img=document.createElement('img');
    pr_img_div.append(img);

    img.setAttribute("src",x);

    img.style.width="200px";
    img.style.height="200px";
}







}
