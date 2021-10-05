let currentDate = moment().format("dddd, MMMM Do YYYY");
let currentTime = parseInt(moment().format("H"));

//display current date at top of screen
let getTime = function() {
    $("#currentDay").text(currentDate + ' ' + currentTime);
}

//save button click listener
$(".saveBtn").on("click", function() {
    alert("Clicked")
});

// compare currentTime with time block and style accordingly
for (let i = 0; i < 9; i++) {
    //debugger;
    if ($(".row")[i].id < currentTime) {
        console.log("grey")
    } else if ($(".row")[i].id == currentTime) {
        console.log("red")
    } else {
        console.log("green")
    }
}

// for (let i = 9; i < 18; i++) {
//     //debugger;
//     if (document.getElementById(i).id < currentTime) {
//         console.log("grey")
//     } else if (document.getElementById(i).id == currentTime) {
//         console.log("red")
//     } else {
//         console.log("green")
//     }
// }

// if (currentTime.isAfter(#)) {
//     //update display of description
// } else if (currentTime === hour) {
//     //update display
// } else {
//     //update display
// }


getTime();