let cuponbutton = document.getElementById("cupon-btn")

cuponbutton.addEventListener("click",function(){
    let cuponnumber = getvaluefrominput("copun-number")
    let num = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;

    let cuurentamount  = currentbalance()
    let newamount = cuurentamount + num
    if(cuponnumber == "2222"){
        setbalance(newamount)
    }else{
        alert("invalid cupon code ")
    }

    let history = document.getElementById("transaction-section")
    let divs = document.createElement("div")

    divs.innerHTML = `
        <div class="max-w-md mx-auto mt-6 p-6 rounded-2xl shadow-xl
        bg-purple-500/20 backdrop-blur-xl border border-purple-200/30
        text-purple-900 space-y-3">

            <h2 class="text-xl font-bold border-b border-white/30 pb-2">
                🎁 Coupon Applied Successfully
            </h2>

            <p class="text-sm">
                <span class="font-semibold">Coupon Code:</span> ${cuponnumber}
            </p>

            <p class="text-sm">
                <span class="font-semibold">Added Balance:</span> ${num}
            </p>
            <p class="text-sm">
                <span class="font-semibold">Available Balance:</span> ${newamount}
            </p>

            <div class="text-xs text-black pt-3 border-t border-white/30">
                ✔ Your coupon has been applied and balance added successfully.
            </div>

        </div>
        `;

history.appendChild(divs)

})