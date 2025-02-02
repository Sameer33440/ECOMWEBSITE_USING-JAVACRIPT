import { getCartProductFromLS } from "./getCartProduct";


export const incrementDecrement=(event,id,stock,price)=>
{
    const currentCardElement=document.querySelector(`#card${id}`);
    const productQuantity =currentCardElement.querySelector(".productQuantity");
    const productPrice=currentCardElement.querySelector(".productPrice");
    let quantity=1;
    let localStorageprice=0;
    let arrLocalStorageProduct=getCartProductFromLS();
    let existingProd=arrLocalStorageProduct.find((curProd)=>curProd.id===id);
    if(existingProd)
    {
        quantity=existingProd.quantity;
        localStorageprice=existingProd.price;

    }
    else{
         localStorageprice=price;
         price=price;
    }

      
    

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
          quantity += 1;
        } else if (quantity === stock) {
          quantity = stock;
          localStorageprice=price*stock;
        }
      }
      if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
          quantity -= 1;
        }
      
      }
       localStorageprice=price*quantity;
       localStorageprice=localStorageprice.toFixed(2);

       
     
      let updatedCart={id,quantity,price: localStorageprice};
      updatedCart= arrLocalStorageProduct.map((curProd)=>{
        return curProd.id===id ? updatedCart : curProd;  
  
     });
     //console.log(updatedCart)
     localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));
     productQuantity.innerText=quantity;
     productPrice.innerText = localStorageprice;
      
    


};