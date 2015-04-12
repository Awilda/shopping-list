$(document).ready(function() {
    $('#add').click(function() {
      var toAdd = $("input[name=additems]").val();
        $('#items').append("<p class='items'>"+toAdd+"</p>");

    $('.items').click(function(){
      $(this).remove();

        });
return false;
    });
});
