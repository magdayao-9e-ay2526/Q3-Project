// Fare variables
var basefare = 50;
var perKMrate = 15;
var baseKM = 2;

// Regular fare calculation
function regularFare(){

var distance = document.getElementById("distance").value;

var fare;

if(distance <= baseKM){
fare = basefare;
}

else{
fare = basefare + ((distance - baseKM) * perKMrate);
}

document.getElementById("fare").innerHTML =
"Fare: ₱" + fare;

}

// Discounted fare calculation
function discountFare(){

var distance = document.getElementById("distance").value;

var fare;

if(distance <= baseKM){
fare = basefare;
}

else{
fare = basefare + ((distance - baseKM) * perKMrate);
}

// apply 20% discount
fare = fare * 0.80;

document.getElementById("fare").innerHTML =
"Fare: ₱" + fare;

}
