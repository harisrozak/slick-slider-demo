$(document).ready(function(){
	var windowResized;

	// Init the main slider when its height is calculated
	function initMainSlider() {
		var navigationHeight = $('.navigation-slider').outerHeight();
		var screenHeight = $(window).height();

		if ($('.main-slider').hasClass('slick-initialized')) {
			$('.main-slider').slick('unslick');
			$('.main-slider').hide();
		}

		$('.main-slider')
			.show()
			.height(screenHeight - navigationHeight)			
			.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				fade: false,
				adaptiveHeight: true,
				infinite: true,
			});
	}

	// Re init main slider on browser resize
	$(window).on('resize', function() {
		clearTimeout(windowResized);
		
		windowResized = setTimeout(function(){
			initMainSlider();
		}, 250);
	});

	// Init the main slider after the navigation slider has initialized
	$('.navigation-slider').on('init', function(slick) {
		initMainSlider();
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

