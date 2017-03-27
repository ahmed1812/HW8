var slideInd = 1;
showDiv(slideInd);

function plusDiv(n) {
  showDiv(slideInd += n);
}

function currentDi(n) {
  showDiv(slideInd = n);
}

function showDiv(n) {
  var i;
  var x = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideInd = 1}    
  if (n < 1) {slideInd = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideInd-1].style.display = "block";  
  dots[slideInd-1].className += " w3-red";
}