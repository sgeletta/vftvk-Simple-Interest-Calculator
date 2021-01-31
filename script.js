function compute()
{
  p = document.getElementById("principal").value;
  r = document.getElementById("myRange").value;
  y = document.getElementById("years").value;
  interest = document.getElementByID("result").innerHTML = (p*n*r/100);
};
    
function slc() {
 var x = document.getElementById("myRange").value;
	document.getElementById("res").innerHTML = x;
}
        
