document.getElementById("login-btn").addEventListener("click",function(){
    // mobile number collect 
    let mobile = document.getElementById("number");
    let usernumber = mobile.value;

    // pin number collect
    let pin = document.getElementById("pin-number");
    let userpin = pin.value;

    if (usernumber =="01754718187" && userpin=="1234"){
        alert("login success");
        window.location.assign("home.html")

    }else{
        alert("login faild");
        return;
    }
})