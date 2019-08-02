function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var onresize = function() {
   //your code here
   //this is just an example
   var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
   
  var x = document.getElementById("mobileNav");
  var y = document.getElementById("nvbr");
   
   if (width <= 770 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     x.style.display = "block";
     y.style.display = "none";
     
   } else {
     x.style.display = "none";
     y.style.display = "flex";
     console.log(width);
   }
}
window.addEventListener("resize", onresize);