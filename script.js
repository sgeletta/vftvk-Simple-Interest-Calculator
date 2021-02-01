function compute()
{
  
  	var p = document.getElementById("principal").value;
	var r = document.getElementById("myRange").value;
	var y = document.getElementById("years").value;
	var yrs = 2021 + parseInt(y);
    var i = p*r*y/100;
    if (p < 1){
     window.alert("input to principal needs to be positive");
    }
    else
	document.getElementById("reslt").innerHTML = "If you deposit $" + p + ", at an interest rate of " + r + "% you will receive an amount of $" + i + ", in the year " + yrs; 
}
    
function slc() {
 var x = document.getElementById("myRange").value;
	document.getElementById("res").innerHTML = x;
}
        
