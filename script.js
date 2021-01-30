function compute()
{
  p = document.getElementById("principal").value;
  r = document.getElementById("myRange").value;
  y = document.getElementById("years").value;
  result = document.getElementById("myRange").value;
result.innerHTML = "The interest is " + (p*n*r/100);
};
    
function sliderChange(val) {
document.getElementById('myRange').innerHTML = val;
}
        