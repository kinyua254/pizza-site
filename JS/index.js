$(document).ready(function () {

    $(".deliver form").submit(function (event) {
        event.preventDefault();

        var pizzaSize = $("select#size option:selected").val();
        var pizzaTopping = $("select#size option:selected").val();
        var pizzaCrust = $("select#size option:selected").val();
        var pizzaNumber = $("input#number").val();

        function pizza(size, topping, crust, number){
            this.size = size;
            this.topping = topping;
            this.crust = crust;
            this.number = number;
        }
        var pizzaNew = new pizza(pizzaSize, pizzaTopping, pizzaCrust, pizzaNumber);

        var sizePrice = 0;
        var toppingPrice = 0;
        var crustPrice = 0;

        if(pizzaNew.size == "Small"){
            sizePrice +=400;
        }else if(pizzaNew.size == "Medium"){
            sizePrice +=800;
        }else if (pizzaNew.size == "Large"){
            sizePrice +=1100;
        }
        
        if(pizzaNew.topping == "BBQ-Chicken" || pizzaNew.topping == "beef" || pizzaNew.topping == "bacon"){
            toppingPrice +=200;

        }else if(pizzaNew.topping == "vegan" || pizzaNew.topping == "cheese"){
            toppingPrice += 150;
        }

        if(pizzaNew.crust == "crispy"){
            crustPrice += 80;
        }else if(pizzaNew.crust == "stuffed"){
            crustPrice += 75;
        }else if(pizzaNew.crust == "glutten-free"){
            crustPrice += 70;
        }

        var price = (sizePrice + toppingPrice + crustPrice);
        var pizzas = parseInt(pizzaNew.number);
        var totalPrice = price * pizzas;
        $("#output").text(totalPrice);
    });
});