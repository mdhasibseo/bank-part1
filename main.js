document.getElementById("add-money").style.display = "none";
document.getElementById("send-now").style.display = "none";
document.getElementById("cash-out-from").style.display = "none";
document.getElementById("get-bonus-section").style.display = "none";
 document.getElementById("last-bill").style.display = "none";

document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("cash-out-from").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
document.getElementById("send-now").style.display = "none";
document.getElementById("pay-section").style.display = "none";
    document.getElementById("add-money").style.display = "block";
    document.getElementById("last-bill").style.display = "none";
    const pin = document.getElementById("add-pin").value;
    const convertedPin = parseInt(pin);
    
    document.getElementById("add-btn").addEventListener("click",  function(){
        const amount = document.getElementById("add-Amount").value;
        const convertedAmount = parseFloat(amount);
        const mainAmount = document.getElementById("main-a");
        const convertedMainAmount = parseFloat(mainAmount.innerText);
        const bank = document.getElementById("bank-add").value;
        if(bank === "bikash" ||  bank === "nogod" || bank === "roket" || bank== "bdl"){
        if(convertedPin ===  1234){
            let final = convertedMainAmount + convertedAmount;
            
         mainAmount.innerText = final;
           
        }
        else{
            alert("1234 pin dao")
        }
        }
        else{
             alert("bank select koro")
        }
    })
    
   
})
document.getElementById("main-btn").addEventListener("click",function(){
    window.location.href =  "index.html"
})