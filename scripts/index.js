$( function() {

    $( "#sortable" ).sortable();

    $('#dialog *[name=close]').on('click',function(){
    	$('#mark').hide();
    	$('#dialog').hide();
    })
 });