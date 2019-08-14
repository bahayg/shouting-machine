$(document).ready(function() {
  $("button").click(function(event) {
    var sayInput = $("input#say").val();
    $("#shout").text(sayInput.toUpperCase());

    event.preventDefault();
  });
});
