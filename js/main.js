(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.book_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('.book_time').timepicker();



	// MENU.JSON İŞLEME VE YAZDIRMA BURAYI SAKIN DEĞİŞTİRME DÜZENLEME YAPMA


	// fetch('../menu.json')
    //         .then(response => response.json())
    //         .then(data => {
    //             createMenu(data);
    //             hideLoading();
    //         })
    //         .catch(error => console.error('Error fetching JSON:', error));

	let menuData = {
		"menu": [
        {
            "id": "tost",
            "kategori": "Tost Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Kaşarlı Tost",
                    "fiyat": 129,
                    "gorsel": "gorseller/urunler/kasarlitost.jpeg",
                    "aciklama": "Kaşar peyniri ile hazırlanmış bir tost."
                },
                {
                    "isim": "Sucuklu Tost",
                    "fiyat": 139,
                    "gorsel": "gorseller/urunler/sucuklutost.jpeg",
                    "aciklama": "Kaşar peyniri ve sucuk ile hazırlanmış bir tost."
                },
                {
                    "isim": "Karışık Tost",
                    "fiyat": 140,
                    "gorsel": "gorseller/urunler/bazlamasucukkarisiktost.jpeg",
                    "aciklama": "Karışık malzemeler ile hazırlanmış bir tost."
                },
                {
                    "isim": "Kavurmalı Tost",
                    "fiyat": 179,
                    "gorsel": "gorseller/urunler/kavurmalitost.jpeg",
                    "aciklama": "Taze kavurma ile hazırlanmış bir tost."
                },
                {
                    "isim": "Bazlama Kaşarlı Tost",
                    "fiyat": 149,
                    "gorsel": "gorseller/urunler/kasarlibazlama.jpeg",
                    "aciklama": "Bazlama ekmeği ile kaşar peynirli tost."
                },
                {
                    "isim": "Bazlama Kavurmalı Tost",
                    "fiyat": 220,
                    "gorsel": "gorseller/urunler/kavurmalibazlama.jpeg",
                    "aciklama": "Bazlama ekmeği ile kavurmalı tost."
                },
                {
                    "isim": "Bazlama Karışık Tost",
                    "fiyat": 185,
                    "gorsel": "gorseller/urunler/bazlamasucukkarisiktost.jpeg",
                    "aciklama": "Bazlama ekmeği ile karışık tost."
                }
            ]
        },
        {
            "kategori": "Dürüm & Döner Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Tavuk Dürüm",
                    "fiyat": 199,
                    "gorsel": "gorseller/urunler/tavukdurum.jpeg",
                    "aciklama": "Tavuk etiyle hazırlanmış bir dürüm."
                },
                {
                    "isim": "Et Döner",
                    "fiyat": 199,
                    "gorsel": "gorseller/urunler/etdoner.jpeg",
                    "aciklama": "Kırmızı etle hazırlanmış bir döner."
                },
                {
                    "isim": "Köfte Dürüm",
                    "fiyat": 199,
                    "gorsel": "gorseller/urunler/koftedurum.jpeg",
                    "aciklama": "Özel köfte ile hazırlanmış bir dürüm."
                },
                {
                    "isim": "Adana Dürüm",
                    "fiyat": 225,
                    "gorsel": "gorseller/urunler/adanadurum.jpeg",
                    "aciklama": "Adana kebabı ile hazırlanmış bir dürüm."
                },
                {
                    "isim": "Urfa Dürüm",
                    "fiyat": 225,
                    "gorsel": "gorseller/urunler/urfadurum.jpeg",
                    "aciklama": "Urfa kebabı ile hazırlanmış bir dürüm."
                }
            ]
        },
        {
            "kategori": "Pizza Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Pizza Karışık",
                    "fiyat": 239,
                    "gorsel": "gorseller/urunler/pizza.jpeg",
                    "aciklama": "Farklı malzemelerin bir araya geldiği bir pizza."
                },
                {
                    "isim": "Pizza Karışık + Patates",
                    "fiyat": 285,
                    "gorsel": "gorseller/urunler/pizza.jpeg",
                    "aciklama": "Karışık pizza ve yanında patates kızartması."
                }
            ]
        },
        {
            "kategori": "Sandviç Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Patso",
                    "fiyat": 79,
                    "gorsel": "gorseller/urunler/patso.jpeg",
                    "aciklama": "Lezzetli patso sandviç."
                },
                {
                    "isim": "Sosisli",
                    "fiyat": 129,
                    "gorsel": "gorseller/urunler/sosisli.jpeg",
                    "aciklama": "Sosis ile hazırlanmış bir sandviç."
                }
            ]
        },
        {
            "kategori": "Atıştırmalıklar",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Patates Tabağı",
                    "fiyat": 109,
                    "gorsel": "gorseller/urunler/patatestabagi.jpeg",
                    "aciklama": "Taze patateslerden hazırlanmış bir tabak."
                },
                {
                    "isim": "Combo Mix",
                    "fiyat": 199,
                    "gorsel": "gorseller/urunler/combomix.jpeg",
                    "aciklama": "Farklı lezzetlerin bir araya geldiği enfes bir kombinasyon."
                }
            ]
        },
        {
            "kategori": "Çerezler",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Karışık Çerez",
                    "fiyat": 159,
                    "gorsel": "gorseller/urunler/karisikcerez.jpeg",
                    "aciklama": "Farklı çerezlerin bir araya geldiği lezzetli atıştırmalık."
                },
                {
                    "isim": "Duble Karışık Çerez",
                    "fiyat": 229,
                    "gorsel": "gorseller/urunler/karisikcerez.jpeg",
                    "aciklama": "Bol çeşitli çerezlerle hazırlanmış doyurucu bir atıştırmalık."
                }
            ]
        },
        {
            "kategori": "Tatlı Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Magnolia",
                    "fiyat": 125,
                    "gorsel": "gorseller/urunler/magnolia.jpeg",
                    "aciklama": "Lezzetli bir magnolia tatlısı."
                },
                {
                    "isim": "Sufle",
                    "fiyat": 139,
                    "gorsel": "gorseller/urunler/sufle.jpeg",
                    "aciklama": "Nefis bir sufle."
                },
                {
                    "isim": "Ballı Fıstık",
                    "fiyat": 149,
                    "gorsel": "gorseller/urunler/ballifistik.jpeg",
                    "aciklama": "Ballı ve fıstıklı bir tatlı."
                },
                {
                    "isim": "Sütlaç",
                    "fiyat": 125,
                    "gorsel": "gorseller/urunler/sutlac.jpeg",
                    "aciklama": "Pirinç ve süt bazlı geleneksel bir tatlı."
                },
                {
                    "isim": "Supangle",
                    "fiyat": 125,
                    "gorsel": "gorseller/urunler/supangle.jpeg",
                    "aciklama": "Çikolatalı puding ve kek parçacıklı bir tatlı."
                },
                {
                    "isim": "Trileçe",
                    "fiyat": 125,
                    "gorsel": "gorseller/urunler/trilece.jpeg",
                    "aciklama": "Üstü karamel soslu sütlü tatlı."
                },
                {
                    "isim": "Profiterol",
                    "fiyat": 125,
                    "gorsel": "gorseller/urunler/profiterol.jpeg",
                    "aciklama": "İçi krema dolu, üzeri çikolata soslu küçük hamur toplarıdır"
                },
                {
                    "isim": "Waffle",
                    "fiyat": 170,
                    "gorsel": "gorseller/urunler/waffle.jpeg",
                    "aciklama": "Çıtır dışı ve yumuşak içi olan hamur tatlısı."
                }
            ]
        },
        {
            "kategori": "Sıcak İçecekler",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Çay",
                    "fiyat": 22,
                    "gorsel": "gorseller/urunler/cay.png",
                    "aciklama": "Taze demlenmiş çay."
                },
                {
                    "isim": "Fincan Çay",
                    "fiyat": 32,
                    "gorsel": "gorseller/urunler/fincancay.jpg",
                    "aciklama": "Büyük bardakta sunulan çay."
                },
                {
                    "isim": "Tüm Bitki Çayları",
                    "fiyat": 80,
                    "gorsel": "gorseller/urunler/bitkicaylari.jpeg",
                    "aciklama": "Karışık bitki çayları."
                },
                {
                    "isim": "Salep",
                    "fiyat": 79,
                    "gorsel": "gorseller/urunler/salep.jpeg",
                    "aciklama": "Geleneksel salep içeceği."
                },
                {
                    "isim": "Sıcak Çikolata",
                    "fiyat": 79,
                    "gorsel": "gorseller/urunler/sicakcikolata.jpeg",
                    "aciklama": "Yoğun çikolata tadında sıcak içecek."
                }
            ]
        },
        {
            "kategori": "Kahve Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Türk Kahvesi",
                    "fiyat": 69,
                    "gorsel": "gorseller/urunler/turkkahvesi.jpeg",
                    "aciklama": "Geleneksel Türk kahvesi."
                },
                {
                    "isim": "Kumda Kahve",
                    "fiyat": 69,
                    "gorsel": "gorseller/urunler/turkkahvesi.jpeg",
                    "aciklama": "Kumda demlenmiş kahve."
                },
                {
                    "isim": "Dibek",
                    "fiyat": 69,
                    "gorsel": "gorseller/urunler/turkkahvesi.jpeg",
                    "aciklama": "Geleneksel dibek kahvesi."
                },
                {
                    "isim": "Menengiç",
                    "fiyat": 69,
                    "gorsel": "gorseller/urunler/turkkahvesi.jpeg",
                    "aciklama": "Sağlıklı ve lezzetli menengiç kahvesi."
                },
                {
                    "isim": "Damla Sakız",
                    "fiyat": 69,
                    "gorsel": "gorseller/urunler/damlasakiz.jpg",
                    "aciklama": "Damla sakızı aromalı özel kahve."
                },
                {
                    "isim": "Duble Kahve",
                    "fiyat": 85,
                    "gorsel": "gorseller/urunler/turkkahvesi.jpeg",
                    "aciklama": "Ekstra koyu ve yoğun lezzetli bir kahve."
                },
                {
                    "isim": "Latte",
                    "fiyat": 82,
                    "gorsel": "gorseller/urunler/latte.jpeg",
                    "aciklama": "Krema ile süslenmiş süt köpüğü ve kahve karışımı."
                },
                {
                    "isim": "Mocha",
                    "fiyat": 88,
                    "gorsel": "gorseller/urunler/mocha.jpg",
                    "aciklama": "Yoğun çikolata ve kahve karışımı."
                },
                {
                    "isim": "Espresso",
                    "fiyat": 59,
                    "gorsel": "gorseller/urunler/espresso.jpg",
                    "aciklama": "Küçük hacimli, yoğun tadlı kahve."
                },
                {
                    "isim": "Filtre Kahve",
                    "fiyat": 89,
                    "gorsel": "gorseller/urunler/filtrekahve.jpg",
                    "aciklama": "Filtre ile demlenmiş taze kahve."
                },
                {
                    "isim": "Gold Kahve Sütlü",
                    "fiyat": 79,
                    "gorsel": "gorseller/urunler/goldkahvesutlu.jpg",
                    "aciklama": "Özel süt ve altın kahve karışımı."
                }
            ]
        },
        {
            "kategori": "Soğuk Kahve Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Iced Latte",
                    "fiyat": 95,
                    "gorsel": "gorseller/urunler/icedlatte.jpeg",
                    "aciklama": "Soğuk süt ve kahve karışımı."
                },
                {
                    "isim": "Iced Mocha",
                    "fiyat": 95,
                    "gorsel": "gorseller/urunler/icedmocha.jpg",
                    "aciklama": "Soğuk yoğun çikolata ve kahve karışımı."
                }
            ]
        },
        {
            "kategori": "Milshake Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Çilekli Milkshake",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/milshake.jpeg",
                    "aciklama": "Soğuk kremalı çilekli milkshake."
                },
                {
                    "isim": "Çikolatalı Milkshake",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/milshake.jpeg",
                    "aciklama": "Soğuk kremalı çikolatalı milkshake."
                },
                {
                    "isim": "Vanilyalı Milkshake",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/milshake.jpeg",
                    "aciklama": "Soğuk kremalı vanilyalı milkshake."
                },
                {
                    "isim": "Muzlu Milkshake",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/milshake.jpeg",
                    "aciklama": "Soğuk kremalı muzlu milkshake."
                },
                {
                    "isim": "Oreolu Milkshake",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/milshake.jpeg",
                    "aciklama": "Soğuk kremalı oreolu milkshake."
                },
                {
                    "isim": "Karamelli Milkshake",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/milshake.jpeg",
                    "aciklama": "Soğuk kremalı karamelli milkshake."
                }
            ]
        },
        {
            "kategori": "Frozen Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Çilekli Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu çilek karışımı."
                },
                {
                    "isim": "Elmalı Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu elma karışımı."
                },
                {
                    "isim": "Kavunlu Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu kavun karışımı."
                },
                {
                    "isim": "Naneli Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu nane karışımı."
                },
                {
                    "isim": "Karadutlu Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu karadut karışımı."
                },
                {
                    "isim": "Şeftalili Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu şeftali karışımı."
                },
                {
                    "isim": "Karpuzlu Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu karpuz karışımı."
                },
                {
                    "isim": "Muzlu Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu muz karışımı."
                },
                {
                    "isim": "Frambuazlı Frozen",
                    "fiyat": 115,
                    "gorsel": "gorseller/urunler/frozen.jpeg",
                    "aciklama": "Buzlu frambuaz karışımı."
                }
            ]
        },
        {
            "kategori": "Soğuk İçecekler",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Su",
                    "fiyat": 15,
                    "gorsel": "gorseller/urunler/su.jpeg",
                    "aciklama": "Normal su."
                },
                {
                    "isim": "Ayran",
                    "fiyat": 49,
                    "gorsel": "gorseller/urunler/ayran.jpeg",
                    "aciklama": "Yoğurtlu içecek."
                },
                {
                    "isim": "Sade Soda",
                    "fiyat": 49,
                    "gorsel": "gorseller/urunler/sadesoda.jpeg",
                    "aciklama": "Soda içeceği."
                },
                {
                    "isim": "Soda Ayran",
                    "fiyat": 69,
                    "gorsel": "gorseller/urunler/sodaayran.jpeg",
                    "aciklama": "Soda ile hazırlanmış ayran içeceği."
                },
                {
                    "isim": "Meyveli Soda",
                    "fiyat": 53,
                    "gorsel": "gorseller/urunler/meyvelisoda.jpeg",
                    "aciklama": "Meyveli soda içeceği."
                },
                {
                    "isim": "Kola",
                    "fiyat": 65,
                    "gorsel": "gorseller/urunler/kola.jpeg",
                    "aciklama": "Kola içeceği."
                },
                {
                    "isim": "Fındıklı Kola",
                    "fiyat": 79,
                    "gorsel": "gorseller/urunler/kola.jpeg",
                    "aciklama": "Fındıklı kola içeceği."
                },
                {
                    "isim": "Fanta",
                    "fiyat": 65,
                    "gorsel": "gorseller/urunler/fanta.jpeg",
                    "aciklama": "Portakal aromalı gazlı içecek."
                },
                {
                    "isim": "Sprite",
                    "fiyat": 65,
                    "gorsel": "gorseller/urunler/sprite.jpeg",
                    "aciklama": "Limon aromalı gazlı içecek."
                },
                {
                    "isim": "Ice Tea Çeşitleri",
                    "fiyat": 65,
                    "gorsel": "gorseller/urunler/icetea.jpg",
                    "aciklama": "Buzlu çay içecekleri."
                },
                {
                    "isim": "Red Bull",
                    "fiyat": 99,
                    "gorsel": "gorseller/urunler/redbull.jpeg",
                    "aciklama": "Enerji içeceği."
                },
                {
                    "isim": "Fındıklı Red Bull",
                    "fiyat": 110,
                    "gorsel": "gorseller/urunler/findikliredbull.png",
                    "aciklama": "Fındıklı lezzetli bir enerji içeceği."
                },
                {
                    "isim": "Churchill",
                    "fiyat": 60,
                    "gorsel": "gorseller/urunler/churchill.png",
                    "aciklama": "Tuz, limon ve soda içeren bir kokteyldir."
                },
                {
                    "isim": "Mojito",
                    "fiyat": 119,
                    "gorsel": "gorseller/urunler/mojito.jpeg",
                    "aciklama": "Nane, limon, şeker ve maden suyu içeren bir içecektir."
                },
                {
                    "isim": "Karışık Meyve Suyu",
                    "fiyat": 65,
                    "gorsel": "gorseller/urunler/karisikmeyvesuyu.jpeg",
                    "aciklama": "Çeşitli meyvelerden hazırlanmış meyve suyu."
                },
                {
                    "isim": "Vişne Meyve Suyu",
                    "fiyat": 49,
                    "gorsel": "gorseller/urunler/visnemeyvesuyu.jpeg",
                    "aciklama": "Vişne aromalı meyve suyu."
                },
                {
                    "isim": "Şeftali Meyve Suyu",
                    "fiyat": 49,
                    "gorsel": "gorseller/urunler/seftalimeyvesuyu.jpeg",
                    "aciklama": "Şeftali aromalı meyve suyu."
                },
                {
                    "isim": "Portakal Suyu",
                    "fiyat": 89,
                    "gorsel": "gorseller/urunler/portakalsuyu.jpeg",
                    "aciklama": "Taze sıkılmış portakal suyu."
                },
                {
                    "isim": "Limonata",
                    "fiyat": 75,
                    "gorsel": "gorseller/urunler/limonata.jpeg",
                    "aciklama": "Limon Sulu ve şekerli bir içecek."
                }
            ]
        },
        {
            "kategori": "Nargile Çeşitleri",
            "iconSag": "",
            "iconSol": "",
            "urunler": [
                {
                    "isim": "Canlı Meyveli Nargile",
                    "fiyat": 349,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Canlı meyve dilimleriyle süslenmiş meyve aromalı nargile."
                },
                {
                    "isim": "Nakhla Cappuccino",
                    "fiyat": 200,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Cappuccino aromalı nargile tütünü."
                },
                {
                    "isim": "Anason",
                    "fiyat": 200,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Anason aromalı nargile tütünü."
                },
                {
                    "isim": "Anason Çift Elma",
                    "fiyat": 200,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Anason ve Çift Elma aromalı nargile tütünü."
                },
                {
                    "isim": "Love 66",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Love 66 aromalı nargile tütünü."
                },
                {
                    "isim": "Lady Killer",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Lady Killer aromalı nargile tütünü."
                },
                {
                    "isim": "Dejavu",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Dejavu aromalı nargile tütünü."
                },
                {
                    "isim": "İzmir Romantik",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "İzmir Romantik aromalı nargile tütünü."
                },
                {
                    "isim": "Plombir Dondurma",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": " Plombir aromalı nargile tütünü."
                },
                {
                    "isim": "Tatlı Kırmızı Elma",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": " Kırızı elma aromalı nargile tütünü."
                },
                {
                    "isim": "Üzüm",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Üzüm aromalı nargile tütünü."
                },
                {
                    "isim": "Nane",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Nane aromalı nargile tütünü."
                },
                {
                    "isim": "Pişmiş Şeftali",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Pişmiş Şeftali aromalı nargile tütünü."
                },
                {
                    "isim": "Karpuz",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Karpuz aromalı nargile tütünü."
                },
                {
                    "isim": "Çilek",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Çilek aromalı nargile tütünü."
                },
                {
                    "isim": "Okyanus",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Okyanus aromalı nargile tütünü."
                },
                {
                    "isim": "Yaban Mersini",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Yaban Mersini aromalı nargile tütünü."
                },
                {
                    "isim": "Damla Sakız",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Damla Sakız aromalı nargile tütünü."
                },
                {
                    "isim": "İstanbul Geceleri",
                    "fiyat": 189,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Üzüm orman meyveleri buz nargile tütününü."
                },
                {
                    "isim": "Adab-ı Mix Special",
                    "fiyat": 200,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Adab-ı Mix"
                },
                {
                    "isim": "Fırsat 1",
                    "fiyat": 450,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Meyveli nargile, redbull ve çerez tabağı kombinasyonu."
                },
                {
                    "isim": "Fırsat 2",
                    "fiyat": 299,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Nargile, Türk kahvesi ve su kombinasyonu."
                },
                {
                    "isim": "Fırsat 3",
                    "fiyat": 349,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Nargile, tatlı ve çay kombinasyonu."
                },
                {
                    "isim": "Fırsat 4",
                    "fiyat": 389,
                    "gorsel": "gorseller/urunler/nargile.jpeg",
                    "aciklama": "Nargile, kola ve çerez kombinasyonu."
                },
                {
                    "isim": "Buzlu Marpuç",
                    "fiyat": 39,
                    "gorsel": "gorseller/urunler/buzlumarpuc.jpg",
                    "aciklama": "Buzlu marpuç."
                },
                {
                    "isim": "Kullan At",
                    "fiyat": 39,
                    "gorsel": "gorseller/urunler/kullanat.jpg",
                    "aciklama": "Tek kullanımlık Marpuç."
                },
                {
                    "isim": "Kafa Değişimi",
                    "fiyat": 119,
                    "gorsel": "gorseller/urunler/kafadegisimi.png",
                    "aciklama": "Kafa değişimi."
                },
                {
                    "isim": "Nakhla Kafa Değişimi",
                    "fiyat": 129,
                    "gorsel": "gorseller/urunler/kafadegisimi.png",
                    "aciklama": "Nakhla tütünü kafa değişimi."
                }
            ]
        }
    ]
	}

	createMenu(menuData);

	function createMenu(data) {
		let menuItem = ""
		if (data.menu && data.menu.length > 0){
			for (let i = 0; i < data.menu.length; i++) {
				let menuData = data.menu[i];
				
				if (!menuData.id) {
					menuData.id = ""
				}
	
				menuItem += `
				<div class="col-md-6 col-lg-4" id="${menuData.id}">
					<div class="menu-wrap">
						<div class="heading-menu text-center">
						    <h3>${menuData.kategori}</h3>
						</div>`;
	
				if (menuData.urunler && menuData.urunler.length > 0) {
					for (let j = 0; j < menuData.urunler.length; j++) {
						let product = menuData.urunler[j];

						menuItem += `
						<div class="menus border-bottom-0 d-flex">
							<div class="menu-img img" style="background-image: url(${product.gorsel});"></div>
							<div class="text">
								<div class="d-flex">
									<div class="one-half">
										<h3>${product.isim}</h3>
									</div>
									<div class="one-forth">
										<span class="price">${product.fiyat}TL</span>
									</div>
								</div>
								<p>${product.aciklama}</p>
							</div>
						</div>`;
					}

					menuItem += `
					<span class="${menuData.iconSag}" style="left: 0;"></span>
					<span class="${menuData.iconSol}" style="right: 0;"></span>
					</div>
					</div>`;
				}
			}
		}

		$(".menu-row").html(menuItem);
	}

})(jQuery);

