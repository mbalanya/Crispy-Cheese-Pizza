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


//links pizza size to relevant toppings
$(document).ready(function() {
  $('#selectSize').click(function() {
    var z = $('#selectSize option:selected').text();
    //alert(z);
     if(z === 'Small (Ksh.500)'){
       $('form a').prop('href', '#toppingsSmall');
     }else if(z === 'Medium (Ksh.800)'){
       $('form a').prop('href', '#toppingsMedium');
     }else if(z === 'Large (Ksh.1200)'){
       $('form a').prop('href', '#toppingsLarge');
     }else{
       $('form a').prop('href', '');
       alert('Re-select a valid pizza size')
     }
  });
});

function TotalCost(numberOfPizzas, pizzaSize, crustType, numberOfToppings){
  this.numberOfPizzas = numberOfPizzas;
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.numberOfToppings = numberOfToppings;
};

var firstCustomer = new TotalCost(2, 'small', 'crunchy', 2);

TotalCost.prototype.firstCustomerPrint = function(){
  //alert('Hi! You have ordered ' + this.numberOfPizzas + ' pizzas. ' + 'Each pizza is ' + this.pizzaSize + ', with a ' + this.crustType + ' crust and ' + this.numberOfToppings + ' toppings');
}

firstCustomer.firstCustomerPrint();

$(document).ready(function() {
  var w = $('form').submit(function(e) {
            var numberOfPizzasInput = $('#selectPizzaNumbers option:selected').text();
            var pizzaSizeInput = $('#selectSize option:selected').text();
            var crustTypeInput = $('#selectCrustType option:selected').text();
          //  var numberOfToppingsInput =

            e.preventDefault();


  });
});


alert(numberOfPizzasInput + pizzaSizeInput + crustTypeInput);
/*
var selected = new Array();

           //Reference the CheckBoxes and insert the checked CheckBox value in Array.
           $("#selectToppings input[type=checkbox]:checked").each(function () {
               selected.push(this.value);
           });

           //Display the selected CheckBox values.
           if (selected.length > 0) {
               alert("Selected values: " + selected.join(","));
           };*/
