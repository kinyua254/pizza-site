$(document).ready(function () {

    $(".deliver form").submit(function (event) {
        event.preventDefault();

        var pizzaSize = $("select#size option:selected").val();
        var pizzaTopping = $("select#toppings option:selected").val();
        var pizzaCrust = $("select#crust option:selected").val();
        var pizzaNumber = $("input#number").val();

        function Pizza(size, topping, crust, number) {
            this.size = size;
            this.topping = topping;
            this.crust = crust;
            this.number = number;
        }
        var pizzaNew = new Pizza(pizzaSize, pizzaTopping, pizzaCrust, pizzaNumber);

        var sizePrice = 0;
        var toppingPrice = 0;
        var crustPrice = 0;

        if (pizzaNew.size == "Small") {
            sizePrice += 400;
        } else if (pizzaNew.size == "Medium") {
            sizePrice += 800;
        } else if (pizzaNew.size == "Large") {
            sizePrice += 1100;
        }

        if (pizzaNew.topping == "BBQ-Chicken" || pizzaNew.topping == "Beef" || pizzaNew.topping == "Bacon" || pizzaNew.topping == "Ham") {
            toppingPrice += 200;

        } else if (pizzaNew.topping == "Vegan" || pizzaNew.topping == "Cheese") {
            toppingPrice += 150;
        }

        if (pizzaNew.crust == "Crispy") {
            crustPrice += 80;
        } else if (pizzaNew.crust == "Stuffed") {
            crustPrice += 75;
        } else if (pizzaNew.crust == "Glutten-free") {
            crustPrice += 70;
        }

        var price = (sizePrice + toppingPrice + crustPrice);
        var pizzas = parseInt(pizzaNew.number);
        var totalPrice = price * pizzas;
        $("#output").text(totalPrice);
    });
});