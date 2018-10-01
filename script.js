/*$(document).ready(function(){

	$(".xs-menu > ul > li > a").click(function(){
		$(this).find("~ ul").stop().slideToggle("slov");
	});

});*/

/*jQuery('document').ready(function(){
	jQuery('.xs-menu li').hover(function(){
		jQuery(this).children('ul').stop(false, true).fadeIn(300);
	}, function(){
		jQuery(this).children('ul').stop(false, true).fadeOut(300);
	});
});*/

$(document).ready(function () {
  $(document).on('click', '.menujs' , function() {
    $('.menu').toggleClass('menjs');
  });
});