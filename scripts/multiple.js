$( function() {
var data = {
  "data": [
    {
      "DT_RowId": "row_1",
      "first_name": "Tiger",
      "last_name": "Nixon",
      "position": "System Architect",
      "email": "t.nixon@datatables.net",
      "office": "Edinburgh",
      "extn": "5421",
      "age": "61",
      "salary": "320800",
      "start_date": "2011-04-25"
    },
    {
      "DT_RowId": "row_2",
      "first_name": "Garrett",
      "last_name": "Winters",
      "position": "Accountant",
      "email": "g.winters@datatables.net",
      "office": "Tokyo",
      "extn": "8422",
      "age": "63",
      "salary": "170750",
      "start_date": "2011-07-25"
    },
    {
      "DT_RowId": "row_3",
      "first_name": "Ashton",
      "last_name": "Cox",
      "position": "Junior Technical Author",
      "email": "a.cox@datatables.net",
      "office": "San Francisco",
      "extn": "1562",
      "age": "66",
      "salary": "86000",
      "start_date": "2009-01-12"
    }
    ]
};
var editor = new $.fn.dataTable.Editor( {
        table: "#example",
        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name",
                type: "select",
                options: [
                    { label: "1 (highest)", value: "1" },
                    { label: "2",           value: "2" },
                    { label: "3",           value: "3" },
                    { label: "4",           value: "4" },
                    { label: "5 (lowest)",  value: "5" }
                ]
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office",
                type:"textarea"
            }, {
                label: "Extension:",
                name: "extn",
                type:"textarea"
            }, {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }, {
                label: "Salary:",
                name: "salary"
            }
        ]
    } );
 
    // Activate an inline edit on click of a table cell
    $('#example').on( 'click', 'tbody td', function (e) {
        editor.inline( this );
    } );
 
    $('#example').DataTable( {
        dom: "Bfrtip",
        data: data.data,
        columns: [
            { data: "first_name" },
            { data: "last_name" },
            { data: "position" },
            { data: "office" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child'
        },
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );

 });