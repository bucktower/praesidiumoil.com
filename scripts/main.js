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
   width = document.body.clientWidth;
   height = document.body.clientHeight;
   
  var x = document.getElementById("mobileNav");
  var y = document.getElementById("nvbr");
   
   if (width <= 770) {
     x.style.display = "block";
     y.style.display = "none";
     
   } else {
     x.style.display = "none";
     y.style.display = "flex";
     console.log(width);
   }
}
window.addEventListener("resize", onresize);