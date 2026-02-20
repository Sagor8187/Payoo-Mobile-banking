let transfer = document.getElementById("transfer-btn")
transfer.addEventListener("click",function(){

    let number = getvaluefrominput("transfer-number")

    let amount = getvaluefrominput("transfer-amount")

    let pin = getvaluefrominput("transfer-pin-number")

    let currentBalane = currentbalance()
     let charge = ((Number(amount)/100)*5).toFixed(2)
    let newbalance = (currentBalane - Number(amount))-charge
   


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


   let history = document.getElementById("transaction-section")
        let divs = document.createElement("div")

        divs.innerHTML = `
        <div class="max-w-md mx-auto mt-6 p-6 rounded-2xl shadow-xl
        bg-cyan-500/20 backdrop-blur-xl border border-cyan-200/30
        text-cyan-900 space-y-3">

            <h2 class="text-xl font-bold border-b border-white/30 pb-2">
                🔄 Balance Transfer Successful
            </h2>

            <p class="text-sm">
                <span class="font-semibold">Receiver Number:</span> ${number}
            </p>

            <p class="text-sm">
                <span class="font-semibold">Transfer Amount:</span> ${amount}
            </p>

            <p class="text-sm">
                <span class="font-semibold">Charge:</span> ${charge}
            </p>

            <p class="text-sm">
                <span class="font-semibold">Current Balance:</span> ${newbalance}
            </p>

            <div class="text-xs text-black pt-3 border-t border-white/30">
                ✔ Your balance has been transferred successfully.
            </div>

        </div>
        `;

        history.appendChild(divs)
   
})