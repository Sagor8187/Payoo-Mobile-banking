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
})