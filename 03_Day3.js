let itemList =[10,40,86,45,32]
let itemStart = 0;
for(let eachItem of itemList){
 itemStart = itemStart + eachItem
}

if(itemStart>250){
  console.log(`CRITICAL WARNING!!! The rocket is ${itemStart} tons of weight and will crash`)
}else{
  console.log(`CONFIRMATION MESSAGE: The rocket is ${itemStart} , You may proceed with launch`)
}

//Example 2
let accActivity = [50, -200, -30, -250, 20]
let accBal = 0
for(let eachTranscation of accActivity){
  accBal = accBal + eachTranscation
}
if(accBal<0){
  console.log(`Dear Customer, Your ACCOUNT BALANCE is ${accBal} therefore cannot withdraw`)
}else{
  console.log(`Dear Customer, You have a sufficient balance of ${accBal} and may withdraw funds`)
}