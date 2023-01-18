$(document).ready(function() {
    jQuery('.nav-toggle').click(function(event) {
      jQuery(this).toggleClass('active');
      event.stopPropagation();
      jQuery(' #tt-megamenu .tt-mega_menu').slideToggle("2000");
    });
    jQuery("#tt-megamenu .tt-mega_menu").on("click", function(event) {
      event.stopPropagation();
      jQuery(this).removeClass('active');
    });	

    jQuery(".filter-toggle").on("click" , function(e){
      e.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".filter-toggle-wrap").slideToggle("is-visible");
    })
    var filter = jQuery(this).find('.full_width .sorting_wrapper');
    jQuery(this).find('.filter-toggle').insertBefore(filter);
  
 //video
  var p = jQuery(".popup_overlay");

  jQuery("#popup_toggle").click(function() {
    jQuery("body").addClass("popup-toggle");
    p.css("display", "block");
    
  });
  
  p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
  jQuery(p).css("display", "none");
       jQuery('body').removeClass('popup-toggle'); 
    }
  });
  jQuery(".popup_close").click(function() {
    p.css("display", "none");
     jQuery('body').removeClass('popup-toggle'); 
  });

  //video popup
  function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    //div.style.display = state == 'hide' ? 'none' : '';
    func = state == "hide" ? "pauseVideo" : "playVideo";
    iframe.postMessage(
  '{"event":"command","func":"' + func + '","args":""}',
  "*"
    );
  }

  jQuery("#popup_toggle").click(function() {
    p.css("visibility", "visible").css("opacity", "1");
  });

  p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
  jQuery(p)
    .css("visibility", "hidden")
    .css("opacity", "0");
  toggleVideo("hide");
    }
  });

  jQuery(".popup_close").click(function() {
    p.css("visibility", "hidden").css("opacity", "0");
    toggleVideo("hide");
  });
  
  //filter

  if(jQuery('.header_1 .wrapper-wrap').hasClass('logo_center'))  {
    jQuery('body').addClass('logo_center');
  }
  var w_width = $(window).width();
  $('.slider-content-main-wrap').css('width',w_width);
  if($('.site-header').hasClass('header_transaparent')){
  	$('body.template-index').addClass('header_transaparent')
  }
  
  jQuery('.style1.product-layouts .product .product-wrapper ').each(function(){
    var cart = jQuery(this).find('.product-wrapper .product-description .product-description-wrap');
    jQuery(this).find('.style1 .product-wrapper .product-thumb .btn_wrapper .add_tocart').appendTo(cart);
  });
 
  $(".header_1 .site-header__cart .mini-cart-wrap").perfectScrollbar();
  var img_id = jQuery('.product-single__thumbs .slick-active.slick-current').find('.product-single__thumb').data('id');
  if(jQuery('.product-lightbox-btn').hasClass(img_id)){
    jQuery('.product-lightbox-btn.'+img_id).show();
  }
 
 jQuery(".filter-left").on("click" , function(e){
    e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".off-canvas.position-left").toggleClass("is-open");
        jQuery(".js-off-canvas-overlay.is-overlay-fixed").toggleClass("is-visible is-closable");
  	});
   jQuery(".is-overlay-fixed").on("click" , function(e){
    e.preventDefault();
     jQuery(".filter-left").trigger('click');
      jQuery(".filter-right").trigger('click');
   });
  jQuery(".filter-right").on("click" , function(e){
    e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".off-canvas.position-right").toggleClass("is-open");
        jQuery(".js-off-canvas-overlay.is-overlay-fixed").toggleClass("is-visible is-closable");
  	});
   $('.product-360-button a').magnificPopup({
     type: 'inline',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     disableOn: false,
     preloader: false,
     fixedContentPos: false,
     callbacks: {
       open: function() {
         $(window).resize()
       }
     }
   });
   /* coundown js */
  //countDownProductIni('.js-flip-countdown');
  /* simple countdown */
   countDownIni('.flip-countdown,.js-flip-countdown'); 
  /***/
  /** popup Video **/
  
   $('.popup-video').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
  
  /***/
 
    $("#shopify-section-footer-model-2,#shopify-section-footer-model-3").appendTo($(".main-content"));
 
  
 if ($('a.product-lightbox-btn').length > 0 || $('a.product-video-popup').length > 0) {
         $('.product-single__photos .gallery,.design_2 .product-img').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
            tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
            removalDelay: 300,
            closeOnContentClick: true,
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                preload: [0, 1]
            },
            image: {
                verticalFit: false,
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            },
            callbacks: {
                beforeOpen: function() {
                    var productVideo = $('.product-video-popup').attr('href');
                    if (productVideo) {
                        this.st.mainClass = 'has-product-video';
                        var galeryPopup = $.magnificPopup.instance;
                        galeryPopup.items.push({
                            src: productVideo,
                            type: 'iframe'
                        });
                        galeryPopup.updateItemHTML();
                    }
                },
                open: function() {}
            }
        // other options
      });
 }
    $('.design_3 .product-img,.design_5 .pro_img').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
            tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
            removalDelay: 300,
            closeOnContentClick: true,
            gallery: {
                enabled: true,
                navigateByImgClick: false,
                preload: [0, 1]
            },
            image: {
                verticalFit: false,
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            },
            callbacks: {
                beforeOpen: function() {
                    var productVideo = $('.product-video-popup').attr('href');
                    if (productVideo) {
                        this.st.mainClass = 'has-product-video';
                        var galeryPopup = $.magnificPopup.instance;
                        galeryPopup.items.push({
                            src: productVideo,
                            type: 'iframe'
                        });
                        galeryPopup.updateItemHTML();
                    }
                },
                open: function() {}
            }
        // other options
      });
        $('body').on('click', '.product-lightbox-btn', function(e) {
            $('.product-wrapper-owlslider').find('.owl-item.active a').click();
            e.preventDefault();
        });
 
  
    jQuery(".fullscreen_header_toggle").on("click" , function(e){
      e.preventDefault();
      jQuery(this).toggleClass("active");   
      jQuery('#tt-megamenu').toggleClass("active");
      jQuery(".fullscreen_header").toggleClass("nav-open");
      jQuery("body").toggleClass("fullnav-open header_1");
    });
  
    /* start vertical js*/	
  if(jQuery(".leftmenu_header").length > 0){
    if(jQuery(".leftmenu_header_fixed.leftmenu_header").length > 0){
      if(jQuery(".leftmenu_header_fixed.leftmenu_header").hasClass('menu_left')){
        jQuery("body").addClass("menu_left");
      } 
      if(jQuery(".leftmenu_header_fixed.leftmenu_header").hasClass('menu_right')){
        jQuery("body").addClass("menu_right");
      }
    }
    jQuery(".leftmenu_header").on("click" , function(e){
      e.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery("body").toggleClass("nav-open");
    });

  }
  
	/* end vertical js*/
  
  $('.qtyplus').on('click',function(e){
    e.preventDefault();     
    var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());
    if (!isNaN(currentVal)) {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(currentVal + 1);
    } else {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(1);
    }

  });

  $(".qtyminus").on('click',function(e) {
    e.preventDefault();
    var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());
    if (!isNaN(currentVal) && currentVal > 1) {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(currentVal - 1);
    } else {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(1);
    }

  });
  $("#navToggle").on('click',function(e) {
    jQuery(this).next('.Site-navigation').slideToggle(500);
  });
  $(".menu_toggle_wrap #navToggle").on('click',function(e) {
    jQuery(this).parent().next('.Site-navigation').slideToggle(500);
  });

  jQuery(".header_1 #accessibleNav > li:first-child" ).addClass('active');
  $( ".header_1 #accessibleNav > li" ).hover(
    function() {
      jQuery(".header_1 #accessibleNav > li").removeClass("active");
      $( this ).addClass( "active" );
    }
  );
  
  
 /*Scroll to top js*/
  jQuery("#GotoTop").on('click',function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, '1000');
    return false;
  });

  jQuery(".site-header__search.search-full .serach_icon").on('click',function(e){
    e.preventDefault();
    jQuery(this).toggleClass('active'); 
    jQuery('body').toggleClass('search_full_active'); 
    jQuery('.full-search-wrapper').addClass('search-overlap');
    jQuery(".search-bar > input").focus();
  });
  jQuery(".site-header__search.search-full .close-search").on('click',function(){
    jQuery('.site-header__search.search-full .serach_icon').removeClass('active');   
    jQuery('.full-search-wrapper').removeClass('search-overlap');   
    jQuery('body').removeClass('search_full_active'); 
  });

  jQuery(".site-header__search:not(.search-full) .serach_icon").on('click',function(){    
    jQuery( ".search_wrapper" ).slideToggle( "fast" );
    jQuery( ".search-bar > input" ).focus();
    jQuery(this).toggleClass('active');
    jQuery( ".customer_account" ).slideUp( "fast" );    
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );
  });
  jQuery(".myaccount  .dropdown-toggle").on('click',function(event){   
    event.preventDefault();
    if($(".currency-block")[0]){$(".currency-block > ul").css('display','none');  $(".header_currency .currency_wrapper.dropdown-toggle").removeClass('active'); }

    jQuery( ".customer_account" ).slideToggle( "fast" );
    jQuery('.site-header__search:not(.search-full) .serach_icon').removeClass('active');
    jQuery('body').removeClass('search_full_active'); 
    jQuery( ".site-header .search_wrapper" ).slideUp( "fast" );
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );
  });
  $(".header_currency .currency_wrapper.dropdown-toggle").on("click", function (event) {     
    event.preventDefault();
    jQuery(".customer_account").stop(); 
    jQuery( ".currencies.flag-dropdown-menu" ).slideToggle( "fast" );
    $(this).toggleClass('active');     
  });
  var p_col = jQuery('.slider-newproduct').data('col');
  if(jQuery("body.header_style_3:not(.rtl)").hasClass('disable_menutoggle')){
    $('body.disable_menutoggle.header_style_3:not(.rtl) .slider-newproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : true,
      autoplay:true,
      dots : false,
      responsive: {
        100: {
          items: 1
        },
        481: {
          items: 2
        },
        768: {
          items: 1
        },
         992: {
          items: 3
        },
        1200: {
          items: 4
        },
        1500: {
          items: p_col
        }
      }
    });
  }else{
    $('body:not(.rtl.disable_menutoggle.header_style_3) .slider-newproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : true,
      autoplay:true,
      dots : false,
      responsive: {
        100: {
          items: 1
        },
        481: {
          items: 2
        },
        768: {
          items: 1
        },
        992: {
          items: 3
        },
        1200: {
          items: p_col
        }
      }
    });
  }  
   
  if(jQuery("body.rtl.header_style_3:not(.rtl)").hasClass('disable_menutoggle')){
    $('body.rtl.disable_menutoggle.header_style_3 .slider-newproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : true,
      dots : false,
      autoplay:true,
      rtl:true,
      responsive: {
        100: {
          items: 1
        },
        481: {
          items: 2
        },
        768: {
          items: 1
        },
        992: {
          items: 3
        },
        1200: {
          items: p_col
        }
      }
    });
  }else{

    $('body.rtl:not(.disable_menutoggle.header_style_3) .slider-newproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : true,
      dots : false,
      autoplay:true,
      rtl:true,
      responsive: {
        100: {
          items: 1
        },
        481: {
          items: 2
        },
        768: {
          items: 1
        },
        992: {
          items: 3
        },
        1200: {
          items: p_col
        }
      }
    });
  }
   
  $('.slider-newproduct-wrap').each(function () { 
    if($(this).find('.owl-nav').hasClass('disabled')){
      $(this).find('.customNavigation').hide();
    }else{
      $(this).find('.customNavigation').show();
    }
  });
  $(".slider-newproduct-wrap .customNavigation .next").click(function(){
    var wrap = $(this).closest('.slider-newproduct-wrap');
    $(wrap).find('.slider-newproduct').trigger('next.owl');
  });
  $(".slider-newproduct-wrap .customNavigation .prev").click(function(){
    var wrap = $(this).closest('.slider-newproduct-wrap');
    $(wrap).find('.slider-newproduct').trigger('prev.owl');
  });

  $('.mobile-nav__sublist-trigger').on('click', function(evt) {
    evt.preventDefault();
    var $el = $(this);
    $el.toggleClass('is-active');
    $el.parent().find('.tt_sub_menu_wrap').slideToggle(200);
  });
  /*$(".Site-navigation .header-icons-wrap").append($(".menu_toggle_wrap"));*/

});

function headerToggle() {
    $('.site-header.header_2 .mobile-nav__sublist-trigger').on('click', function(evt) {
      evt.preventDefault();
      var $el = $(this);
      $el.toggleClass('is-active');
      $el.parent().next('.mobile-nav__sublist').slideToggle(200);
    });
}
jQuery(document).ready(function() {
  headerToggle();
});
jQuery(window).resize(function() {
  headerToggle();
});


jQuery(window).scroll(function () {
  if(jQuery(document).height() > jQuery(window).height()){
    var scroll = jQuery(window).scrollTop();
    if (scroll > 100) {
      jQuery("#GotoTop").fadeIn();
    } else {
      jQuery("#GotoTop").fadeOut();
    }
  }
});

function responsiveMenu(){
  if(jQuery(window).width() < 992) {

    jQuery("#shopify-section-TT-megamenu").insertAfter( ".nav-toggle" );
    jQuery('.sub-nav__dropdown').css('display','none');   

  }
  else {
      jQuery("#shopify-section-TT-megamenu").prependTo(".header_2  .menu_wrapper");
    }
}

jQuery(document).ready(function() {
  responsiveMenu();

  jQuery(".product-write-review").on('click',function(e) {
    e.preventDefault();
    $('a[href=\'#tab-2\']').trigger('click');
    jQuery('html, body').animate({
      scrollTop: jQuery(".product_tab_wrapper").offset().top-150
    }, 1000);
  });
});
jQuery(document).load(function() { 
   //var menu_wrapper = jQuery('.menu_wrapper.logo_left').height();  
});
jQuery(window).resize(function() {
  responsiveMenu();
  var w_width = $(window).width();
  $('.slider-content-main-wrap').css('width',w_width);
});


function footerToggle() {   
  if(jQuery( window ).width() < 992) { 
    if(jQuery('.site-footer').hasClass('fixed_footer'))  {
      jQuery('.page-wrapper').css('margin-bottom','0px');
    }
    jQuery('.left-sidebar.sidebar').insertAfter('.collection_wrapper');
    jQuery('.sidebar .collection_sidebar .sidebar-block').insertAfter('.filter-wrapper');
    jQuery(".site-footer .footer-column h5").addClass( "toggle" );
    jQuery(".site-footer .footer-column").children(':nth-child(2)').css( 'display', 'none' );
    jQuery(".site-footer .footer-column.active").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".site-footer .footer-column h5.toggle").unbind("click");
    jQuery(".site-footer .footer-column h5.toggle").on('click',function() {
      jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
    });   
    jQuery(".right-sidebar.sidebar .widget > h4,.left-sidebar.sidebar .widget > h4,.blog-section .sidebar .widget > h4").addClass( "toggle" );
    jQuery(".right-sidebar.sidebar .widget,.left-sidebar.sidebar .widget,.blog-section .sidebar .widget").children(':nth-child(2)').css( 'display', 'none' );
    jQuery(".right-sidebar.sidebar .widget.active,.left-sidebar.sidebar .widget.active,.blog-section .sidebar .widget.active").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").unbind("click");
    jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").on('click',function() {
      jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
    });   
    jQuery(".collection_right .sidebar-block .widget > h4,.collection_left .sidebar-block .widget > h4,.filter-toggle-wrap .sidebar-block .widget > h4").addClass( "toggle" );
    jQuery(".collection_right .sidebar-block .widget,.collection_left .sidebar-block .widget,.filter-toggle-wrap .sidebar-block .widget ").children(':nth-child(2)').css( 'display', 'none' );
    jQuery(".collection_right .sidebar-block .widget.active,.collection_left .sidebar-block .widget.active,.filter-toggle-wrap .sidebar-block .widget.active").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").unbind("click");
    jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").on('click',function() {
      jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
    }); 
  }else{
    jQuery('.sidebar-block').prependTo('.collection_sidebar');
    if(jQuery('.site-footer').hasClass('fixed_footer'))  {
      var footer_h = jQuery('.site-footer.fixed_footer').height();
      jQuery('.page-wrapper').css('margin-bottom',footer_h+'px');
    }
    jQuery('.left-sidebar.sidebar').insertBefore('.collection_wrapper');
    jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").unbind("click");
    jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").removeClass( "toggle" );
    jQuery(".sidebar .widget,.sidebar-block .widget").children(':nth-child(2)').css( 'display', 'block' );

    jQuery(".site-footer .footer-column h5").unbind("click");
    jQuery(".site-footer .footer-column h5").removeClass( "toggle" );
    jQuery(".site-footer .footer-column").children(':nth-child(2)').css( 'display', 'block' );

  }
  if(jQuery( window ).width() < 767) {     
    $(".lookbook_wrap_item").each(function (i) {
      var app_div = jQuery(this).find('.grid-img-wrap');
      jQuery(this).find('.lookbook-content.text-center').insertAfter(app_div);

    });
  }else{    
    $(".lookbook_wrap_item").each(function (i) {
      var app_div = jQuery(this);
      jQuery(this).find('.lookbook-content.text-center').prependTo(app_div);        
    });
  }

}
jQuery(document).ready(function() {
  footerToggle();
  /*sidebarsticky();*/
});
jQuery(window).resize(function() {
  footerToggle();
});

function splitStr(string,seperator){
  return string.split(seperator);
}

function countDownIni(countdown) {
  $(countdown).each(function () {
    var countdown = $(this);
    var promoperiod;
    if (countdown.attr('data-promoperiod')) {
      promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10);
    } else if (countdown.attr('data-countdown')) {
      promoperiod = countdown.attr('data-countdown');
    }
    if (Date.parse(promoperiod) - Date.parse(new Date()) > 0) {
      countdown.countdown(promoperiod, function (event) {
        // countdown.html(event.strftime('%-w weeks %-d days %Hh %Mm %Ss'));
        countdown.html(event.strftime('<span><span class="left-txt">LEFT</span><span>%D</span><span class="time-txt">DAYS</span></span>' + '<span><span>%H</span><span class="time-txt">HRS</span></span>' + '<span><span>%M</span><span class="time-txt">MIN</span></span>' + '<span><span class="second">%S</span><span class="time-txt">SEC</span></span>'));
      });
    }

  });
}

function countDownProductIni(countdown) {
  var labels = ['days', 'hours', 'minutes', 'seconds'],
      $countdown = $(countdown),
      promoperiod,
      template = _.template('<div class="time <%= label %>"><span class="count curr top"><%= curr %></span><span class="count next top"><%= next %></span><span class="count next bottom"><%= next %></span><span class="count curr bottom"><%= curr %></span><span class="label"><%= label.length < 6 ? label : label.substr(0, 3)  %></span></div>'),
      currDate = '00:00:00:00',
      nextDate = '00:00:00:00';
  if ($countdown.attr('data-promoperiod')) {
    promoperiod = new Date().getTime() + parseInt($countdown.attr('data-promoperiod'), 10);
  }
  if ($countdown.attr('data-countdown')) {
    promoperiod = $countdown.attr('data-countdown');
  }

  function strfobj(str) {
    var parsed = str.split(':'),
        obj = {};
    labels.forEach(function (label, i) {
      obj[label] = parsed[i];
    });
    return obj;
  }

  function diff(obj1, obj2) {
    var diff = [];
    labels.forEach(function (key) {
      if (obj1[key] !== obj2[key]) {
        diff.push(key);
      }
    });
    return diff;
  }
  var initData = strfobj(currDate);
  labels.forEach(function (label, i) {
    $countdown.append(template({
      curr: initData[label],
      next: initData[label],
      label: label
    }));
  });
  $countdown.countdown(promoperiod, function (event) {
    var newDate = event.strftime('%D:%H:%M:%S'),
        data;
    if (newDate !== nextDate) {
      currDate = nextDate;
      nextDate = newDate;
      data = {
        'curr': strfobj(currDate),
        'next': strfobj(nextDate)
      };
      diff(data.curr, data.next).forEach(function (label) {
        var selector = '.%s'.replace(/%s/, label),
            $node = $countdown.find(selector);
        $node.removeClass('flip');
        $node.find('.curr').text(data.curr[label]);
        $node.find('.next').text(data.next[label]);
        _.delay(function ($node) {
          $node.addClass('flip');
        }, 50, $node);
      });
    }
  });
}

function hb_animated_contents() {
  $(".hb-animate-element:in-viewport").each(function (i) {
    var $this = $(this);
    if (!$this.hasClass('hb-in-viewport')) {
      setTimeout(function () {
        $this.addClass('hb-in-viewport');
      }, 180 * i);
    }
  });
}

$(window).scroll(function () {
  hb_animated_contents();
});
$(window).load(function () {
  hb_animated_contents();
});


/*function sidebarsticky(){
 jQuery( window ).scroll(function() {
       if(jQuery('.sidebar').length > 0){
         if( jQuery(window).width() > 992 ) {
               	var stickySidebar = new StickySidebar('.sidebar', {
                topSpacing: 20,
                bottomSpacing: 0,
                containerSelector: '.content_wrap',
                innerWrapperSelector: '.sidebar__inner',
                resizeSensor: true,
                stickyClass: 'is-affixed',
                minWidth: 0
            });
         }else{
           if(jQuery('.sidebar').hasClass('is-affixed')){
             jQuery('.sidebar').removeClass('is-affixed');
             jQuery(".sidebar__inner").removeAttr("style");
           }
         }
       }
});
}
jQuery(window).resize(function() {
    sidebarsticky();
});*/