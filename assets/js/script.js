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
    let kids = $(".row")[i].children[1];
    if ($(".row")[i].id < currentTime) {
        kids.classList.add("past");
    } else if ($(".row")[i].id == currentTime) {
        kids.classList.add("present");
    } else {
        kids.classList.add("future");
    }
}


getTime();