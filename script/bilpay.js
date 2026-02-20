let paybtn = document.getElementById("bil-pay")

paybtn.addEventListener("click",function(){
    let bank = getvaluefrominput("bil-pay-bank")
    let number = getvaluefrominput("bil-pay-number")
    let amount = getvaluefrominput("bil-amount")
    let pin = getvaluefrominput("bil-pay-pin")

    if(bank == "Select Back"){
        alert("please select biller name")
    }
    if(number.length !== 11){
        alert("please add bil pay nunmber")
    }

    let availablebalance = currentbalance()

    let newbalance = availablebalance - Number(amount)
   
    if(newbalance < 0){
        alert("insufficinet amount please add money")
    }

    if(pin =="1234"){
       setbalance(newbalance)
    }else{
        alert("invalid pin")
    }

     let history = document.getElementById("transaction-section")
    let divs = document.createElement("div")

        divs.innerHTML = `
            <div class="max-w-md mx-auto mt-6 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white space-y-3">

            <h2 class="text-xl font-bold border-b border-white/30 pb-2">
                🧾 Bill Payment Successful
            </h2>

            <p class="text-sm">
                <span class="font-semibold">Bill Name:</span> ${bank}
            </p>

            <p class="text-sm">
                <span class="font-semibold">Bill Number:</span> ${number}
            </p>

            <p class="text-sm">
            <p class="text-sm">
                <span class="font-semibold">Bill Amount:</span> ${newbalance}
            </p>

            <div class="text-xs text-white/80 pt-3 border-t border-white/30">
                ✔ Your bill has been paid successfully.
            </div>

            </div>
            `;
        history.appendChild(divs)
})