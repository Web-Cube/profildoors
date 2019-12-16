$(document).ready(function(){
    $(".js-scroll-to").click(function() {
        var attr_href = $(this).attr("href");
        var data_href = $(this).data("href");
        if ( data_href ) {
            attr_href = data_href;
        }
		$("html, body").animate({
            scrollTop: $(attr_href).offset().top + "px"
        }, {
            duration: 1000
        });
        return false;
    });
    
    $('.js-img-zoom').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: false,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	
	$(".js-color").click(function(){
		
		var color_name = $(this).data("color-name");
		var color_index = $(this).index()+1;
		
		$(this).closest(".cart__row").find(".js-color-name").text(color_name);
		$(this).closest(".cart__row").find("input[name='color']").val(color_name);
		$(this).closest(".cart__color-list").find(".cart__color-item.active").removeClass("active");
		$(this).addClass("active");
		
		$(this).closest(".cart__row").find(".cart__preview-img:visible").removeClass("active");
		$(this).closest(".cart__row").find(".cart__preview-img:nth-child("+color_index+")").addClass("active");
		
	});
	
	$(".js-color:first-child").click();
	
	$(".cart__nav-item").click(function(){
		
		var id_name = $(this).attr("href");
		
		$(".cart__category-item:visible").hide();
		$(".cart__category-item"+id_name).fadeIn(300);
		
		$(".cart__nav-item.active").removeClass("active");
		$(".cart__nav-item[href='"+id_name+"']").addClass("active");
		
		return false;
		
		
	});
	
	$(".js-next-step").click(function(){
		$(this).closest(".quiz__step").hide().removeClass("active").next().fadeIn(500).addClass("active");
	});
	
	$(".quiz__door-item_style").click(function(){
		
		var style = $(this).find(".quiz__door-name").text();
		
		$(this).closest(".quiz__door-list").find(".quiz__door-item.active").removeClass("active");
		$(this).addClass("active");
		
		$(".quiz__form input[name='style']").val(style);
		
	});
	
	$(".quiz__color-item").click(function(){
		
		$(this).toggleClass("active");
		
	});
	
	$(".js-array-color").click(function(){
		var color_array = [];
		
		for ( var i = 0; i <= $(".quiz__color-item").length; i++ ) {
			
			var color_name = $(".quiz__color-item.active:eq("+i+")").data("color-name");
			
			color_array.push(color_name);
		}
		
		$(".quiz__form input[name='color']").val(color_array.join(""));
	});
	
	$(".quiz__door-item_counter").click(function(){
		
		var counter = $(this).find(".quiz__door-name").text();
		
		$(this).closest(".quiz__door-list").find(".quiz__door-item.active").removeClass("active");
		$(this).addClass("active");
		
		$(".quiz__form input[name='counter']").val(counter);
		
	});
	
	$(".quiz__door-item_service").click(function(){
		$(this).toggleClass("active");
	});
	
	$(".js-array-service").click(function(){
		var service_array = [];
		
		for ( var i = 0; i <= $(".quiz__door-item_service").length; i++ ) {
			
			var service_name = $(".quiz__door-item_service.active:eq("+i+")").data("service-name");
			
			service_array.push(service_name);
		}
		
		$(".quiz__form input[name='service']").val(service_array.join(""));
	});
	
	function circle_loader() {
		$(".owl-dot, .slick-dots li").each(function(){
			$(this).html('<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.8184" cy="11" r="8" stroke="white" stroke-width="6"/></svg>');
		});
	}
	setTimeout(circle_loader,500);
	
	$(".office__nav-item").click(function(){
		
		setTimeout(circle_loader,100);
		
		var id_name = $(this).attr("href");
		
		$(".js-office").slick('refresh');
		
		$(".office__item:visible").hide();
		$(".office__item"+id_name).fadeIn(500);
		
		$(".office__nav-item.active").removeClass("active");
		$(".office__nav-item[href='"+id_name+"']").addClass("active");
		
		return false;
	});
    
});

function initMap() {
    var locations = [
        ["ул. Варшавская 59", 59.852369, 30.313584],
		["ул. Уральская 6", 59.951463, 30.264803]
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(59.852713, 30.313863),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: {
                url: "/app/img/marker.png",
                scaledSize: new google.maps.Size(59, 107)
            }
        });
    }
};

initMap();