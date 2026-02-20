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

    let history = document.getElementById("transaction-section")
    let divs = document.createElement("div")

    divs.innerHTML = `
        <div class="max-w-md mx-auto mt-6 p-6 rounded-2xl shadow-xl
        bg-blue-500/20 backdrop-blur-xl border border-blue-200/30
        text-blue-900 space-y-3">

            <h2 class="text-xl font-bold border-b border-white/30 pb-2">
                💸 Cash Out Successful
            </h2>

            <p class="text-sm">
                <span class="font-semibold">Cash Out Number:</span> ${cahsoutNumber}
            </p>

            <p class="text-sm">
                <span class="font-semibold">Cash Out Amount:</span> ${cahsoutamount}
            </p>

            <p class="text-sm">
                <span class="font-semibold">Current Balance:</span> ${newbalance}
            </p>

            <div class="text-xs text-black pt-3 border-t border-white/30">
                ✔ Your cash out transaction has been completed successfully.
            </div>

        </div>
            `;

        history.appendChild(divs)
        
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