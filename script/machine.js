function getvaluefrominput(id){
    let input = document.getElementById(id);
    let value = input.value;

    return value;
}

function currentbalance (){
    let balance = document.getElementById("total-balance");
    let fundbalance = balance.innerText;

    return Number(fundbalance)
}

function setbalance(value){
    let balance = document.getElementById("total-balance");
    balance.innerText = value
}


function layerview(id){

    let addmoneybtn = document.getElementById("add-money-section").classList.add("hidden")

    let cashoutbtns = document.getElementById("cash-out-section").classList.add("hidden")

    let transferbtn =document.getElementById("transfer-section").classList.add("hidden")

    let view = document.getElementById(id)
    view.classList.remove("hidden")
    // let addmoneybtn = document.getElementById("add-money-btn")

    // let cashoutbtns = document.getElementById("cash-out-btn")
    
}

// let addmoneybtn = document.getElementById("add-money-btn")

// let cashoutbtns = document.getElementById("cash-out-btn")

// addmoneybtn.addEventListener('click',function(){
//     document.getElementById("add-money-section").classList.remove("hidden")
//     document.getElementById("cash-out-section").classList.add("hidden")
// })
// cashoutbtns.addEventListener('click',function(){
//     document.getElementById("cash-out-section").classList.remove("hidden")
//      document.getElementById("add-money-section").classList.add("hidden")
// })