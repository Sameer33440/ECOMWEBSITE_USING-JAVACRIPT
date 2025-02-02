import { getCartProductFromLS } from "./getCartProduct";
import { updateCartValue } from "./updatecartValue";

export const removeProdFromCart =(id)=>{
    let cartProducts=getCartProductFromLS();
    cartProducts=cartProducts.filter((curProd)=>curProd.id!==id);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
  
     
let removediv=document.getElementById(`card${id}`);
if(removediv){
    removediv.remove();
}
updateCartValue(cartProducts);

};