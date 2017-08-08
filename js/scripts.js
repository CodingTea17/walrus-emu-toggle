$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable-emu").click(function() {
    $("#emu-showing").slideToggle();
    $("#emu-hidden").slideToggle();
  });
});
