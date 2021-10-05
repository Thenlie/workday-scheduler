let currentTime = moment().format("dddd, MMMM Do YYYY");

let getTime = function() {
    $("#currentDay").text(currentTime);
}

getTime();