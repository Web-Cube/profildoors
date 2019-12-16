$(document).ready(function(){
	if ($(".js-system-preview").length ) {
        $(".js-system-preview").slick({
            arrows: false,
			dots: false,
			infinite: true,
			speed: 500,
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: false
        }).slick('slickPause');
		$(".system__item").mouseover(function(){
			$(this).find(".js-system-preview").slick('slickPlay');
		}).mouseleave(function(){
			$(this).find(".js-system-preview").slick('slickPause');
		});
    };
	
	if ($(".js-gallery").length ) {
        $(".js-gallery").slick({
            arrows:false,
            infinite:true,
			dots: true,
			autoplay:true,
    		autoplaySpeed:3000,
			pauseOnHover:false,
            responsiveClass:false,
			responsive: [
				{
				  breakpoint: 769,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					  autoplay:true,
    				autoplaySpeed:3000
				  }
				},
				{
				  breakpoint: 479,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					  autoplay:true,
    				autoplaySpeed:3000
				  }
				}
			]
        });
    };
	if ($(".js-office").length ) {
        $(".js-office").slick({
            arrows:false,
            infinite:true,
			dots: true,
			autoplay:true,
    		autoplaySpeed:3000,
			pauseOnHover:false,
            responsiveClass:false,
			slidesToShow: 1,
			slidesToScroll: 1
        });
    };
});