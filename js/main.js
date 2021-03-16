$(function(){
	//가로길이에 맞춰서 보임
	var winW = $(window).width();
	if (winW<=480){
	//mobile
		//nav가 화면 꽉차게
		var h=$(window).height();
			$('nav').css('height',h);

			//hamburger click > nav show
			$('.mobile_menu').click(function(){
				$('nav').stop().animate({
					right:0
				});
			});

			// close click > nav hide
			$('.mobile_menu_close').click(function(){
				$('nav').stop().animate({
					right:'-100vw'
				});
			});

		//내비게이션(아코디언 메뉴)
			$('nav>ul>li>a').click(function(){
				 if($(this).attr('class') != 'active'){
				 $('nav>ul>li>a').next().slideUp();
				 $('nav > ul > li > a').removeClass('active');
				$(this).addClass('active');
				$(this).next().slideDown();
			}else{
				$(this).removeClass('active');
				$(this).next().slideUp();
				 }
			});
		} else if (winW>480){
		//pc
			//내비게이션 배경화면 같이 내려옴
			$('nav>ul>li').hover(function(){
				$('.sub').stop().slideDown();
				$('.sub_bg').stop().slideDown();
				//헤더 색상 변경
				$('header').addClass('active');
			}, function(){
				$('.sub').stop().slideUp();
				$('.sub_bg').stop().slideUp();
				//헤더 색상 변경
				$('header').removeClass('active');
			});
		}		
	
	//슬라이드 (swiper)
	var swiper = new Swiper('.swiper01', {
      effect: 'fade',
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
      pagination: {
        el: '.swiper01 .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });	
	// mobile banner (swiper)
		//item (swiper)
	 var swiper = new Swiper('.swiper02', {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
        el: '.swiper02 .swiper-pagination',
        clickable: true
		}     
    });	
	
	//item (swiper)
	 var swiper = new Swiper('.swiper03', {
		centeredSlides: true,
		loop: true,
		breakpoints:{
			1920:{
				slidesPerView:5
			},
			1600:{
				slidesPerView:5
			},
			1200:{
				slidesPerView:5
			},
			1024:{
				slidesPerView:5
			},
			960:{
				slidesPerView:3
			},
			768:{
				slidesPerView:3
			},
			640:{
				slidesPerView:3
			},
			480:{
				slidesPerView:2
			},
			320:{
				slidesPerView:2
			},
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });	
	
	//list (swiper)
	 var swiper = new Swiper('.swiper04', {
		centeredSlides: true,
		loop: true,
		breakpoints:{
			1920:{
				slidesPerView:5
			},
			1600:{
				slidesPerView:5
			},
			1200:{
				slidesPerView:5
			},
			1024:{
				slidesPerView:5
			},
			960:{
				slidesPerView:3
			},
			768:{
				slidesPerView:3
			},
			640:{
				slidesPerView:3
			},
			480:{
				slidesPerView:2
			},
			320:{
				slidesPerView:2
			},
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	//fullpage (마우스휠로 화면 이동)
	$('#fullpage').fullpage({
	  navigation:true,
	  navigationPosition:'right',
	  responsiveWidth:961,
	  afterLoad:function(anchorLink,index){
		  //만약 접속 기기의 가로길이가 961 이상이면 페이지네이션 보임, 미만이면 안보임
		  if($(window).width()>960){
			  //페이지네이션 1,5페이지에서만 페이드아웃
				if(index === 1 || index === 5){
					 $('#fp-nav').fadeOut();
				}else{
					 $('#fp-nav').fadeIn();
				}
		 //모바일에서는 section의 높이를 자동으로 인식
		 	 $('section.section').removeClass('fp-auto-height');
		 } else {
			 $('.section').addClass('fp-auto-height');
		 };
		  //화면 전환시 애니메이션
			if(index==1){
				 $('.banner .animated').removeClass('active');
				 $('.item .animated').removeClass('active');
				 $('.insta .animated').removeClass('active');
			}else if(index==2){
				 $('.banner .animated').addClass('active');
				 $('.item .animated').removeClass('active');
				 $('.insta .animated').removeClass('active');
				//swiper03 slide의 애니메이션을 1st부터 
				$('.swiper03 .swiper-slide').each(function(){
					//idx=.swiper_slide의 인덱스 번호 * 0.1
					var idx=$(this).index()*0.1;
					$(this).css('transition-delay', idx+'s');
				});
			}else if(index==3){
				 $('.banner .animated').removeClass('active');
				 $('.item .animated').addClass('active');
				 $('.insta .animated').removeClass('active');
			}else if(index==4){
				 $('.banner .animated').removeClass('active');
				 $('.item .animated').removeClass('active');
				 $('.insta .animated').addClass('active');
			}else if(index==5){
				 $('.banner .animated').removeClass('active');
				 $('.item .animated').removeClass('active');
				 $('.insta .animated').removeClass('active');
			}
	  }
	});
});