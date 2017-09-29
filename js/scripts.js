function Pizza(item, size){
  this.topping = item;
  this.size = size;
  this.price = 0;
}

$(document).ready(function() {
  $("input:checkbox[name=regular-topping]:checked").each(function() {
    var pizzaTopping = $(this).val();
  });

  val pizzaSize = $("input:radio:checked").val();

  var pizzaOrder = new Pizza(pizzaTopping, pizzaSize);
  console.log(pizzaOrder);
});
