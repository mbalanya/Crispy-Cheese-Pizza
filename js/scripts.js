const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
/*
$(document).ready(function() {
  $('option #pizzaSmall').click(function() {
    alert('you');
  //  $('form a').prop('href', '#toppingsMedium')
  });
});*/

$(document).ready(function() {
  $('#selectSize').click(function() {
    var z = $('#selectSize option:selected').text() ;
     if(z === 'Small (Ksh.500)'){
       $('form a').removeProp();
       $('form a').prop('href', '#toppingsSmall');
     }else if(z === 'Medium (Ksh.800)'){
       $('form a').removeProp();
       $('form a').prop('href', '#toppingsMedium');
     }else if(z === 'Large (Ksh.1200)'){
       $('form a').removeProp();
       $('form a').prop('href', '#toppingsLarge');
     }else{
       $('form a').prop('href', '');
       alert('Re-select a valid pizza size')
     }
  });
});
