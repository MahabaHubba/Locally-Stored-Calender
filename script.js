$(document).ready(function() {
 
 $(".time-block").each(function(){
  const storedText = localStorage.getItem($(this).find(".hour").text());
  if (storedText) {
    $(this).find('.description').val(storedText);
  }
 });

 updatecalender();

 $('.saveBtn').on('click', function(){
  const row = $(this).closest(".time-block");
  const hourText = row.find(".hour").text();
  const descriptionText = row.find(".description").val();

  localStorage.setItem(hourText, descriptionText);

 });
 
 function updatecalender(){
  var rows = $(".time-block");
  var current = new Date();
  var hour = current.getHours();
  var minute = current.getMinutes();

  
  for (let i = 0; i < rows.length; i++) {
    const startTime = rows[i].querySelector('.hour').getAttribute('data-start').split(':');
    const endTime = rows[i].querySelector('.hour').getAttribute('data-end').split(':');

    const startHour = parseInt(startTime[0]);
    const startMinutes = parseInt(startTime[1]);
    const endHour = parseInt(endTime[0]);
    const endMinutes = parseInt(endTime[1]);

    if (hour > endHour || (hour === endHour && minute >= endMinutes)) {
      rows[i].classList.add("past");
    } else if (hour === startHour && minute >= startMinutes) {
      rows[i].classList.add("present");
    } else {
      rows[i].classList.add("future");
    }
  }
  
  
}});

addEventListener
