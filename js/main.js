$(document).ready(function() {

    $('h1 span').css({backgroundPosition: '-2000px 0px'});

	$('h1 span').mouseover(function(){
		$(this).animate({backgroundPosition: '0px 0px'}, "slow");
	});
	
	$('h1 span').mouseout(function(){
		$(this).animate({backgroundPosition: '-2000px 0px'}, "slow");
	});

});