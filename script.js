function compute()
{
  p = document.getElementById("principal").value;
  r = document.getElementById("myRange").value;
  y = document.getElementById("years").value;
  yrs = 2021 + y;
  i = document.getElementByID("reslt");
	i.innerHTML = "Get Lost"; 
};
    
function slc() {
 var x = document.getElementById("myRange").value;
	document.getElementById("res").innerHTML = x;
}
        
