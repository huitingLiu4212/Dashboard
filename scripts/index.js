$( function() {
    var sortable = $( ".sortable-wrap ul" ).sortable({ 
    	cancel: ".pannel-content",
        connectWith:'.sortable',
        dropOnEmpty:true,
    	revert: true,
        placeholder:"sortable-placeholder",
        start:function(event, ui){
            var $placeHolder=$('.ui-sortable-placeholder');
            $placeHolder.css('height',ui.item.height());
        },
    	change: function(event, ui){
    		// console.dir(event);
    		// console.dir(ui);
    	},
        stop: function(event, ui){
            console.dir(event);
            console.dir(ui);
        }
    });


    var pageColumn = {
        num:1,
        changeTo:function(num){
            if(num==this.num){
                $('.sortable-column').css('width',(1/num)*100+'%');
                return false;
            }else if(num>this.num){
                var $wrap = $('.sortable-wrap'),
                    $liList = $('.sortable-wrap li.ui-state-default'),
                    len   = $liList.length;
                for(var i=parseInt(this.num)+1;i<=num;i++){
                    var $dom=$('<div class="sortable-column" id="column'+i+'"></div>');
                    var $ul =$('<ul id="sortable'+i+'" class="sortable"></ul>');
                    $wrap.append($dom.append($ul));
                };
                this.num=num;
                $('.sortable-column').css('width',(1/num)*100+'%');
                $( ".sortable-wrap ul" ).sortable({ 
                    connectWith:'.sortable'
                });
            }else{
                for(var i=parseInt(this.num);i>num;i--){
                    var $dom = $('div#column'+i),
                        $liList = $dom.find('li.ui-state-default');
                    $('div#column1 ul').append($liList.remove());
                    $dom.remove();
                };
                this.num=num;
                $('.sortable-column').css('width',(1/num)*100+'%');
                $( ".sortable-wrap ul" ).sortable({ 
                    connectWith:'.sortable'
                });
            };
        }
    };

    $('#dialog').draggable({
        handle:".dialog-title"
    });

    $('#dialog *[name=close]').on('click',function(){
    	$('#mark').hide();
    	$('#dialog').hide();
    });

    $('#moreWidgets').on('click',function(){
        $('#mark').show();
        $('#dialog').show();
    });

    $('.pagecolumn').on('click','a',function(event){
        event.stopPropagation();
        event.preventDefault();
        $(this).addClass('on').siblings().removeClass('on');
        pageColumn.changeTo($(this).html());
    });

    //select widget切换
    $('.taglist li').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        //add code
    });

    $('.checkboxList').on('click','li',function(){
        //update widget
    });

    $('.sortable-wrap').on('click','.icons .close',function(evt){
        var $parents = $(this).parents('.ui-state-default');
        $parents.remove();
        evt.stopPropagation();
    });


    $('.sortable-wrap').on('click','.icons .minimize',function(evt){
        var $parents = $(this).parents('.ui-state-default');
        var $content = $parents.find('.pannel-content');
        $(this).removeClass('minimize');
        $(this).addClass('maximize');
        $content.hide();
        evt.stopPropagation();
    });


    $('.sortable-wrap').on('click','.icons .maximize',function(evt){
        var $parents = $(this).parents('.ui-state-default');
        var $content = $parents.find('.pannel-content');
        $content.show();
        $(this).removeClass('maximize');
        $(this).addClass('minimize');
        evt.stopPropagation();
    });

    pageColumn.changeTo(1);
 });