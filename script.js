var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");

var toppings = [];

var formButton = document.getElementById("btn");
formButton.addEventListener("click", function getInfo(event) {
    event.preventDefault();
    var topping1 = document.getElementById("top1").value;
    var topping2 = document.getElementById("top2").value;
    var topping3 = document.getElementById("top3").value;

    toppings.push(topping1, topping2, topping3);

    calculateTotal(toppings);
    toppings = "";
});

function calculateTotal(toppingArray) {
    let total = 0;
    let toppingCost = 2.50;
    let baseCost = 5.50;

    let orderString = `${crust.value} pizza with ${sauce.value}`;
    let toppingString = "Toppings: ";


    for (var i = 0; i < toppingArray.length; i++) {
        if (toppings[i] != "") {
            total += toppingCost;
            toppingString += toppingArray[i] + " ";
        }
    };

    total += baseCost;
    

    document.getElementById("total").innerHTML += total
    document.getElementById("pizzaOrder").innerHTML = orderString
    document.getElementById("toppings").innerHTML = toppingString
};