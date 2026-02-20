function getvaluefrominput(id){
    let input = document.getElementById(id);
    let value = input.value;

    console.log(id,value)

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