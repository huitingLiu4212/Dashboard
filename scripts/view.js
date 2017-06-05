$( function() {
	$('#toggerbtn').on('click',function(){
		$('#schContent').slideToggle();
        $(this).toggleClass('down');
	});

    $('.addbtn').on('click',function(){
        $('.sch-column').removeClass('hidden');
        $(this).addClass('hidden');
    })

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
        }
    ];

	var table=$('#sortable').DataTable({
		data:data,
		fixedHeader:true,
		colReorder:true,
        autoWidth:false,
		columns:[
			{data:"customer"},
			{data:"location"},
			{data:"shelfLocation"},
			{data:"partNumber"},
			{data:"type"},
			{data:"description"},
			{data:"quantity"}
		]
	});

    $('#sortable .close-column').on('click',function(evt){
        evt.stopPropagation();
        evt.preventDefault();
        var index = $(this).parents('th').index();
        table.column( index ).visible( false );
    })
 });