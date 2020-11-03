var date = moment().format('llll');
document.getElementById("currentTime").append(date);

function readFromLocalStorage () {
    $(".time-block").each(function(){
        var readId = $(this).attr("id");
        var readTextEl = localStorage.getItem(readId);
        if (readTextEl !== null) {
           
            $(this).children(".description").val(readTextEl);
        }
    });
}

$(".saveBtn").click(function() {
    var hourId = $(this).parent().attr("id");
    var textEl = $(this).siblings(".description").val().trim();
    localStorage.setItem(hourId, textEl);
});


readFromLocalStorage();



var currentHour = moment().format('H');

var hourElements = 
[
"hour-06",
"hour-07",
"hour-08",
"hour-09", 
"hour-10", 
"hour-11", 
"hour-12", 
"hour-13", 
"hour-14", 
"hour-15", 
"hour-16", 
"hour-17",
"hour-18", 
"hour-19", 
"hour-20", 
"hour-21", 
"hour-22", 
"hour-23", 
"hour-24",
];


function checkHours() {
    for (var i = 0; i < hourElements.length; i++) {
          if (parseInt(currentHour) < parseInt(hourElements[i].match(/(\d+)/))) {
            $("#" + hourElements[i]).removeClass("present").addClass("future");
        } else if (parseInt(currentHour) > parseInt(hourElements[i].match(/(\d+)/))) {
            $("#" + hourElements[i]).removeClass("present").addClass("past");
        } else {
            $("#" + hourElements[i]).removeClass("present").addClass("present");
        }}
}

checkHours();

