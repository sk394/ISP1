function factorial(){
    var i, num, f;
    f=1;
    num = document.getElementById("num").value;
  
    if(num >=0){
      for(i=1; i<=num; i++){
        f=f*i;
      }
      i = i-1;
    
    var resultMessage = "Factorial of " + i + " is " + f;
    document.getElementById("result").innerHTML = resultMessage;
    document.getElementById("result").style.color = "white";
    
    }
    else{
      alert("Please enter a positive number");
    }
  
    setTimeout( 
              function  (){  
                document.getElementById("result").innerHTML = "";  
              }, 6000);
  }
  
  document.querySelector(".calc").addEventListener("click", () => {
    var userInput = prompt("Enter a positive number (default is 8):", "8");
  
    // Parse the user input as a number
    var userNumber = parseFloat(userInput);
  
    if (!isNaN(userNumber) && userNumber >= 0) {
      var f = 1; // Initialize f to 1
      for (var i = 1; i <= userNumber; i++) {
        f = f * i;
      }
  
      var resultMessage = "Factorial of " + userNumber + " is " + f;
      alert(resultMessage);
    } else {
      alert("Please enter a valid positive number.");
    }
  });