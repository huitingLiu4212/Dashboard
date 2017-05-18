$( function() {

    var sortable = $( "#sortable" ).sortable({ 
    	cancel: ".pannel-content",
    	revert: true,
    	change: function(event, ui){
    		console.dir(event);
    		console.dir(ui);
    		console.dir($( "#sortable" ).sortable('toArray'));
    	}
    });

    $('#dialog *[name=close]').on('click',function(){
    	$('#mark').hide();
    	$('#dialog').hide();
    })
 });