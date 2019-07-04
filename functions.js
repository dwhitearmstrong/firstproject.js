/* the function, const coffeeOrder takes two variables, which are then
logged once called and given information*/

/*const coffeeOrder =(cupSize,typeOfDrink) =>{
    console.log(`You would like a ${cupSize} cup of ${typeOfDrink} coffee, i'll get that for you`)
}

coffeeOrder("Large","americano")
coffeeOrder("Small","Black")*/


/* here a variable was called, (orderCount),which should be incrememnted by
+1 every time the function is called, (ordercount++)  */
/*let orderCount=0;
const takeOrder=(topping1,topping2,topping3)=>{
    orderCount++;
    console.log("order number" + orderCount)
    console.log(`Pizza with ${topping1}, ${topping2} & ${topping3} toppings, coming right up`);
}
takeOrder("pepperoni", "donna meat", "bacon")
takeOrder("pinapple","beets","brocili")*/




/*let accountBalance=500
const cashWithdrawal = (withdrawalAmount,accountNumber) =>{
    if( withdrawalAmount>accountBalance){
        console.log("insufficient funds")
    }
    if (withdrawalAmount<=accountBalance){
        let finalBalance = accountBalance-withdrawalAmount
    console.log(`you wish to withdraw £${withdrawalAmount} from the ${accountNumber} account, your balance is now £${finalBalance} `)

    }
    

}


cashWithdrawal(900,76543212)*/

let orderCount=0
const subSandwichOrder = (top1,top2,top3,top4,top5)=>{
    orderCount++;
    console.log(`Order number ${+ orderCount}`)
    console.log(`You have ordered a sub sandwich with ${top1}, ${top2}, ${top3}, ${top4}, & ${top5}`)
}
subSandwichOrder("steak","cheese","chicken","sweetcorn","lettice")


