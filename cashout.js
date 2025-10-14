
document.getElementById("add-money").style.display = "none";
document.getElementById("send-now").style.display = "none";
document.getElementById("cash-out-from").style.display = "none";

document.getElementById("cash-out").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("add-money").style.display = "none";
document.getElementById("send-now").style.display = "none";
    document.getElementById("cash-out-from").style.display = "block";
    document.getElementById("last-bill").style.display = "none";
    document.getElementById("withdraw-btn").addEventListener("click",function(event){
        event.preventDefault();
        const amount = document.getElementById("cash-out-amount");
    const convertedAmount = parseFloat(amount.value);
    const mainAmount = document.getElementById("main-a");
    const convertedMainAmount = parseFloat(mainAmount.innerText);
    const pin = document.getElementById("withdraw-pin").value;
    const convertedPin = parseInt(pin)

   if (convertedPin === 1234){
    const final = convertedMainAmount - convertedAmount;
    mainAmount.innerText = final
   }
   else{
    alert("1234 pin dao ")
   }

    })
    
})
