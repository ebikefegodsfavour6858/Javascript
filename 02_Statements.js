let cartTotal =150;
let shippingCost = 15;
let hasPromoCode = false;
let cartTotalNew;
if (hasPromoCode){
  cartTotalNew=cartTotal-85
  console.log(`New cart total is now = ${cartTotalNew}.`);
}else{
  cartTotalNew=cartTotal;
  console.log(`Oops!Unfortunatenly your cart total = ${cartTotalNew} and does not attract any discounts`)
}
if(cartTotalNew>=150){
  shippingCost = 0
  console.log("Congratulations! You have unlocked Free shipping to your location")
}else{
  console.log(`Your cart total is not up to the specific amount for free shipping`)
}
console.log(`PromoPluse Invoice: Final Total is ${cartTotalNew} with ${shippingCost} shipping cost`)
