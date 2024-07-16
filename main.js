//# 1€ start
// 0.25€ pro min
// 1.50 pro km
function calculateResult() {
    var duration = document.getElementById('duration');
    var route = document.getElementById('route');
    var calcOption = document.getElementById('calc_options');
    var routeOption = document.getElementById('route_option');
    var discountCode = document.getElementById('discountCode');
    var result;

    if (routeOption = "km") {
        route = route * 1000; 
    }

    if (calcOption == "calc_time") {
        result = 0.25 * duration + 1;
    } else {
        result = 1.50 * route / 1000;
    }

    //Rabattcodes sind zulässig: Tec5 für 5%, Tec15 für 15%, TecFirstTry für 50%
    if (discountCode == "Tec5") {
        var discount = result / 0.05;
        result = result - discount;
    } else if (discountCode == "Tec15") {
        var discount = result / 0.15;
        result = result - discount;
    } else if (discountCode == "TecFirstTry") {
        var discount = result / 0.50;
        result = result - discount;
    }

    console.log(result);
    const popup = document.getElementById('popup');
popup.style.display = 'block';
    document.getElementById('result').innerHTML += result + " Euro";
    
}

function closePopUp() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';

}