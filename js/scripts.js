const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


//links pizza size to relevant toppings
$(document).ready(function() {
  $('#selectSiz').click(function(e) {
    var z = $('#selectSize option:selected').text();
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
     e.preventDefault();
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
      var fnameInput = $('input#inputFname').val();
      var lnameInput = $('input#inputLname').val();
      var emailInput = $('input#inputEmail').val();
      var addressInput = $('input#inputAddress').val();
      var cityInput = $('input#inputCity').val();
      var stateInput = $('input#inputState').val();
      var zipInput = $('input#inputZip').val();
      e.preventDefault();

      var firstCustomer = new TotalCost(numberOfPizzasInput, pizzaSizeInput, crustTypeInput);

      TotalCost.prototype.firstCustomerPrint = function(){
        alert('Hi ' + fnameInput + '! You have ordered ' + this.numberOfPizzas + ' pizzas. ' + 'Each pizza is ' + pizzaSizeInput + ', with a ' + crustTypeInput + ' crust. Delivery cost is Ksh.' + deliver() + '. ' + deliverNote() + ' The total cost is Ksh.' + pizzaCost);
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
      var deliver = function() {
        if(fnameInput && lnameInput != ''){
          return 200;
        }else{
          return 0;
        }
      };
      var deliverNote= function() {
        if(fnameInput && lnameInput && addressInput != ''){
          return 'Your pizza will be delivered to' + addressInput + ', ' + cityInput + '.';
        }else{
          return 'Your pizza will NOT be delivered.';
        }
      };

      var pizzaCost = deliver() + (numberOfPizzasInput * (pizzaConvert(pizzaSizeInput) + crustConvert(crustTypeInput)));
      firstCustomer.firstCustomerPrint();
  });
});
