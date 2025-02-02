import { getCartProductFromLS } from "./getCartProduct";

export const updateCartProductTotal = ()=>{
    let productSubTotal =document.querySelector(".productSubTotal");2
    let productFinalTotal =document.querySelector(".productFinalTotal");2

    let arrLocalStorageProduct=getCartProductFromLS();
    let initialValue=0;
    let totalproductPrice=arrLocalStorageProduct.reduce((accum,curElem)=>{let productPrice=parseInt(curElem.price)|| 0;
        return accum+productPrice;

    },initialValue);
    console.log(totalproductPrice);
    productSubTotal.textContent=`₹${totalproductPrice}`;
    productFinalTotal.textContent=`₹${totalproductPrice+50}`;

    
}
