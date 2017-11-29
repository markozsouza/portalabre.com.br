// Responsive hamburger menu

$(document).ready(function(){
	$('.menu-anchor').on('click touchstart', function(e){
		$('html').toggleClass('menu-active');
	  	e.preventDefault();
	});
});

// Fixed Header

$(document).on("scroll",function(){
   if ($(document).scrollTop() > 400) {
       $('header').addClass('shrink');
     } else {
       $('header').removeClass('shrink');
     }
});

// Menu go to and change menu color

$('ul.nav, ul.nav-mobile, .goto, div.logo, .header').find('a').click(function(){
    var $href = $(this).attr('href');
    var $anchor = $('#'+$href);
    $('html, body').animate({ scrollTop: $anchor.offset().top - 100 }, 800 ).focus();
    return false;
});


jQuery(document).ready(function($){
	var contentSections = $('.section'),
		navigationItems = $('.nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('.nav a[href="'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

});

// Carousel	Produtos

$('.center').slick({
  centerMode: true,
  dots: true,
  infinite: true,
  centerPadding: '120px',
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1081,
      settings: {
      	centerMode: true,
      	dots: true,
      	infinite: true,
      	centerPadding: '90px',
      	slidesToShow: 2,
      	slidesToScroll: 2,
      	accessibility: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        centerMode: true,
        centerPadding: '63px',
        infinite: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        infinite: true,
        slidesToShow: 1
      }
    }
  ]
});

/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   

$(function () {
    $("li.load").slice(0, 0).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("li.load:hidden").slice(0, 100).slideDown();
        if ($("li.load:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});


// Login modal (codedrops)

jQuery(document).ready(function($){
	var formModal = $('.cd-user-modal'),
		formSignup = formModal.find('#cd-signup'),
		mainNav = $('.main-nav');

	//open modal
	mainNav.on('click', function(event){
		$(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
	});

	//open sign-up form
	mainNav.on('click', '.cd-signup', signup_selected);

	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
			formModal.removeClass('is-visible');
		}	
	});
	
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		formModal.removeClass('is-visible');
	    }
    });

	//hide or show password
	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');
		
		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Ocultar' == togglePass.text() ) ? togglePass.text('Mostrar') : togglePass.text('Ocultar');
		//focus and move cursor to the end of input field
		passwordField.putCursorAtEnd();
	});

	function signup_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formSignup.addClass('is-selected');
	}

});

