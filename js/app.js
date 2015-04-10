$(document).ready(function() {
    $('button').click(function() {
      var toAdd = $("input[name=additems]").val();
        $('#items').append("<p>"+toAdd+"</p>");

    $(".items").click(function(){
      $(".items").remove();

        });
    });
});