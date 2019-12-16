import Inputmask from "inputmask";

$(()=>{

	var selector = document.querySelectorAll("input[name='phone']");

	var im = new Inputmask({
		"mask": "+7 (999) 999-99-99",
		clearMaskOnLostFocus: true,
		clearIncomplete: true			
	});

	im.mask(selector);


	$('.form__input')
		.on('focus', (e)=>{
			let $input = $(e.target)
			$input.parent().addClass('is-focus')
		})
		.on('blur change', (e)=>{
			let $input = $(e.target)

			if($input.val() == '')
				$input.parent().removeClass('is-focus')
	 	})


	$("form").each((i, el) => {
		var $form = $(el);
		
		var id_thancks = $form.data("thancks-name");

		$form.validate({
			errorPlacement: function(error, element) { 
				//just nothing, empty  
			},
			highlight: (element, errorClass, validClass) => {
				$(element).parent().addClass(errorClass).removeClass(validClass);
			},
			unhighlight: (element, errorClass, validClass) => {
				$(element).parent().removeClass(errorClass).addClass(validClass);
			},
			submitHandler: (form) => {

				var data = $(form).serialize();

				$.ajax({
					type: 'POST',
					url: '/app/send.php',
					data: data,
					success: function(data) {
						$(form)[0].reset();
						var container_class = 'is-modal-open';
						$.magnificPopup.open({
							tClose: 'Закрыть',
							removalDelay: 600,
							fixedContentPos: true,
							fixedBgPos: true,
							overflowY: 'hidden',			
							closeMarkup: '<div class="modals__close close js-close-modal"><svg class="icon icon-close close" viewBox="0 0 612 612"><use xlink:href="/app/icons/sprite.svg#close"></use></svg></div>',
							mainClass: 'css-modal-animate',				
							items: {
								src: id_thancks,
								type: 'inline'
							},
							callbacks: {
								beforeOpen: () => {
									$('body').addClass(container_class)
								},
								beforeClose: () => {
									$('body').removeClass(container_class)
								}
							}
						}, 0);
					}
				});
			},             
			rules: {
				phone:{
					required: true,
					minlength: 10,
				}
			}		
		})

	})

})