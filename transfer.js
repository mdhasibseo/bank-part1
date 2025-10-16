document.getElementById("send-now").style.display = "none";
document.getElementById("add-money").style.display = "none";
document.getElementById("cash-out-from").style.display = "none";
document.getElementById("get-bonus-section").style.display = "none";

document.getElementById("transfer").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
document.getElementById("cash-out-from").style.display = "none";
    document.getElementById("send-now").style.display = "block";
    document.getElementById("pay-section").style.display = "none";
    document.getElementById("last-bill").style.display = "none";
    document.getElementById("transfer-btn").addEventListener("click",function(event){
        event.preventDefault();
        const amount = document.getElementById("transfer-amount");
    const convertedAmount = parseFloat(amount.value);
    const mainAmount = document.getElementById("main-a");
    const convertedMainAmount = parseFloat(mainAmount.innerText);
    const pin = document.getElementById("transfer-pin");
    const convertedPin = parseInt(pin.value)

   if (convertedPin === 1234){
    
    const final = convertedMainAmount - convertedAmount;
    mainAmount.innerText = final
   }
   else{
    alert("1234 pin dao ")
   }

    })
    
})