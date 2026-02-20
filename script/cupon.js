let cuponbutton = document.getElementById("cupon-btn")

cuponbutton.addEventListener("click",function(){
    let cuponnumber = getvaluefrominput("copun-number")

    let cuurentamount  = currentbalance()
    let newamount = cuurentamount + Number(cuponnumber)
    if(cuponnumber == "2222"){
        setbalance(newamount)
    }else{
        alert("invalid cupon code ")
    }


})