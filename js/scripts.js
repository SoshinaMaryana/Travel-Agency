(function($){
$('.footer__net a').on('click', function(e){
	e.preventDefault();
	$('.footer__net a').removeClass('active');
	$(this).addClass('active');

})	

	$('.section__wrap').slick({
		dots: false,
		infinit: true
	});

		
})(jQuery);