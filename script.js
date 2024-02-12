// Function to display current date
$(document).ready(function() {
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));


// Time blocks 
for (let i = 9.00; i <= 17.00; i++) {
  let timeBlock = $("<div>").addClass("row time-block");
  let column = $("<div>").addClass("col-md-1 hour").text(dayjs().hour(i).format("hA"));
  let textBox = $("<textbox").addClass("col-md-10 description");
}

});

timeBlock.append(column, textBox,);