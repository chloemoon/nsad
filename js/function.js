$(function() {
	//변수선언
	$slide = $('.section_slides>.section_slides_cont>li');
	$left = $('.section_slides>a.left');
	$right = $('.section_slides>a.right');
	$indicators = $('.section_slides>.section_slides_pagination>li>a');
	$num_pag = $('.section_slides>.section_slides_num_pagination>div');
	nowIdx = 0;

	// 스크롤 이벤트
	$(window).on('scroll', function() {
		let scrollTop = $(this).scrollTop();
		if (scrollTop > 0) {
			$('#header').addClass('bgc');
		} else {
			$('#header').removeClass('bgc');
		}
	});

	//슬라이드
	//이전 다음 페이드인 페이드아웃 함수
	const fadeFn = function() {
		// 인디케이션 활성화
		$indicators.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		//넘버 페이지네이션 활성화
		$num_pag.filter('.on').removeClass('on');
		$num_pag.eq(nowIdx).addClass('on');
		// 이전다음 페이드인 페이드아웃
		$slide.filter('.on').stop().fadeOut(1000).removeClass('on');
		$slide.eq(nowIdx).stop().fadeIn(1000).addClass('on');
	};

	// 마이글리치 라이브러리
	$('.glitch-img').mgGlitch({
		// set 'true' to stop the plugin

		destroy: false,

		// set 'false' to stop glitching

		glitch: true,

		// set 'false' to stop scaling

		scale: true,

		// set 'false' to stop glitch blending

		blend: true,

		// select blend mode type

		blendModeType: 'hue',

		// set min time for glitch 1 elem

		glitch1TimeMin: 10,

		// set max time for glitch 1 elem

		glitch1TimeMax: 5,

		// set min time for glitch 2 elem

		glitch2TimeMin: 15,

		// set max time for glitch 2 elem

		glitch2TimeMax: 10
	});

	//이전다음
	$left.on('click', function(evt) {
		if (nowIdx > 0) {
			nowIdx = 0;
		} else {
			nowIdx = 1;
		}
		fadeFn();
		evt.preventDefault();
	});
	$right.on('click', function(evt) {
		if (nowIdx > 0) {
			nowIdx = 0;
		} else {
			nowIdx = 1;
		}
		fadeFn();

		evt.preventDefault();
	});
	// 인디케이터 클릭 이벤트
	$indicators.on('click', function() {
		if (nowIdx > 0) {
			nowIdx = 0;
		} else {
			nowIdx = 1;
		}
		fadeFn();
	});

	// 동영상재생 이벤트
	$('.video>.play_btn>a').on('click', function(evt) {
		$('.video>.iframe-div').css({
			display: 'block'
		});
		$('.video>img').css({
			display: 'none'
		});
		$('.video>.play_btn').css({
			display: 'none'
		});

		evt.preventDefault();
	});

	//서브슬라이드 - 스와이퍼 슬라이드

	var swiper = new Swiper('.swiper-container', {
		loop: true,
		speed: 1000,
		grabCursor: true,
		autoplay: true,
		autoplaySpeed: 3000,
		watchSlidesProgress: true,
		mousewheelControl: true,
		keyboardControl: true,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
});
