function compute()
{
  p = document.getElementById("principal").value;
  r = document.getElementById("myRange").value;
  y = document.getElementById("years").value;
  yrs = 2021 + y;
  interest = p*n*r/100;

  document.getElementByID("reslt").innerHTML = "If you deposit " + p + ", at an interest rate of " + r + "% you will receive an amount of " + interest + ", in the year " + yrs; 
};
    
function slc() {
 var x = document.getElementById("myRange").value;
	document.getElementById("res").innerHTML = x;
}
        
