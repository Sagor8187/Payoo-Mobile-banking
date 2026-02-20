let cashoutbtn = document.getElementById("cashout-btn")

cashoutbtn.addEventListener("click",function(){
    let cahsoutNumber = getvaluefrominput("agent-number")
    let cahsoutamount = getvaluefrominput("amount")
    let cashoutpin = getvaluefrominput("pin-number")

    let availablebalance = currentbalance()

    let newbalance =availablebalance -Number(cahsoutamount)
    // console.log(newbalance)
     if(cahsoutNumber.length != 11){
        alert("invalid number");
        return
    }

    if(newbalance < 0){
        alert("Invalid amount")
        return
    }
    
    if(cashoutpin == '1234'){
        setbalance(newbalance)
    }else{
        alert("invalid pin")
        return
    }

    
   
})

// cashoutbtn.addEventListener("click",function(){

//     let agentnumber = document.getElementById("agent-number").value;

//     let cashout = document.getElementById("amount").value;

//     let pinnumber = document.getElementById("pin-number").value;

//     let balance = document.getElementById("total-balance");
//     let fundbalance = balance.innerText;


//     let newbalance =  Number(fundbalance) - Number(cashout)


//     if(agentnumber.length != 11){
//         alert("invalid number");
//         return
//     }

//     if(newbalance < 0){
//         alert("Invalid amount")
//         return
//     }

//     if(pinnumber == '1234'){
//         balance.innerText=newbalance;
//     }else{
//         alert("invalid pin")
//         return
//     }
   
// })