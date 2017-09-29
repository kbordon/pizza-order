function Pizza(item, special, size){
  this.topping = item;
  this.specialTopping = special;
  this.size = size;
  this.price = 14;
  this.quantity = 1;
}

Pizza.prototype.getPrice = function () {
  if (this.specialTopping) {
    this.price += ((this.specialTopping.length) * 2)
  }
  if (this.topping.length > 2) {
    this.price += ((this.topping.length - 1) * 1.25);
  }
  var sizes = ["s", "m", "l"];
  var priceMod = [1, 1.2, 1.4];
  for (var index = 0; index < 3; index++) {
    if (this.size === sizes[index]) {
      this.price *= priceMod[index];
    }
  }
  this.price *= this.quantity;
  return this.price;
}

$(document).ready(function() {
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaTopping = [];
    var pizzaSpecialTopping = [];

    $("input:checkbox[name=regular-topping]:checked").each(function() {
      pizzaTopping.push($(this).val());
    });
    $("input:checkbox[name=special-topping]:checked").each(function() {
      pizzaSpecialTopping.push($(this).val());
    });

    var pizzaSize = $("input:radio:checked").val();

    var pizzaOrder = new Pizza(pizzaTopping, pizzaSpecialTopping, pizzaSize);
    $("#subtotal-list").empty();
    $("#subtotal-list").append("$" + pizzaOrder.getPrice().toFixed(2) + "<br>");
  });


});
