$(function() {
  $("#plugins li.plugin").each(function(index, element) {
    $(element).css("cursor", "pointer");
    element.onclick = function() {
      top.location.href = '/' + $(this).attr('rel');
    }
  });
});