function Pizza(item, size){
  this.topping = item;
  this.size = size;
  this.price = 0;
}

$(document).ready(function() {
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    debugger;
    $("input:checkbox[name=regular-topping]:checked").each(function() {
      var pizzaTopping = $(this).val();
    });

    // var pizzaSize = $("input:radio:checked").val();

    var pizzaOrder = new Pizza(pizzaTopping, pizzaSize);
    alert(pizzaOrder);
  });


});
