import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updatecartValue";
getCartProductFromLS();
export const addToCart  =
  ( event, id, stock)=>{
let arrLocalStorageProduct=getCartProductFromLS();
 const currentProdElem=document.querySelector(`#card${id}`);
 console.log(currentProdElem);
 let quantity=currentProdElem.querySelector(".productQuantity").innerText ;
 let price=currentProdElem.querySelector(".productPrice").innerText;
 console.log(quantity) ;
 console.log(price);
 price=price.replace("₹","");
 
let existingProd=arrLocalStorageProduct.find((curProd)=> curProd.id=== id);
if(existingProd  && quantity>1)
{  quantity=Number (existingProd.quantity)+Number(quantity);
   price=float(price*quantity);
   let updatedCart={id,quantity,price};
    updatedCart= arrLocalStorageProduct.map((curProd)=>{
      return curProd.id===id? updatedCart : curProd;  

   });
   console.log(updatedCart)
   localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
   
  
  
}

 if(existingProd)
 {
   
    return false;
 }

 price=Number(price*quantity);
 quantity=Number(quantity);

 
 arrLocalStorageProduct.push({id,quantity,price}); 
 localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));
 updateCartValue(arrLocalStorageProduct);


}

