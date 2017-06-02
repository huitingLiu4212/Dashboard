$( function() {

    // $( "#sortable" ).sortable();

    $('.content').on('click','.schicon',function(evt){
    	evt.stopPropagation();
    	evt.preventDefault();
    	$('#dialog').css('margin-left',(-1*$('#dialog').outerWidth()/2)+'px');
    	$('#dialog,#mark').show();
    });

    $('#dialog').draggable({
        handle:".dialog-title"
    });

    $('#dialog *[name=close]').on('click',function(){
    	$('#mark').hide();
    	$('#dialog').hide();
    });


    var data = [
        {
            "customer":   "NEWCO",
            "location":   "SMF1 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "12341234",
            "type":     "Cable",
            "description":  "Test",
			"quantity":  "1"
        },
        {
            "customer":   "NEWCO2",
            "location":   "SMF2 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "123412345",
            "type":     "Cable",
            "description":  "Testaaa",
			"quantity":  "2"
        },
        {
            "customer":   "NEWCO2",
            "location":   "SMF2 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "123412345",
            "type":     "Cable",
            "description":  "Testaaa",
			"quantity":  "2"
        },
        {
            "customer":   "NEWCO2",
            "location":   "SMF2 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "123412345",
            "type":     "Cable",
            "description":  "Testaaa",
			"quantity":  "2"
        },
        {
            "customer":   "NEWCO2",
            "location":   "SMF2 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "123412345",
            "type":     "Cable",
            "description":  "Testaaa",
			"quantity":  "2"
        },
        {
            "customer":   "NEWCO2",
            "location":   "SMF2 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "123412345",
            "type":     "Cable",
            "description":  "Testaaa",
			"quantity":  "2"
        },
        {
            "customer":   "NEWCO2",
            "location":   "SMF2 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "123412345",
            "type":     "Cable",
            "description":  "Testaaa",
			"quantity":  "2"
        },
        {
            "customer":   "NEWCO2",
            "location":   "SMF2 - Nodes only",
            "shelfLocation": "A3",
            "partNumber": "123412345",
            "type":     "Cable",
            "description":  "Testaaa",
			"quantity":  "2"
        }
    ];

	var table=$('#sortable').DataTable({
		data:data,
        autoWidth:false,
		columns:[
			{data:function(){
				return "<a class='commandlink' href='javascript:;'></a>"
			}},
			{data:"customer"},
			{data:"location"},
			{data:"shelfLocation"}
		]
	});

    $('#sortable .close-column').on('click',function(evt){
        evt.stopPropagation();
        evt.preventDefault();
        var index = $(this).parents('th').index();
        table.column( index ).visible( false );
    });

    $('#sortable').on('click','.commandlink',function(){
    	alert(1)
    })


 });