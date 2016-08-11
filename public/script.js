// sessionStorage will store an item for a time that a window or tab is open.
// The three functions below set a beverage for retrieval by the 'getItem' function
var testCoffee = function(beverage){
  console.log('Set coffee');
  sessionStorage.setItem("beverage",'Coffee' );
};

var testTea = function(beverage){
  console.log('Set tea');
  sessionStorage.setItem("beverage", 'Tea');
};

var testWater = function(beverage){
  console.log('Set water');
  sessionStorage.setItem("beverage", 'Water');
};

      // this function retrieves a beverage stored in the sessionStorage
var getItem = function(){
    var mango = sessionStorage.getItem("beverage");
    console.log('Session Storage', mango);
};


// The next three functions store beverages in localStorage, in the same fashion as
// the three sessionStorage functions above. localStorage, however, will stay available
// even after a user has closed his/her browser window or tab. 

var testCoffeesession = function(beverage){
  console.log('Set coffee');
  localStorage.setItem("beverage", "coffee");
};

var testTeasession = function(beverage){
  console.log('Set tea');
  localStorage.setItem("beverage", 'Tea');
};

var testWatersession = function(beverage){
  console.log('Set water');
  localStorage.setItem("beverage", 'Water');

};

var getItemsession = function(){
  var papaya = localStorage.getItem("beverage");
  console.log('Session Storage', papaya);
};
