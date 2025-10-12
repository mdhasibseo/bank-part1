
document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault()
   const pin = document.getElementById("pin-id").value;
   const convertedPin = parseInt(pin);
   if(convertedPin  === 1234 ){

   window.location.href="../main.html"
  
   }
   else{
    alert("valo pin dao")
   }
})