function Pizza(item){
  this.topping = item;
  this.price = 0;
}

$(document).ready(function() {
  $("input:checkbox[name=regular-topping]:checked").each(function() {
    var pizzaTopping = $(this).val();
  });

  var pizzaOrder = new Pizza(pizzaTopping);
  console.log(pizzaOrder);
});
