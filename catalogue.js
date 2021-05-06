var car1 = {
    brand: "Zhiguli",
    model: "VAZ-2106",
    year: 1976,
    price: 799999,
    currency: "$"
};

var car2 = {
    brand: "Rolls-Royce",
    model: "Sweptail",
    year: 2018,
    price: 5.99,
    currency: "$"
}

var car3 = {
    brand: "tesla",
    model: "roadster",
    year: 2019,
    price: 1080,
    currency: "$"
}

var cars = [car1, car2, car3];

document.getElementById("title-1").innerHTML = `${car1.brand} - ${car1.model} - ${car1.price}${car1.currency}`;
document.getElementById("title-2").innerHTML = `${car2.brand} - ${car2.model} - ${car2.price}${car2.currency}`;
document.getElementById("title-3").innerHTML = `${car3.brand} - ${car3.model} - ${car3.price}${car3.currency}`;

function buy() {
    alert("ვერ შეიძენთ რადგან არ გაქვთ ავტორიზაცია გავლილი");
}

function findCar(id) {
    var car = undefined;
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].brand == id) {
            car = cars[i];
        }
    }

    return car;
}

function details(el) {
    var id = el.parentNode.id;
    var car = findCar(id);
    alert(`მანქანის ფირმა: ${car.brand}, 
    მოდელი: ${car.model},
    გამოშვების წელი: ${car.year},
    ფასი: ${car.price} ${car.currency}`)
}

function showCheapest() {
    var cheapestCar = findCheapestCar();

    for(var i = 0; i < cars.length; i++) {
        if(cars[i].brand != cheapestCar.brand) {
            var elementi = document.getElementById(cars[i].brand);
            elementi.querySelector("button").disabled = true;
        }
    }
}

function findCheapestCar() {
    var carWithMinPrice = cars[0];
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].price < carWithMinPrice.price) {
            carWithMinPrice = cars[i];
        }
    }

    return carWithMinPrice;
}

function changeCurrency() {
    for(var i=0; i < cars.length; i++) {
        if(cars[i].currency == "$") {
            cars[i].price = cars[i].price * 3;
            cars[i].currency = "₾";
        }else if(cars[i].currency == "₾"){
            cars[i].price = cars[i].price / 3;
            cars[i].currency = "$";
        }
    }
}
