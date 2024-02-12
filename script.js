// Function to display current day and timeblocks

$(document).ready(function() {
  // Display current day at the top of the calendar
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
});
