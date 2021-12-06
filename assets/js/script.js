$(document).ready(function(){


    // Create A function with moment.js so it can display the current date
    var createDate = function(){
        var todaysDate = moment().format("dddd, MMMM Do YYYY, h:mmA");
        $('#currentDay').append(todaysDate);
    };
    createDate();
    
    // Create local storage to save the daily planner
    
    //Figure out how to save what the user input
    $('.saveBtn').click(function (){
        var text = $('#textArea').val();
        localStorage.setItem('text', text)
    });
    
    $('#textArea.description').val(localStorage.getItem('text'));

    
    });
