var hidWidth;
var scrollBarWidths = 40;
var scrollStep = 50;
var maxScroll = -9999;
var Min = 10;

var widthOfList = function(){
  var itemsWidth = 0;
  $('.infinite-tabs .list li').each(function(){
    var itemWidth = $(this).outerWidth();
    itemsWidth+=itemWidth;
  });
  return itemsWidth;
};

var widthOfHidden = function(){
  return (($('.infinite-tabs .wrapper').outerWidth())-widthOfList()-getLeftPosi())-scrollBarWidths;
};

var getLeftPosi = function(){
  return $('.infinite-tabs .list').position().left;
};

var reAdjust = function(){
  if (($('.infinite-tabs .wrapper').outerWidth()) < widthOfList()) {
    $('.infinite-tabs .scroller-right').show();
  }
  else {
    $('.infinite-tabs .scroller-right').hide();
  }
  
  if (getLeftPosi()<0) {
    $('.infinite-tabs .scroller-left').show();
  }
  else {
    $('.infinite-tabs .item').animate({left:"-="+getLeftPosi()+"px"},'slow');
  	$('.infinite-tabs .scroller-left').hide();
  }
}

reAdjust();

$(window).on('resize',function(e){  
  	reAdjust();
});

$('.infinite-tabs .scroller-left')
    .mouseenter(function () {
        $('.infinite-tabs .scroller-stop').removeClass('scroller-stop').addClass('scroller-right');
        this.iid = setInterval(function () {
            if ( $('.infinite-tabs .list').position().left < -40 ) {
                $('.infinite-tabs .list').animate({left:"+="+scrollStep+"px"},100, "linear");
            } else {
                $('.infinite-tabs .list').animate({left:"0"},100, "linear");
            };
        }, 100);
    })
    .on('mouseleave', function () {
        this.iid && clearInterval(this.iid);
    })
    .on('dblclick', function() {
        $('.infinite-tabs .list').animate({left:"0"},100, "linear")
});

$('.infinite-tabs .scroller-right')
    .mouseenter(function() {
        $('.infinite-tabs .scroller-left').fadeIn('slow');
        var listLength = 0;
        $('.infinite-tabs .list li').each(function(){
            listLength += parseInt( $(this).width(), 10);
        });
        this.iid = setInterval(function() {
            if ( $('.infinite-tabs .list').position().left - 900 > -listLength ) {
                $('.infinite-tabs .list').animate({left:"-="+scrollStep+"px"},100, "linear");
            };
        }, 100);
    })
    .on('mouseleave', function(){
    	this.iid && clearInterval(this.iid);
    })
    .on('dblclick', function() {
        $('.infinite-tabs .scroller-right').removeClass('scroller-right').addClass('scroller-stop');
        var listLength = 0;
        $('.infinite-tabs .list li').each(function(){
            listLength += parseInt( $(this).width(), 10);
        });
        listLength = listLength - parseInt( $('.infinite-tabs .list li:last-child').width(), 10) - 800;
        $('.infinite-tabs .list').animate({left:"-" + listLength + "px"},100, "linear")
});

$('.infinite-tabs .scroller-left').mouseleave(function() {
  $('.infinite-tabs .list').clearQueue();
});

$('.infinite-tabs .scroller-right').mouseleave(function() {
  $( ".infinite-tabs .list" ).clearQueue();
});