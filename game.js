//get random number from 0 to size
var getRandomNumber = function (size) {
return Math.floor(Math.random() * size);
};

//calculate distance between event and target
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

//get line that show distance
var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Boiling hot!";
    } else if (distance < 20) {
        return "Really hot";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Really cold";
    } else {
        return "Freezing!";
    }
};

//setup our variable parameters
var width = 400;
var height = 400;
var clicks = 0;

//create random location of target
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

//add manipulator clicks to img
$("#map").click(function (event){
    clicks++;

    //get distance between event and target
    var distance = getDistance(event, target);

    //convert distance to hint
    var distanceHint = getDistanceHint(distance);
    
    //update #distance-element of new hint
    $("#distance").text(distanceHint);

    //if click was made nearly, said player that he/she win
    if (distance < 8) {
        alert("Found the treasure in " + clicks + " clicks");
    }
});