//Display current date/time
var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(time);

//function will run once jquery is ready
$(document).ready(function(){
    //add click listener
    $(".saveBtn").on("click", function(){

        //obtain values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save text to local storage
        localStorage.setItem(time, text);
    })

    var timeTrack = function() {
        //obtain current number hours
        var currentTime = moment().hour();

        //loop over time-blocks class
        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            //checks time and addes classes for background
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (timeBlock === currentTime){
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    //if local storage exists then acquire it 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    timeTrack();
})