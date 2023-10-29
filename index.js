

 function calculateTotalPrice(quantity = 2, price = 15000000) {
 return quantity * price;
 }

 let result = calculateTotalPrice().toLocaleString("ru-Ru", {style:"currency", currency: "rub"});

alert("Стоимость покупки: " + result + " рублей");

function myClick() {
    
let text = "Стоимость покупки: " + result;

document.getElementById("price").innerHTML = text;  
}

// calculateTotalPrice().toLocaleString("ru", 
// {style: "currency, 
// currency: "rub"})
