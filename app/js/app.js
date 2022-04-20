// // Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

import magnificPopup from 'magnific-popup'
import NativejsSelect from 'nativejs-select'

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

require('../js/jquery-ui/jquery-ui')
require('../js/jquery-ui/jquery.ui.touch-punch.min.js')



require('../../node_modules/inputmask/dist/jquery.inputmask.min.js')
require('../../node_modules/slick-carousel/slick/slick.min.js')
require('../../node_modules/@cmyee/pushy/js/pushy.js')

document.addEventListener('DOMContentLoaded', () => {

	$(function() {

		$('.send_form_ajax').on('submit',function (e) {
			e.preventDefault();
			let form = this;
			$(form).find('button').hide();
			$(form).find('.wait').show();
			let url = $(form).attr('action');
			let data = $(form).serialize();
			$.ajax({
				url: url,
				type: "POST",
				dataType: 'JSON',
				data: data,
				headers: {
					'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
				},
			}).done(function (msg) {
				$('#done').children('.modal-form__title').text(msg.title);
				$('#done').children('.modal-form__subtitle').text(msg.text);
				$.magnificPopup.open({
					items: {
						src: '#done'
					},
					type: 'inline'
				});
				$(form).find('button').show();
				$(form).find('.wait').hide();
				
			})

		});

			$( "#slider-range" ).slider({
				range: true,
				min: 0,
				max: 750000,
				values: [ 7500, 300000 ],
				slide: function( event, ui ) {
					$( "#amount" ).val( ui.values[ 0 ]);
					$( "#amount2" ).val( ui.values[ 1 ]);
				}
			});
			$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
			$( "#amount2" ).val( $( "#slider-range" ).slider( "values", 1 ) );



			$('.number__btn--minus').click(function () {
				var $input = $(this).parent().find('input');
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$('.number__btn--plus').click(function () {
				var $input = $(this).parent().find('input');
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});

			$('#go-to-pay').click(function () {
				$('#delevery .order-form__title').removeClass("is-active");
				$('#delevery .order-form__wrapper').slideUp();

				$('#delevery .order-form__btn-step-current').addClass('is-active');
				$('#delevery .order-form__arrow').removeClass('is-active');
				
				$('#pay .order-form__btn-step-current').addClass('is-active');
				$('#pay .order-form__arrow').removeClass('is-active');

				

				$('#pay .order-form__title').addClass("is-active");
				$('#pay .order-form__wrapper').slideDown();
			});

			$('#go-to-client-form').click(function () {
				$('#pay .order-form__title').removeClass("is-active");
				$('#pay .order-form__wrapper').slideUp();

				$('#pay .order-form__btn-step-current').addClass('is-active');
				$('#pay .order-form__arrow').removeClass('is-active');

				$('#client-form .order-form__btn-step-current').addClass('is-active');
				$('#client-form .order-form__arrow').removeClass('is-active');
				

				$('#client-form .order-form__title').addClass("is-active");
				$('#client-form .order-form__wrapper').slideDown();
			});

			$('#back-to-delevery').click(function () {
				$('#pay .order-form__title').removeClass("is-active");
				$('#pay .order-form__wrapper').slideUp();
				$('#delevery .order-form__title').addClass("is-active");
				$('#delevery .order-form__wrapper').slideDown();
			});

			$('#back-to-pay').click(function () {
				$('#client-form .order-form__title').removeClass("is-active");
				$('#client-form .order-form__wrapper').slideUp();
				$('#pay .order-form__title').addClass("is-active");
				$('#pay .order-form__wrapper').slideDown();
			});

			$('#btn-pay-block').click(function () {

				$('#delevery .order-form__title').removeClass("is-active");
				$('#delevery .order-form__wrapper').slideUp();

				$('#client-form .order-form__title').removeClass("is-active");
				$('#client-form .order-form__wrapper').slideUp();

				$('#pay .order-form__title').addClass("is-active");
				$('#pay .order-form__wrapper').slideDown();
			});

			$('#btn-delivery-block').click(function () {
				$('#pay .order-form__title').removeClass("is-active");
				$('#pay .order-form__wrapper').slideUp();

				$('#client-form .order-form__title').removeClass("is-active");
				$('#client-form .order-form__wrapper').slideUp();

				$('#delevery .order-form__title').addClass("is-active");
				$('#delevery .order-form__wrapper').slideDown();

				
			});

			$('#btn-form-block').click(function () {
				$('#pay .order-form__title').removeClass("is-active");
				$('#pay .order-form__wrapper').slideUp();

				$('#delevery .order-form__title').removeClass("is-active");
				$('#delevery .order-form__wrapper').slideUp();

				$('#client-form .order-form__title').addClass("is-active");
				$('#client-form .order-form__wrapper').slideDown();
			});


		

			

			$('.filter__more').click(function () {
				$(this).text(function(i, text){
					return text === "Свернуть" ? "Показать еще" : "Свернуть";
				})
				$(this).parents(".filter__item").find(".filter__checks__hidden").slideToggle();
			});

			$('#btn-open-filter').click(function () {
				$(".filter").addClass("is-active");
				$(".category-overlay").addClass("is-active");
			});

			$('.category-overlay').click(function () {
				$(".filter").removeClass("is-active");
				$(".is-active").removeClass("is-active");
			});

			$('.close-filter').click(function () {
				$(".filter").removeClass("is-active");
				$(".is-active").removeClass("is-active");
			});

			


			$('.product-tabs__mobile-title').click(function () {
				$(this).toggleClass("active");
				$(this).parents(".tab_item").find(".product-tabs__wrapper").slideToggle();
			});

			

			


			

			


			$(".order-form__pay-content").not(":first").hide();
			$(".order-form__pay-variants .radio").click(function() {
				$(".order-form__pay-variants .radio").removeClass("active").eq($(this).index()).addClass("active");
				$(".order-form__pay-content").hide().eq($(this).index()).show()
			}).eq(0).addClass("active");

			$(".order-form__delevery-content").not(":first").hide();
			$(".order-form__delevery-variants .radio").click(function() {
				$(".order-form__delevery-variants .radio").removeClass("active").eq($(this).index()).addClass("active");
				$(".order-form__delevery-content").hide().eq($(this).index()).show()
			}).eq(0).addClass("active");

			/*SLICK слайдер*/
			$('.gallery').slick({
				dots: false,
				infinite: false,
				speed: 1000,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: '<button type="button" class="btn-slider prev"><i class="demo-icon icon-angle-left"></i></button>',
				nextArrow: '<button type="button" class="btn-slider next"><i class="demo-icon icon-angle-right"></i></button>',
				asNavFor: '.gallery-thumb',
				responsive: [
					{
					  breakpoint: 576,
					  settings: {
					    arrows: false
					  }
					}
				      ]
			});
			$('.gallery-thumb').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.gallery',
				focusOnSelect: true
			});


			$(window).scroll(function() {
				let height = $(window).scrollTop();
				/*Если сделали скролл на 100px задаём новый класс для header*/
				if (height > 250){
					$('.footer-panel').addClass('is-active');
				}
				if (height < 250) {
					$('.footer-panel').removeClass('is-active');
				}
				
			});

			$("#btn-cat").click(function() {
				$(this).toggleClass("is-active");
				$(".nav").slideToggle();
			});

			$(".nav__btn").click(function() {
				$(this).toggleClass("is-active");
				$(this).parents("li").find("ul").slideToggle();
			});

			$(".footer__menu-title--mobile").click(function() {
				$(this).toggleClass("is-active");
				$(this).parents(".footer__menu").find(".footer__menu-list").slideToggle();
			});


			
			

			/*Маска телефона*/
			$('.phone-mask').inputmask('+7(999)999-99-99');

			/*Аккордеон*/  
			$(".accordeon dd").hide().prev().click(function() {
				$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
				$(this).next().not(":visible").slideDown().prev().addClass("active");
			});

			/*Табы*/
			$(".tab_item").not(":first").hide();
			$(".wrapper .tab").click(function() {
				$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
				$(".tab_item").hide().eq($(this).index()).fadeIn();
				$('.products-slider').slick("refresh");
			}).eq(0).addClass("active");

			/*Стилизованный Select*/
			new NativejsSelect({
				selector: '.customSelect'
			  });

			/*SLICK слайдер*/
				$('.products-slider').slick({
				  dots: true,
				  infinite: false,
				  speed: 1000,
				  infinite: true,
				  slidesToShow: 5,
				  slidesToScroll: 5,
				  arrows: false,
				  //asNavFor: '.slider-nav'
				  responsive: [
				    {
				      breakpoint: 1400,
				      settings: {
				        slidesToShow: 4,
				        slidesToScroll: 4,
				      }
				    },
				    {
					breakpoint: 1340,
					settings: {
					  slidesToShow: 4,
					  slidesToScroll: 4,
					}
				      },
				    {
					breakpoint: 1200,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2,
					}
				      },
				    {
				      breakpoint: 992,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 2
				      }
				    },
				    {
				      breakpoint: 768,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 576,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 0,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				    // You can unslick at a given breakpoint now by adding:
				    // settings: "unslick"
				    // instead of a settings object
				  ]
				});
				//$('.slider-nav').slick({
				//  slidesToShow: 4,
				//  slidesToScroll: 1,
				//  asNavFor: '.slider-for',
				//  focusOnSelect: true
				//});


				$('.clients-slider').slick({
					dots: true,
					infinite: false,
					speed: 1000,
					infinite: true,
					slidesToShow: 4,
					slidesToScroll: 4,
					prevArrow: '<button type="button" class="btn-slider prev"><i class="demo-icon icon-angle-left"></i></button>',
					nextArrow: '<button type="button" class="btn-slider next"><i class="demo-icon icon-angle-right"></i></button>',
					//asNavFor: '.slider-nav'
					responsive: [
					  {
					    breakpoint: 1200,
					    settings: {
					      slidesToShow: 3,
					      slidesToScroll: 3,
					      infinite: true,
					      dots: true
					    }
					  },
					  {
					    breakpoint: 992,
					    settings: {
					      slidesToShow: 1,
					      slidesToScroll: 1
					    }
					  },
					  {
					    breakpoint: 768,
					    settings: {
					      slidesToShow: 1,
					      slidesToScroll: 1,
					      arrows: false
					    }
					  },
					  {
					    breakpoint: 576,
					    settings: {
					      slidesToShow: 1,
					      slidesToScroll: 1,
					      arrows: false
					    }
					  },
					  {
					    breakpoint: 0,
					    settings: {
					      slidesToShow: 1,
					      slidesToScroll: 1
					    }
					  }
					  // You can unslick at a given breakpoint now by adding:
					  // settings: "unslick"
					  // instead of a settings object
					]
				      });

				

			//Magnific Фото в модалке
			$('.popup').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				closeBtnInside: false,
				fixedContentPos: true,
				mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
				image: {
					verticalFit: true
				},
				zoom: {
					enabled: true,
					duration: 300 // don't foget to change the duration also in CSS
				}
			});

			/*Magnific галерея
				$('.popup-gallery').magnificPopup({
					delegate: 'a',
					type: 'image',
					tLoading: 'Загрузка изображения #%curr%...',
					mainClass: 'mfp-fade mfp-img-mobile',
					gallery: {
						enabled: true,
						navigateByImgClick: true,
						preload: [0,1] // Will preload 0 - before current, and 1 after the current image
					},
					image: {
						tError: '<a href="%url%">Изображение #%curr%</a> не загружено.',
						titleSrc: function(item) {
							return '';
						}
					}
				});*/

			/*Magnific модальное окно */
			$('.popup-with-form').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#name',
				mainClass: 'mfp-fade',
				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}
			});


			/*Кнопка "Наверх"*/
			$("#top").click(function () {
				$("body, html").animate({
					scrollTop: 0
				}, 800);
				return false;
			});

			$("img, a").on("dragstart", function(event) { event.preventDefault(); });

			/*
				$('.minus').click(function () {
					var $input = $(this).parent().find('input');
					var count = parseInt($input.val()) - 1;
					count = count < 1 ? 1 : count;
					$input.val(count);
					$input.change();
					return false;
				});
				$('.plus').click(function () {
					var $input = $(this).parent().find('input');
					$input.val(parseInt($input.val()) + 1);
					$input.change();
					return false;
				});


				$(this).text(function(i, text){
			          return text === "Свернуть" ? "Выберите категорию" : "Свернуть";
			      })


				
			*/

		});


		function throttle(fn, delay) {
			var last = undefined;
			var timer = undefined;
			
			return function () {
				var now = +new Date();
			
				if (last && now < last + delay) {
					clearTimeout(timer);
				
					timer = setTimeout(function () {
						last = now;
						fn();
					}, delay);
					} else {
						last = now;
						fn();
					}
			};
		}
		      
		function onScroll() {
			if (window.pageYOffset > 150) {
				$$header.classList.add('is-active');
			} else {
				$$header.classList.remove('is-active');
			}
		}
		console.log(window.pageYOffset);
		      
		var $$header = document.querySelector('.js-header');
		
		window.addEventListener('scroll', throttle(onScroll, 25));


})
 

