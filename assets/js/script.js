/*Back To Top Script*/
jQuery(document).ready(function () {

  jQuery('.back-to-top').click(function (e) {
    e.preventDefault();

    jQuery('html, body').animate({
      scrollTop: 0
    }, 600); // 600ms smooth scroll
  });

});

//---------------Headroom---------------------//


document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (!header) return;

  // Mobile detection that works in real mobile browsers
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // Much smaller offset for mobile
  const offsetValue = isMobile ? 10 : 100;  

  const headroom = new Headroom(header, {
    tolerance: 5,
    offset: offsetValue,
    classes: {
      initial: "animated",
      unpinned: "slideDown",
      top: "headroom--top",
      notTop: "headroom--not-top",
    }
  });

  headroom.init();
});


//---------Menu Toggle-----------//

jQuery(document).ready(function(){
  jQuery('.slide-in-open, .slide-in-close').click(function(){
      jQuery(this).toggleClass('open');
      jQuery('.slide-in-menu-container').toggleClass('slide-in-menu');
      jQuery('body').toggleClass('menu-open');
  });
});



/* AOS  Animate*/
jQuery(document).ready(function(){
  AOS.init({
    disable: 'mobile',
    delay: 600 // 300ms animation delay
  });
	
});

window.addEventListener('load', AOS.refresh);


/* slick*/


jQuery(document).ready(function(){
    jQuery('.gallery-slider').slick({
     	slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0px',
        speed: 1000,           
        autoplay: false,
        autoplaySpeed: 4000,    
        arrows: false,
        dots: true,
        pauseOnHover: true,
		variableWidth: true
    });
});

jQuery(document).ready(function(){
    jQuery('.testimonial-slider').slick({
     	slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0px',
        speed: 1000,           
        autoplay: false,
        autoplaySpeed: 4000,    
        arrows: true,
        dots: false,
        pauseOnHover: true,
		nextArrow: '.custom-next-btn',
		prevArrow: '.custom-prev-btn',
    });
});


jQuery(document).ready(function(){

    function initMobileSlider() {
        if (window.innerWidth <= 768) {
            if (!jQuery('.fl-grid-row').hasClass('slick-initialized')) {
                jQuery('.fl-grid-row').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                    speed: 1000,
                    autoplay: false,
                    autoplaySpeed: 4000,
                    arrows: false,
                    dots: true,
                    pauseOnHover: true,
                });
            }
        } else {
            // Destroy slider on desktop
            if (jQuery('.fl-grid-row').hasClass('slick-initialized')) {
                jQuery('.fl-grid-row').slick('unslick');
            }
        }
    }

    initMobileSlider();

    // Re-check on resize
    jQuery(window).on('resize', function(){
        initMobileSlider();
    });

});


//magnificPopup



jQuery(document).ready(function() {
  jQuery('.popup-gallery-list').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
	  closeOnBgClick:true, 
	  closeMarkup: '<button title="%title%" type="button" class="mfp-close custom-close-svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></button>',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] ,// Will preload 0 - before current, and 1 after the current image
		arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><div><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"></path></svg></div></button>',
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        //return item.el.attr('title');
      }
    }
  });
});




jQuery(document).ready(function($) {

  $('.list-outer').each(function() {
    var $section = $(this);
    var $items = $section.find('.amenity-list .list-gallery');
    var $btn = $section.find('.amenity-view-more-btn a');

    // hide after 4
    $items.slice(4).hide();

    // hide button if <= 4
    if ($items.length <= 4) {
      $btn.hide();
    }

    $btn.on('click', function(e) {
      e.preventDefault();

      var isExpanded = $(this).hasClass('active');

      if (!isExpanded) {
        $items.slice(4).stop(true, true).slideDown();
        $(this).text('VIEW LESS').addClass('active');
      } else {
        $items.slice(4).stop(true, true).slideUp();
        $(this).text('VIEW MORE').removeClass('active');
      }
    });

  });

});

jQuery(document).ready(function () {
 // jQuery(".modal").fadeOut();
  jQuery(".btn-popup").click(function () {
    event.preventDefault();
    var target = jQuery(this).data("target");
    jQuery("#" + target).fadeIn(300);
  });

  jQuery(".modal").click(function (e) {
    // Close the modal when clicking outside of the modal content
    if (e.target === this) {
      jQuery(this).fadeOut(300);
    }
  });
  jQuery(".btn-close").click(function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the modal
    jQuery(this).closest(".modal").fadeOut(300); // Close the modal
  });
});