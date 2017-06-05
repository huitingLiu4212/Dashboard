$( function() {
var emptyData = {
      "DT_RowId": "",
      "workOrder": "",
      "ProductSNumber": "",
      "PartNumber": "",
      "FailureDesc": "",
      "RepairComment": "",
      "ReturnStatus": ""
    };
var creatEmptyArr=function(n){
  var arr = [];
  for(var i=0;i<n;i++){
    arr[i]=$.extend({},emptyData);
  };
  return arr;
};

var editor = new $.fn.dataTable.Editor( {
        table: "#example",
        fields: [ {
                label: "Work Order:",
                name: "workOrder"
            }, {
                label: "*Product Serial Number:",
                name: "ProductSNumber"
            }, {
                label: "Part Number:",
                name: "PartNumber"
            }, {
                label: "Failure Description:",
                name: "FailureDesc",
                type: "select",
                options: [
                    { label: "", value: "0" },
                    { label: "Failed in system", value: "1" },
                    { label: "Wrong part in box", value: "2" },
                    { label: "DOA", value: "3" }
                ]
            }, {
                label: "Repair Comments:",
                name: "RepairComment",
                type:"textarea"
            }, {
                label: "Return Status:",
                name: "ReturnStatus",
                type: "select",
                options: [
                    { label: "", value: "0" },
                    { label: "Standard", value: "1" },
                    { label: "Deffered: Hard Drive Sanitization", value: "2" },
                    { label: "No return", value: "3" }
                ]
            }
        ]
    } );
 
    // Activate an inline edit on click of a table cell
    $('#example').on( 'click', 'tbody td', function (e) {
        editor.inline( this );
    } );

     $.extend( $.fn.dataTable.defaults, {
        searching: false,
        ordering:  false
    } );
 
    var t = $('#example').DataTable( {
        dom: "Bfrtip",
        paging:false,
        // data: data.data,
        columns: [
            {data: function(){
              return ''
            }},
            { data: "workOrder"},
            { data: "ProductSNumber" },
            { data: "PartNumber" },
            { data: "FailureDesc" },
            { data: "RepairComment" },
            { data: "ReturnStatus" }
        ],
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        },{
          "targets":2,
          "render" : function ( data, type, row ) {
                    return data +'<i class="schicon"></i>';
                },
        },{
          "targets":3,
          "render" : function ( data, type, row ) {
                    return data +'<i class="schicon"></i>';
                },
        } ],
        "order": [[ 1, 'asc' ]]
    } );

    t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();


    $('#addrow').on('click',function(){
      var table = $('#example').DataTable();
      table.rows.add(creatEmptyArr(5)).draw();
    });

    $('.sortable').on('click','.schicon',function(evt){
      evt.stopPropagation();
      $('#dialog').css('margin-left',(-1*$('#dialog').outerWidth()/2)+'px');
      $('#dialog,#mark').show();
    });

    $('.panel-box-left .addbtn').on('click',function(){
      $('.panel-box-left .hidden').removeClass('hidden');
      $(this).addClass('hidden');
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


  var table=$('#dialogsortable').DataTable({
    data:data,
    autoWidth:false,
    columns:[
      {data:function(){
        return "<a class='commandlink' href='javascript:;'></a>"
      }},
      {data:"customer"},
      {data:"location"},
      {data:"shelfLocation"}
    ],
    // scrollX:true
  });


  $('#dialog').draggable({
      handle:".dialog-title"
  });

  $('#dialog *[name=close]').on('click',function(){
    $('#mark').hide();
    $('#dialog').hide();
  });


  $('#addrow').trigger('click');

 });