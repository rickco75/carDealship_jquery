/* WAIT UNTIL JQUERY IS LOADED */
$(
  function(){

    /* LOOP THROUGH FORM ELEMENTS, DISPLAY NAME AND VALUE ONLY IF CHECKED */
    $("#save").click(function() {
        $(':input:checked',"#computerForm").each(function() {
            if ($(this))
             console.log( $(this).attr('name') + ': ' + $(this).attr('value'));
          });

     });

  });
/* END OF JQUERY LOAD */
