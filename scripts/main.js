function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

var onintro = function() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var z = document.getElementById("main-btn");
  if (width <= 770 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    z.style.backgroundColor = "white"
    z.style.borderColor = "#4F5551";
    z.style.color = "#4F5551"
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "white";
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