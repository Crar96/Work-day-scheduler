// Function to display current date
$(document).ready(function() {
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));


// Time blocks 
  for (let i = 9; i <= 22; i++) {
    let timeBlock = $("<div>").addClass("row time-block");
    let column = $("<div>").addClass("col-md-1 hour").text(dayjs().hour(i).format("hA"));
    let textArea = $("<textArea>").addClass("col-md-10 description");

// Check if time is past, present or future and delegate classes for styling

  if (dayjs().hour() === i) {
    textArea.addClass("present");
  } else if (dayjs().hour() > i) { 
    textArea.addClass("past");
  } else {
    textArea.addClass("future");
  }

  let storedEvent = localStorage.getItem("event" + i);
  if (storedEvent) {
    textArea.val(storedEvent);
  }

  let saveBtn = $("<button>").addClass("col-md-1 saveBtn").html('<i class="fas fa-save"></i>');

  saveBtn.on("click", function() {
    let eventText = textArea.val();
    localStorage.setItem("event" + i, eventText);
  });


// Append timeblock and elements

  timeBlock.append(column, textArea, saveBtn);
  $(".container").append(timeBlock);
  }
});


