async function placeOrder() {

    let drink =
    document.getElementById("drink").value;

    let size =
    document.getElementById("size").value;

    let sugar =
    document.getElementById("sugar").value;

    let ice =
    document.getElementById("ice").value;

    let topping =
    document.getElementById("topping").value;

    let customerName =
document.getElementById("customerName").value;

let phone =
document.getElementById("phone").value;

let email =
document.getElementById("email").value;

let quantity =
document.getElementById("quantity").value;

let instructions =
document.getElementById("instructions").value;

let basePrice = 0;

if (drink === "Brown Sugar Milk Tea") {
    basePrice = 6.50;
}
else if (drink === "Taro Milk Tea") {
    basePrice = 5.75;
}
else if (drink === "Thai Tea") {
    basePrice = 6.00;
}

let toppingPrice = 0;

if (topping !== "No Topping") {
    toppingPrice = 0.75;
}

let sizePrice = 0;

if (size === "Medium") {
    sizePrice = 0.50;
}
else if (size === "Large") {
    sizePrice = 1.00;
}

let totalPrice =
(basePrice + toppingPrice + sizePrice) * Number(quantity);

totalPrice = totalPrice.toFixed(2);

 let orderData = {

    customerName: customerName,

    phone: phone,

    email: email,

    drink: drink,

    size: size,

    sugar: sugar,

    ice: ice,

    topping: topping,

    quantity: quantity,

    instructions: instructions,

    totalPrice: totalPrice
};


    const response = await fetch(
"https://6g8libn191.execute-api.us-east-2.amazonaws.com/default/bobaOrderFunction",
{
    method: "POST",

    body: JSON.stringify(orderData)
});


    const data =
    await response.json();

    document.getElementById("result")
    .innerHTML =

    data.message;

}