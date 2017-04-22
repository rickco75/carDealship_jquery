$(function(){

/* CAR SEARCH FILTER */
(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
    return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
  var $noresults = $('#noresults');
  $noresults.hide();
  function listFilter(header, list) {
  $('#searchbox')
    .change( function () {
    var filter = $(this).val();
    if(filter) {
      $(list).find("a:not(:Contains(" + filter + "))").parent().slideUp();
      var result = $(list).find("a:Contains(" + filter + ")").parent().slideDown();
      if (!result.length){
        $noresults.show();
      } else {
        $noresults.hide();
      }
    } else {
      $(list).find("li").slideDown();
    }
    return false;
    })
  .keyup( function () {
    $(this).change();
  });
  }
  $(function () {

  let startFilter = listFilter($("#header"), $("#list"));
  });
}(jQuery));
});
