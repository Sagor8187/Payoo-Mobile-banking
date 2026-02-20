let addbtn = document.getElementById("add-money")

addbtn.addEventListener("click",function(){

    let bankselect = getvaluefrominput("add-money-bank")

    if(bankselect === "Select back"){
        alert("please select bank")
        return
    }

    let accountnumber = getvaluefrominput("bank-account-number")

    if(accountnumber.length !==11){
        alert("please give valid 11 digit number")
    }

    let addamount = getvaluefrominput("add-amount")

    let newbalance = currentbalance() + Number(addamount)

    let pin = getvaluefrominput("bank-pin")

    if(pin == "1234"){
        alert("add balance ")
        setbalance(newbalance)
    }

    let history = document.getElementById("transaction-section")
    let divs = document.createElement("div")

    divs.innerHTML = `
<div class="max-w-md mx-auto mt-6 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-600 to-purple-700 text-white space-y-3">

  <h2 class="text-xl font-bold border-b border-white/30 pb-2">
    💳 Transaction Successful
  </h2>

  <p class="text-sm">
    <span class="font-semibold">Bank:</span> ${bankselect}
  </p>

  <p class="text-sm">
    <span class="font-semibold">Account No:</span> ${accountnumber}
  </p>

  <p class="text-sm">
    <span class="font-semibold">Amount Added:</span> ${addamount}
  </p>

  <p class="text-sm">
    <span class="font-semibold">Available Balance:</span> ${newbalance}
  </p>

  <div class="text-xs text-white/80 pt-3 border-t border-white/30">
    ✔ Your transaction has been completed successfully.
  </div>

</div>
`;
history.appendChild(divs)
    
})