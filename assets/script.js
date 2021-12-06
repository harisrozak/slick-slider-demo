$(document).ready(function(){
	// Set initial active slider
	$('.navigation-slider').on('init', function(slick) {
		$('.navigation-slider .slick-slide').first().addClass('slick-current-slide');
	} );

	// On before slide change
	$('.main-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.navigation-slider').slick('slickGoTo', nextSlide);
		$('.navigation-slider .slick-slide').removeClass('slick-current-slide');
		$('.navigation-slider .slick-slide').eq(nextSlide).addClass('slick-current-slide');
	});

	// On click navigation item
	$('.navigation-slider').on('click', '.slick-slide', function() {
		var selectedIndex = $(this).index();
		$('.main-slider').slick('slickGoTo', selectedIndex);
	} );

	// Initialize main slider
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		adaptiveHeight: true,
		infinite: true,
	});
	
	// Initialize navigation slider
	$('.navigation-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		arrows: true,
		centerMode: false,
		infinite: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 415,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					arrows: false
				}
			}
		]
	});
});