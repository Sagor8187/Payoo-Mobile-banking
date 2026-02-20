let transfer = document.getElementById("transfer-btn")
transfer.addEventListener("click",function(){

    let number = getvaluefrominput("transfer-number")

    let amount = getvaluefrominput("transfer-amount")

    let pin = getvaluefrominput("transfer-pin-number")

    let currentBalane = currentbalance()

    let newbalance = currentBalane - Number(amount)


   if(number.length !== 11){
    alert("invalid user number !")
    return
   }
   if(amount>currentBalane){
    alert("Insuficent amount")
    return
   }
   if(pin == "1234"){
    setbalance(newbalance)
   }else{
    alert("invalid pin")
    return
   }
   
})