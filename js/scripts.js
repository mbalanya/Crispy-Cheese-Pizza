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

$('#selectDelivery').collapse({
  toggle: false
})

function TotalCost(numberOfPizzas, pizzaSize, crustType){
  this.numberOfPizzas = numberOfPizzas;
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  //this.numberOfToppings = numberOfToppings;
};




$(document).ready(function() {
  $('form').submit(function(e) {
      var numberOfPizzasInput = parseInt($('#selectPizzaNumbers option:selected').text());
      var pizzaSizeInput = $('#selectSize option:selected').text();
      var crustTypeInput = $('#selectCrustType option:selected').text();

    //  var numberOfToppingsInput =
      //alert(numberOfPizzasInput + pizzaSizeInput + crustTypeInput);
      e.preventDefault();


      var firstCustomer = new TotalCost(numberOfPizzasInput, pizzaSizeInput, crustTypeInput);

      TotalCost.prototype.firstCustomerPrint = function(){

        alert('Hi! You have ordered ' + this.numberOfPizzas + ' pizzas. ' + 'Each pizza is ' + pizzaConvert(pizzaSizeInput) + ', with a ' + crustConvert(crustTypeInput) + ' crust. The total cost is Ksh.' + pizzaCost);
      };

      var crustConvert = function() {
        if(crustTypeInput === 'crispy (Ksh.150)'){
          return 150;
        } else if(crustTypeInput === 'Gluten-free (Ksh.100)'){
          return 100;
        } else if(crustTypeInput === 'Stuffed (Ksh.130)'){
          return 130;
        } else {
          alert('Re-select a valid crust type.');
        };
      };

      var pizzaConvert = function() {
        if(pizzaSizeInput === 'Small (Ksh.500)'){
          return 500;
        } else if(pizzaSizeInput === 'Medium (Ksh.800)'){
          return 800;
        } else if(pizzaSizeInput === 'Large (Ksh.1200)'){
          return 1200;
        } else{
          alert('Re-select a valid pizza size.');
        }
      }

      var pizzaCost = numberOfPizzasInput * (pizzaConvert(pizzaSizeInput) + crustConvert(crustTypeInput));
      firstCustomer.firstCustomerPrint();
  });
});

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
