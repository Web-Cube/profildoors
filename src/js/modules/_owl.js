$(document).ready(function(){
	if ($(".js-catalog").length ) {
        $(".js-catalog").on('initialized.owl.carousel', function() {
			
			for( var i = 0; i <= $(".js-catalog").find(".catalog__item").length; i++ ) {
				$(".js-catalog").find(".catalog__item:eq(" + i + ")").attr("data-index",i);
				//console.log(i);
			}
			
		}).owlCarousel({
            nav:true,
            loop:true,
			dots: false,
			navText : ['<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>','<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>'],
            responsiveClass:true,
            responsive:{
				0:{
                    items:2,
                },
				480:{
                    items:2,
                },
                768:{
                    items:3,
                },
                1024:{
                    items:4,
                },
                1280:{
                    items:5,
                }
            }
        });
    };
	$(".js-catalog .catalog__item").click(function(){
		var index = $(this).attr("data-index");
		var category = $(this).attr("data-category");
		$(".js-popup-slider").trigger('to.owl.carousel',[index]);
		
		$(".cart__category-item").hide();
		$(".cart__category-item"+category).fadeIn(300);
		
		$(".cart__nav-item.active").removeClass("active");
		$(".cart__nav-item[href='"+category+"']").addClass("active");
	});
	if ($(".js-popup-slider").length ) {
        $(".js-popup-slider").owlCarousel({
            nav:true,
            loop:true,
			dots: false,
			items: 1,
			navText : ['<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>','<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>'],
            responsiveClass:true,
            responsive:{
				0:{
                    items:1,
					nav:false,
					mouseDrag : false,
        			touchDrag : false
					
                },
				580: {
					nav:true
				}
            }
        });
    };
	if ($(".js-system").length ) {
        $(".js-system").owlCarousel({
            nav:true,
            loop:true,
			dots: false,
			navText : ['<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>','<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>'],
            responsiveClass:true,
            responsive:{
				0:{
                    items:1
                },
				480:{
                    items:2
                },
                769:{
                    items:3
                }
            }
        });
    };
	if ($(".js-review").length ) {
        $(".js-review").owlCarousel({
            nav:false,
			navText : ['<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>','<svg class="icon icon-arrow arrow" viewBox="0 0 34 15"><use xlink:href="/app/icons/sprite.svg#next"></use></svg>'],
            loop:true,
			dots: false,
			items: 1,
            responsiveClass:true,
			mouseDrag:false,
			touchDrag:false
        });
		$('.js-review-prev').click(function() {
			$(".js-review").trigger('prev.owl.carousel',[500]);
		});
		$('.js-review-next').click(function() {
			$(".js-review").trigger('next.owl.carousel',[500]);
		});
    };
});