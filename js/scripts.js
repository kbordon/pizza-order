function Pizza(item, size){
  this.topping = item;
  this.size = size;
  this.price = 0;
}

$(document).ready(function() {
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaTopping;
    $("input:checkbox[name=regular-topping]:checked").each(function() {
      pizzaTopping = $(this).val();
    });

    alert(pizzaTopping);

    var pizzaSize = $("input:radio:checked").val();
    var pizzaOrder = new Pizza(pizzaTopping, pizzaSize);
    console.log(pizzaOrder);
  });


});
