// Fare variables 
var basefare = 50;   
var perKMrate = 15;  
var baseKM = 2;      

function regularFare() {
    // Get distance from the input field
    var distance = document.getElementById("distance").value;
    var fare;

    // Calculation logic
    if (distance <= baseKM) {
        fare = basefare;
    } else {
        fare = basefare + ((distance - baseKM) * perKMrate);
    }
 
    var finalFare = Math.round(fare);

    document.getElementById("fare").innerHTML = "Fare: ₱" + finalFare;
}

// Discounted fare calculation
function discountFare() {
    var distance = document.getElementById("distance").value;
    var fare;

    if (distance <= baseKM) {
        fare = basefare;
    } else {
        fare = basefare + ((distance - baseKM) * perKMrate);
    }

    
    fare = fare * 0.80;

    // Requirement: Math.methods
    var finalDiscount = Math.round(fare);

    document.getElementById("fare").innerHTML = "Discounted Fare: ₱" + finalDiscount;
}

function verifyEmail() {
}
