let currentDate = moment().format("dddd, MMMM Do YYYY");
let currentTime = parseInt(moment().format("H"));

//display current date at top of screen
let getTime = function() {
    $("#currentDay").text(currentDate + ' ' + currentTime);
};

//save button click listener
$(".saveBtn").on("click", function() {
    let descriptionEl = $(this)
        .prev()
        .children()
        .text()
        .trim();
    console.log(descriptionEl)
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

//click listenr for description text, this = HTML p element
$(".description").on("click", "p", function() {
    let descriptionText = $(this) //textvalue of clicked description
        .text()
        .trim();
    let descriptionInput = $("<textarea>") //create textarea element
        .val(descriptionText);
    $(this).replaceWith(descriptionInput) //replace p with textarea
    descriptionInput.trigger("focus"); //focus on textarea
});

//listener for when description text goes out of focus
$(".description").on("blur", "textarea", function() {
    let descriptionInput = $(this) //value of textarea
        .val()
        .trim();

    let descriptionText = $("<p>") //create p element with text of input
        .text(descriptionInput);

    $(this).replaceWith(descriptionText); //replace textarea with p element

    console.log(descriptionText.text());
});

getTime();