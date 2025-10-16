
document.getElementById("add-money").style.display = "none";
document.getElementById("send-now").style.display = "none";
document.getElementById("cash-out-from").style.display = "none";
document.getElementById("get-bonus-section").style.display = "none";

document.getElementById("cash-out").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("cash-out-from").style.display = "block";
    document.getElementById("add-money").style.display = "none";
document.getElementById("send-now").style.display = "none";
document.getElementById("get-bonus-section").style.display = "none";
    
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

document.getElementById("Bonus").addEventListener("click",function(event){
    event.preventDefault();
    

    document.getElementById("get-bonus-section").style.display = "block";
      document.getElementById("cash-out-from").style.display = "none";
    document.getElementById("add-money").style.display = "none";
document.getElementById("send-now").style.display = "none";
    document.getElementById("last-bill").style.display = "none";
    document.getElementById("bonus-button").addEventListener("click",function(event){
        event.preventDefault();
        const copun = document.getElementById("cupon").value;
        const blance = document.getElementById("main-a");
        const convertedBlance = parseFloat(blance.innerText);
        if(copun === "Hasib"){
            const sum = convertedBlance + 50 ;
            blance.innerText = sum
        }

        else{
            alert("use only this cupon 'Hasib'")
        }
        
    })

})