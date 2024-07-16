//# 1€ start
// 0.25€ pro min
// 1.50 pro km
function calculateResult() {
    var duration = document.getElementById('duration');
    var route = document.getElementById('route');
    var cost = 0.25;
    var calcOption = document.getElementById('calc_options');
    var routeOption = document.getElementById('route_option');
    var discountCode = document.getElementById('discountCode');

    if (routeOption = "km") {
        route = route * 1000; 
    }

    

    if (discountCode.length > 0) {
        //Todo
    }


    //ToDO 
}

function togglePopUp() {
    var popup = document.getElementById("userPopUp");
    popup.classList.toggle("show");
}