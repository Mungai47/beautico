(function(e) {   
  e(document).ready(function(){
      initHeaderSticky();
  });
  e(window).resize(function() {
      initHeaderSticky();
  });
  e(window).scroll(function() {
      initHeaderSticky();
    });
    function initHeaderSticky(){
      if(jQuery(document).height() > jQuery(window).height()){
        if (jQuery(window).width() > 1199){
          if(jQuery('.header_2 .nav-menu-wrap,.header_1_wrapper').hasClass("sticky_header")){
            if (jQuery(this).scrollTop() > 200)
            {    
              jQuery('.header_2 .nav-menu-wrap,.header_1_wrapper').addClass("fixed");

            }else{
              jQuery('.header_2 .nav-menu-wrap,.header_1_wrapper').removeClass("fixed");
            }
          } else {
            jQuery('.header_2 .nav-menu-wrap,.header_2').removeClass("fixed");
          }

        }else{
          jQuery('.header_1_wrapper,.header_2 .nav-menu-wrap').removeClass('fixed');
        }    
      }
    }
  
   var cookieName = "ttwishlistList";
  
      
    
  
  
    e(document).ready(function() {
        t.init()
        t.closeQuickViewPopup();
    });
  
  
     e(document).on("click", function(n) {   
            var r = e(".quick-view");
            var i = e("#slidedown-cart");
            var s = e(".site-header_cart_link");
            var o = e("#email-modal .modal-window");
             e(".quick-view .overlay, .close-window").on("click", function() {    
               if (!r.is(n.target) && r.has(n.target) && !i.is(n.target) && !i.is(n.target) && i.has(n.target).length === 0 && !s.is(n.target) && s.has(n.target).length === 0 && !o.is(n.target) && o.has(n.target).length === 0 ) {
                 t.closeQuickViewPopup();

               }
             });
             if (!r.is(n.target) && r.has(n.target).length === 0 && !i.is(n.target) && i.has(n.target).length === 0 && !s.is(n.target) && s.has(n.target).length === 0 && !o.is(n.target) && o.has(n.target).length === 0 ) {             
               t.closeDropdownCart();
               t.closeEmailModalWindow();

             }
       })
    
    
    var t = {
        KidsTimeout: null,
        isSidebarAjaxClick: false,
        init: function() {    
            this.initQuickView();
            this.initAddToCart();
            this.initModal();
          	this.initShortcode();
            this.productAccordion();
            this.productCompact();
            this.initProductAddToCart();
            this.initDropDownCart();
            this.initWishlist();   
            this.initProductMoreview();
            this.initSidebar();
            this.initColorSwatchGrid();  
            this.initInfiniteScrolling();
        },
       initColorSwatchGrid: function() { 
          jQuery('.item-swatch li label').click(function(){                                   
            var newImage = jQuery(this).parent().find('.hidden img').attr('src');
           jQuery(this).closest('.product-wrapper').find('.featured-image').attr({ src: newImage }); 
            return false;
          });
        },
      
        initWishlist: function() {
           t.updateWishlistButtons()
           t.initWishlistButtons()
        },

      initWishlistButtons: function() {
        if(e(".add-in-wishlist-js").length == 0) {
          return false;
        }
        e(".add-in-wishlist-js").each(function(){
          e(this).unbind();
          e(this).click(function(event){
            event.preventDefault();
            try
            {
              var id = e(this).attr('href');
              if(e.cookie(cookieName) == null) {
                var str = id;
              } else {
                if(e.cookie(cookieName).indexOf(id) == -1) {
                  var str = e.cookie(cookieName) + '__' + id;
                }
              }
              e.cookie(cookieName, str, {expires:14, path:'/'});
             
              
              jQuery('.default-wishbutton-'+id).find('i').addClass('mdi-spin mdi-refresh').removeClass('mdi-heart-outline');
               if(e(this).closest('.product-information').length > 0){                 
              	 setTimeout(function(){
                   jQuery('.loadding-wishbutton-'+id).remove(); jQuery('.added-wishbutton-'+id).show();                    
                   jQuery('.default-wishbutton-'+id).remove();
              }, 2000);
              }else{
                jQuery('.loadding-wishbutton-'+id).show();
                jQuery('.default-wishbutton-'+id).remove();
                 setTimeout(function(){
                  jQuery('.loadding-wishbutton-'+id).remove(); jQuery('.added-wishbutton-'+id).show(); 
                  }, 2000);
              }
              e(this).unbind();
            }
            catch (err) {} // ignore errors reading cookies
          })
        });
      }, 


       updateWishlistButtons: function() {
        try
        {
          if(e.cookie(cookieName) != null && e.cookie(cookieName) != '__' && e.cookie(cookieName) != '') {
            var str = String(e.cookie(cookieName)).split("__");
            for (var i=0; i<str.length; i++) {
              if (str[i] != '') {
                jQuery('.added-wishbutton-'+str[i]).show();
                jQuery('.default-wishbutton-'+str[i]).remove();
                jQuery('.loadding-wishbutton-'+str[i]).remove();

              }
            }
          }
        }
        catch (err) {}
      }, 
      productCompact: function() {
        if($(".product-design-compact .tt-scroll").length > 0){
                $(".product-design-compact .tt-scroll").nanoScroller({
                    paneClass: 'tt-scroll-pane',
                    sliderClass: 'tt-scroll-slider',
                    contentClass: 'tt-scroll-content',
                    preventPageScrolling: false
                });
        }
            },
          /*******  Shortcode Faq  *******/
          initShortcode: function() {
           e('.tt-toggle').toggle(function(){ e(this).addClass('active'); },function(){ e(this).removeClass('active'); });
           e('.tt-toggle').click(function(){ e(this).next('.tt-toggle-content').slideToggle(); });
           e('.tt-toggle-frame-set').each(function(){
            var $this = e(this),
            $toggle = $this.find('.tt-toggle-accordion');

            $toggle.click(function(){
                if( e(this).next().is(':hidden') ) {
                    $this.find('.tt-toggle-accordion').removeClass('active').next().slideUp();
                    e(this).toggleClass('active').next().slideDown();
                }
                return false;
            });

            //Activate First Item always
            $this.find('.tt-toggle-accordion:first').addClass("active");
            $this.find('.tt-toggle-accordion:first').next().slideDown();
        });/* Toggle Shortcode end*/
  
      },
      /**
             *-------------------------------------------------------------------------------------------------------------------------------------------
             * Product accordion
             *-------------------------------------------------------------------------------------------------------------------------------------------
             */
      
            productAccordion: function() {
                var $accordion = $('.tabs-layout-accordion');

                var time = 300;

                var hash  = window.location.hash;
                var url   = window.location.href;

                if ( hash.toLowerCase().indexOf( 'comment-' ) >= 0 || hash === '#reviews' || hash === '#tab-reviews' ) {
                    $accordion.find('.tab-title-reviews').addClass('active');
                } else if ( url.indexOf( 'comment-page-' ) > 0 || url.indexOf( 'cpage=' ) > 0 ) {
                    $accordion.find('.tab-title-reviews').addClass('active');
                } else {
                    $accordion.find('.tt-accordion-title').first().addClass('active');
                   $accordion.find('.tt-Tabs-panel').first().addClass('active');
                }

                $accordion.on('click', '.tt-accordion-title', function( e ) {
                    e.preventDefault();

                    var $this = $(this),
                        $panel = $this.siblings('.tt-Tabs-panel');

                    if( $this.hasClass('active') ) {
                        $this.removeClass('active');
                        $panel.stop().slideUp(time);
                    } else {
                        $accordion.find('.tt-accordion-title').removeClass('active');
                        $accordion.find('.tt-Tabs-panel').slideUp();
                        $this.addClass('active');
                        $panel.stop().slideDown(time);
                    }

                    $(window).resize();

                    setTimeout( function() {
                        $(window).resize();
                    }, time);

                } );
            },
           initProductMoreview: function() {
              e('body:not(.rtl) .design_1 .product-wrapper-owlslider .product-single__thumbs.horizontal_bottom,body:not(.rtl) .design_6 .product-wrapper-owlslider .product-single__thumbs.horizontal_bottom').slick({
                  autoplay:false,
                  autoplaySpeed:1500,
                  arrows:true,
                  prevArrow:'<button type="button btn" class="slick-prev"><i class="mdi mdi-chevron-left"></i></button>',
                  nextArrow:'<button type="button btn" class="slick-next"><i class="mdi mdi-chevron-right"></i></button>',
                  centerMode:true,
                  slidesToShow: window.number_of_thumb,
                  slidesToScroll:1,
                   responsive: [
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 481,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });
       		 e('body.rtl .design_1 .product-wrapper-owlslider .product-single__thumbs.horizontal_bottom,body.rtl .design_6 .product-wrapper-owlslider .product-single__thumbs.horizontal_bottom').slick({
            autoplay:false,
            autoplaySpeed:1500,
            arrows:true,
               rtl:true,
            prevArrow:'<button type="button btn" class="slick-prev"><i class="mdi mdi-chevron-left"></i></button>',
            nextArrow:'<button type="button btn" class="slick-next"><i class="mdi mdi-chevron-right"></i></button>',
            centerMode:true,
            slidesToShow: window.number_of_thumb,
            slidesToScroll:1,
          	 responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 481,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          });
       e('.design_1 .product-wrapper-owlslider .product-single__thumbs.vertical_left,.design_1 .product-wrapper-owlslider .product-single__thumbs.vertical_right,.design_6 .product-wrapper-owlslider .product-single__thumbs.vertical_left,.design_6 .product-wrapper-owlslider .product-single__thumbs.vertical_right').slick({
            autoplay:false,
            autoplaySpeed:1500,
            arrows:true,
            prevArrow:'<button type="button btn" class="slick-prev"><i class="mdi mdi-chevron-left"></i></button>',
            nextArrow:'<button type="button btn" class="slick-next"><i class="mdi mdi-chevron-right"></i></button>',
            centerMode:true,
         	vertical: true,
            slidesToShow: window.number_of_thumb,
            slidesToScroll:1,
         	responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 481,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          });
       e('.design_4.product-design-compact .product-wrapper-owlslider .product-single__thumbs.horizontal_bottom').slick({
            autoplay:false,
            autoplaySpeed:1500,
            arrows:true,
            prevArrow:'<button type="button btn" class="slick-prev"><i class="mdi mdi-chevron-left"></i></button>',
            nextArrow:'<button type="button btn" class="slick-next"><i class="mdi mdi-chevron-right"></i></button>',
            centerMode:true,
            slidesToShow: window.number_of_thumb_2,
            slidesToScroll:1,
         	responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 481,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          });
        e('.design_4.product-design-compact .product-wrapper-owlslider .product-single__thumbs.vertical_left,.design_4.product-design-compact .product-wrapper-owlslider .product-single__thumbs.vertical_right').slick({
            autoplay:false,
            autoplaySpeed:1500,
            arrows:true,
            prevArrow:'<button type="button btn" class="slick-prev"><i class="mdi mdi-chevron-left"></i></button>',
            nextArrow:'<button type="button btn" class="slick-next"><i class="mdi mdi-chevron-right"></i></button>',
            centerMode:true, 
            vertical: true,
            slidesToShow: window.number_of_thumb_2,
            slidesToScroll:1,
          	 responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
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
                breakpoint: 481,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
            ]
          });
        },
             
        showModal: function(n) {
            e(n).fadeIn(500);
            t.KidsTimeout = setTimeout(function() {
                e(n).fadeOut(500)
            }, 5e3)
        },
      showModalCart: function(n) {
            e(n).fadeIn(500);
        },
        checkItemsInDropdownCart: function() {
            if (e("#slidedown-cart .mini-products-list").children().length > 0) {
                e("#slidedown-cart .no-items").hide();
                e("#slidedown-cart .has-items").show()
            } else {
                e("#slidedown-cart .has-items").hide();
                e("#slidedown-cart .no-items").show()
            }
          if (e("#Sticky-slidedown-cart .mini-products-list").children().length > 0) {
                e("#Sticky-slidedown-cart .no-items").hide();
                e("#Sticky-slidedown-cart .has-items").show()
            } else {
                e("#Sticky-slidedown-cart .has-items").hide();
                e("#Sticky-slidedown-cart .no-items").show()
            }
        },
        initModal: function() {
            e(".continue-shopping").click(function() {
                clearTimeout(t.KidsTimeout);
                e(".ajax-success-modal").fadeOut(500)
            });
            e(".close-modal,.modal .overlay").click(function() {
                clearTimeout(t.KidsTimeout);
                e(".ajax-success-modal").fadeOut(500)
            })
        },
        initDropDownCart: function() {             
          		e(".site-header .site-header_cart_link").on('click',function(event) {
                  event.preventDefault();
                    if (e("#slidedown-cart").is(":visible")) {
                        e("#slidedown-cart").slideToggle("fast")
                    } else {
                        e("#slidedown-cart").slideDown("fast")
                    }
                  	e('.serach_icon').removeClass('active');
                  	jQuery( ".site-header .search_wrapper" ).slideUp( "fast" );
                    jQuery( ".customer_account" ).slideUp( "fast" );
                })
                e(".site-header .site-header_cart_link").on('click',function(event) {
                  event.preventDefault();
                    if (e("#Sticky-slidedown-cart").is(":visible")) {
                        e("#Sticky-slidedown-cart").slideToggle("fast")
                    } else {
                        e("#Sticky-slidedown-cart").slideDown("fast")
                    }
                })
                e(".site-header.header_1 .site-header_cart_link,.site-header.header_2 .site-header_cart_link").on('click',function(event) {
                  event.preventDefault();
                  e(this).toggleClass("active");
                   e('#slidedown-cart').toggleClass("active");
                  e('.fixed-cart-wrap').toggleClass("active");                  
                })
                 e(".fixed-cart-wrap .overlay,.fixed-cart-wrap .cart-close").on("click", function() { 
                  e('.fixed-cart-wrap').removeClass("active");
                  e('#slidedown-cart').removeClass("active");

                });
          
            t.checkItemsInDropdownCart();
            e("#slidedown-cart .no-items a").click(function() {
                e("#slidedown-cart").slideUp("fast")
            });
            e("#slidedown-cart .btn-remove").click(function(n) {
                n.preventDefault();
                var r = e(this).parents(".item").attr("id");
                r = r.match(/\d+/g);
                Shopify.removeItem(r, function(e) {
                    t.doUpdateDropdownCart(e)
                })
            })
             e("#Sticky-slidedown-cart .no-items a").click(function() {
                e("#Sticky-slidedown-cart").slideUp("fast")
            });
            e("#Sticky-slidedown-cart .btn-remove").click(function(n) {
                n.preventDefault();
                var r = e(this).parents(".item").attr("id");
                r = r.match(/\d+/g);
                Shopify.removeItem(r, function(e) {
                    t.doUpdateDropdownCart(e)
                })
            })
        },
        closeDropdownCart: function() {
          
            if (e(".site-header:not(.header_2) #slidedown-cart").is(":visible")) {
                e(".site-header:not(.header_2) #slidedown-cart").slideUp("fast")
            }
        },
       
        
        initProductAddToCart: function() {
            if (e("#AddToCart").length > 0) {
                e("#AddToCart").click(function(n) {
                    n.preventDefault();
                    if (e(this).attr("disabled") != "disabled") {
                            var r = e("#AddToCartForm select[name=id]").val();
                            if (!r) {
                                r = e("#AddToCartForm input[name=id]").val()
                            }
                            var i = e("#AddToCartForm input[name=quantity]").val();
                            if (!i) {
                                i = 1
                            }                          
                            var o = e("#productPhotoImg").attr("src");
                            var p = e(".product-single__title").text();
                            var amt = e(".product-single__price #productPrice").text();      
                          console.log(amt);
                            t.doAjaxAddToCart(r, i, o, p, amt)
                        
                    }
                    return false
                })
            }
        },
        initAddToCart: function() {
            if (e(".add-cart-btn").length > 0) {
                e(".add-cart-btn").click(function(n) {
                    n.preventDefault();
                    if (e(this).attr("disabled") != "disabled") {
                        var r = e(this).parents(".item-row");
                        var i = e(r).data("id");
                        i = i.match(/\d+/g);
                        if (!window.ajax_cart) {
                            e("form.cart-form-" + i).submit()
                        } else {
                            var s = e(".cart-form-" + i + " select[name=id]").val();                          
                            if (!s) {
                                s = e(".cart-form-" + i + " input[name=id]").val()
                            }                          
                            var o = e(".cart-form-" + i + " select[name=quantity]").val();
                            if (!o) {
                                o = 1
                            }
                          console.log(o);
                           var a = e(r).find(".featured-image").attr("src");
                           var p = e(r).find(".grid-link__title").text();
                           var amt = e(r).find(".grid-view-item__meta").html();                         
                            t.doAjaxAddToCart(s, o, a, p, amt)
                        }
                    }
                    return false
                })
            }
        },
        showLoading: function() {
            e(".loading-modal").show()
        },
        hideLoading: function() {
            e(".loading-modal").hide()
        },
        doAjaxAddToCart: function(n, r, a, p, amt) {
            e.ajax({
                type: "post",
                url: "/cart/add.js",
                data: "quantity=" + r + "&id=" + n,
                dataType: "json",
                beforeSend: function() {
                    t.showLoading()
                },
                success: function(n) {
                    t.hideLoading();                    
                    t.showModalCart(".ajax-success-modal");
                     e(".ajax-success-modal").find(".ajax-product-image").attr("src", a);
                     e(".ajax-success-modal").find(".added-to-wishlist").hide();
                     e(".ajax-success-modal").find(".added-to-cart").show();
                     e(".ajax-success-modal").find(".ajax-product-title").text(p);
                     e(".ajax-success-modal").find(".ajax_price").html(amt);
                  
                    t.updateDropdownCart()
                },
                error: function(n, r) {
                    t.hideLoading();
                    e(".ajax-error-message").text(e.parseJSON(n.responseText).description);
                    t.showModalCart(".ajax-error-modal")
                }
            })
        },
        initQuickView: function() {
            e(".quick-view-text").click(function() {
              t.showLoading();
              e('.quick-view').addClass('open-in');  
                var product = e(this).data("id");
                Shopify.getProduct(product, function(product) {
                    var r = e("#quickview-template").html();
                    e(".quick-view").html(r);
                    var i = e(".quick-view");
                   
                   t.loadQuickViewSlider(product, i);
                    var s = product.description.replace(/(<([^>]+)>)/ig, "");
                    s = s.split(" ").splice(0, 40).join(" ") + "...";
                    i.find(".product-title a").text(product.title);
                    i.find(".product-title a").attr("href", product.url);                  
                     if (i.find('.product-inventory span').length > 0) {
                       var variant = product.variants[0];
                      var inventoryInfo = i.find('.product-inventory span');              
                       if (variant.available) {
                       if (variant.inventory_management != null) {
                          inventoryInfo.text(window.in_stock);
                          inventoryInfo.addClass("in_stock");
                          jQuery(".qty-box-set").css( 'display', 'inline-block' );
                        } else {
                          inventoryInfo.text(window.many_in_stock);
                          inventoryInfo.addClass("many_in_stock");
                          jQuery(".qty-box-set").css( 'display', 'inline-block' );
                        }
                      } else {
                        inventoryInfo.text(window.out_of_stock);
                        inventoryInfo.addClass("out_of_stock");
                        jQuery(".qty-box-set").css( 'display', 'none' );
                        
                      }
                    }
                  
                    i.find(".product-description").text(s);
                    i.find(".price").html(Shopify.formatMoney(product.price, window.money_format));
                  	i.find(".money").html(Shopify.formatMoney(product.price, window.money_format));
                    i.find(".product-item").attr("id", "product-" + product.id);
                    i.find(".variants").attr("id", "product-actions-" + product.id);
                    i.find(".variants select").attr("id", "product-select-" + product.id);
                    if (product.compare_at_price > product.price) {
                        i.find(".compare-price").html(Shopify.formatMoney(product.compare_at_price_max, window.money_format)).show();
                        i.find(".price").addClass("on-sale")
                    } else {
                        i.find(".compare-price").html("");
                        i.find(".price").removeClass("on-sale")
                    }
                    if (!product.available) {
                        i.find("select, input, .total-price, .dec, .inc, .variants label").remove();
                        i.find(".add-to-cart-btn").text("Unavailable").addClass("disabled").attr("disabled", "disabled");                        
                    } else {
                        i.find(".total-price .price").html(Shopify.formatMoney(product.price, window.money_format));                        
                        t.createQuickViewVariants(product, i)
                        
                    }     
                  $('.quick-view .qtyplus').on('click',function(e){
                    e.preventDefault();
                      var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
                    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());

                    if (!isNaN(currentVal)) {
                      jQuery(this).parents('.qty-box-set').find('.quantity').val(currentVal + 1);
                    } else {
                      jQuery(this).parents('.qty-box-set').find('.quantity').val(1);
                    }

                  });

                  $(".quick-view .qtyminus").on('click',function(e) {
                    e.preventDefault();
                    var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
                    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());
                    if (!isNaN(currentVal) && currentVal > 1) {
                      jQuery(this).closest('.qty-box-set').find('.quantity').val(currentVal - 1);
                    } else {
                      jQuery(this).closest('.qty-box-set').find('.quantity').val(1);
                    }

                  });
                   
                    t.initQuickviewAddToCart();
                  t.hideLoading();
                    e(".quick-view").fadeIn(500);
                   
                });
                return false
            });
             e(".quick-view .overlay, .close-window").on("click", function() {    
                t.closeQuickViewPopup();
               e('.quick-view').removeClass("open-in");
               e('.quick-view').removeClass("option-loader");
               
                return false
            });
           
        },
        initQuickviewAddToCart: function() {
            if (e(".quick-view .add-to-cart-btn").length > 0) {
                e(".quick-view .add-to-cart-btn").click(function() {
                    var n = e(".quick-view select[name=id]").val();
                    if (!n) {
                        n = e(".quick-view input[name=id]").val()
                    }
                    var r = e(".quick-view input[name=quantity]").val();
                    if (!r) {
                        r = 1
                    }
                    var p = e('.quick-view .product-title a').html();
                    var a = e(".quick-view .quickview-featured-image img").attr("src");                 
                    var amt = e(".quick-view .product-price__price").html(); 
                    t.doAjaxAddToCart(n, r, a, p, amt);
                    t.closeQuickViewPopup();
                    e('.quick-view').removeClass("open-in");
               		e('.quick-view').removeClass("option-loader");
                })
            }
        },
        updateDropdownCart: function() {
            Shopify.getCart(function(e) {
                t.doUpdateDropdownCart(e)
            })
        },
        doUpdateDropdownCart: function(n) {
            var r = '<li class="item" id="cart-item-{ID}"><a href="{URL}" title="{TITLE}" class="product-image"><img src="{IMAGE}" alt="{TITLE}"></a><div class="product-details"><a href="javascript:void(0)" title="Remove This Item" class="btn-remove"><span class="mdi mdi-close"></span></a><p class="product-name"><a href="{URL}">{TITLE}</a></p><div class="cart-collateral">{QUANTITY} x <span class="price">{PRICE}</span></div></div></li>';
          e("#CartCount_ .cart-products-count").text(n.item_count );
          e("#CartCount_sticky .cart-products-count").text(n.item_count );
            e("#minicart_total span.money").html(Shopify.formatMoney(n.total_price, window.money_format));
            e("#slidedown-cart .summary .price").html(Shopify.formatMoney(n.total_price, window.money_format));
            e("#slidedown-cart .mini-products-list").html("");
           	e("#Sticky-slidedown-cart .summary .price").html(Shopify.formatMoney(n.total_price, window.money_format));
            e("#Sticky-slidedown-cart .mini-products-list").html("");
          e(".ajax-success-modal").find(".ajax_item_total").html(n.item_count);
            if (n.item_count > 0) {
                for (var i = 0; i < n.items.length; i++) {
                    var s = r;
                    s = s.replace(/\{ID\}/g, n.items[i].id);
                    s = s.replace(/\{URL\}/g, n.items[i].url);
                    s = s.replace(/\{TITLE\}/g, n.items[i].title);
                    s = s.replace(/\{QUANTITY\}/g, n.items[i].quantity);
                    s = s.replace(/\{IMAGE\}/g, Shopify.resizeImage(n.items[i].image, "medium"));
                    s = s.replace(/\{PRICE\}/g, Shopify.formatMoney(n.items[i].price, window.money_format));
                    e("#slidedown-cart .mini-products-list").append(s)
                    e("#Sticky-slidedown-cart .mini-products-list").append(s)
                }
                e("#slidedown-cart .btn-remove").click(function(n) {
                    n.preventDefault();
                    var r = e(this).parents(".item").attr("id");
                    r = r.match(/\d+/g);
                    Shopify.removeItem(r, function(e) {
                        t.doUpdateDropdownCart(e);                      
                    })
                });
              e("#Sticky-slidedown-cart .btn-remove").click(function(n) {
                    n.preventDefault();
                    var r = e(this).parents(".item").attr("id");
                    r = r.match(/\d+/g);
                    Shopify.removeItem(r, function(e) {
                        t.doUpdateDropdownCart(e);                      
                    })
                });
                if (t.checkNeedToConvertCurrency()) {
                    Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), '#slidedown-cart span.money', 'money_format');
                  Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), '#Sticky-slidedown-cart span.money', 'money_format');
                  Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), 'span.money', 'money_format');
                    Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), '#minicart_total span.money', 'money_format');
                    
                }
            }
            t.checkItemsInDropdownCart()
        },
        checkNeedToConvertCurrency: function() {
            return window.show_multiple_currencies && Currency.currentCurrency != shopCurrency
        },
        loadQuickViewSlider: function(product, r) {
          
            var s = Shopify.resizeImage(product.featured_image, "large");
            r.find(".quickview-featured-image").append('<img src="' + s + '" title="' + product.title + '"/><div style="height: 100%; width: 100%; top:0px; left:-260px; z-index: 2000; position: absolute; display: none; background: url(' + window.loading_url + ') 50% 50% no-repeat;"></div>');
            if (product.images.length > 1) {
                var o = r.find(".more-view-wrapper ul");
                for (i in product.images) {
                    var u = Shopify.resizeImage(product.images[i], "large");
                    var a = Shopify.resizeImage(product.images[i], "small");
                    var f = '<li><a href="javascript:void(0)" data-image="' + u + '"><img src="' + a + '"  /></a></li>';
                    o.append(f)
                }
             	o.css('max-height','100px');
              if($("body.rtl").length > 0){
                 if (o.hasClass("quickview-more-views-owlslider")) {
                    t.initQuickViewMoreviewRtl(o)
                } else {
                    t.initQuickViewMoreviewRtl(o)
                }
              }else{
                 if (o.hasClass("quickview-more-views-owlslider")) {
                    t.initQuickViewMoreview(o)
                } else {
                    t.initQuickViewMoreview(o)
                }
              }
                o.find("a").click(function() {
                    var t = r.find(".quickview-featured-image img");
                    var product = r.find(".quickview-featured-image div");
                    if (t.attr("src") != e(this).attr("data-image")) {
                        t.attr("src", e(this).attr("data-image"));
                        product.show();
                        t.load(function(t) {
                            product.hide();
                            e(this).unbind("load");
                            product.hide()
                        })
                    }
                });
               
              
            } else {
             
                r.find(".more-view-wrapper").remove();
               
            }  
          e(".quick-view .overlay, .close-window").on("click", function() {
                t.closeQuickViewPopup();
               e('.quick-view').removeClass("open-in");
               e('.quick-view').removeClass("option-loader");               
                return false
            });
        },
         closeEmailModalWindow: function() {
            if (e("#email-modal").length > 0 && e("#email-modal").is(":visible")) {
                e("#email-modal .modal-window").fadeOut(600, function() {
                    e("#email-modal .modal-overlay").fadeOut(600, function() {
                        e("#email-modal").hide();
                        e.cookie("emailSubcribeModal", "closed", {
                            expires: 1,
                            path: "/"
                        })
                    })
                })
            }
        },
        initQuickViewMoreview: function(m) {
            if (m) {
                 m.owlCarousel({
                    nav: true,
                    items: 3,
                  loop: false,
                    rtl: false,
                  responsive: {
                    0: {
                      items: 2
                    },
                    600: {
                      items: 3
                    },
                    1199: {
                      items: 3
                    }
                  },
                    dots: false
                })
                  setTimeout(function(){
                $(m).css("visibility", "visible");                    
                  }, 500);
              }
          
        },
       initQuickViewMoreviewRtl: function(m) {
            if (m) {
                 m.owlCarousel({
                    nav: true,
                    items: 3,
                  loop: false,
                    rtl: true,
                  responsive: {
                    0: {
                      items: 2
                    },
                    600: {
                      items: 3
                    },
                    1199: {
                      items: 3
                    }
                  },
                    dots: false
                })
                  setTimeout(function(){
                $(m).css("visibility", "visible");                    
                  }, 500);
              }
        },
      
     
        convertToSlug: function(e) {
            return e.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
        },
       
        createQuickViewVariants: function(t, product) {
            if (t.variants.length > 1) {
                for (var r = 0; r < t.variants.length; r++) {
                    var i = t.variants[r];
                    var s = '<option value="' + i.id + '">' + i.title + "</option>";
                    product.find("form.variants > select").append(s)
                }
                new Shopify.OptionSelectors("product-select-" + t.id, { product: t,  onVariantSelected: selectCallbackQuickview  });
               
                if (t.options.length == 1) {
                    e(".selector-wrapper:eq(0)").prepend("<label>" + t.options[0].name + "</label>")
                }
                product.find("form.variants .selector-wrapper label").each(function(n, r) {
                    e(this).html(t.options[n].name)
                })
            } else {
                product.find("form.variants > select").remove();
                var o = '<input type="hidden" name="id" value="' + t.variants[0].id + '">';
                product.find("form.variants").append(o)
            }
          Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), 'span.money', 'money_format');
        },      
            closeQuickViewPopup: function() {
            e(".quick-view").fadeOut(500);
        },
       initSidebar: function() {
            //if category page then init sidebar
            if (e(".collection_sidebar").length > 0) {
                t.sidebarParams();              
                t.sidebarMapEvents();               
                //t.sidebarInitToggle();
                t.sidebarMapClear();
                t.sidebarMapClearAll();
                t.initSortby();                
                t.sidebarMapPaging();
            }
        },
      
       sidebarMapView: function() {
                   
                   // t.sidebarAjaxClick();
                   e(".view-mode a.active").removeClass("active");
                   e(this).addClass("active");

                   jQuery('.products-grid-view  > .product-list .product-thumb').attr('class', 'product-thumb col-xs-5 col-sm-5 col-md-4');
                   jQuery('.products-grid-view > .product-list .product-description').attr('class', 'product-description col-xs-7 col-sm-7 col-md-8');

					jQuery('.products-grid-view > div.grid-item.product-list').each(function(){
                       var rating = jQuery(this).find('.grid-item.product-list .product-wrapper .product-description .product-description-wrap');
                       jQuery(this).find('.grid-item.product-list .product-wrapper .product-thumb .product-img .spr-badge').prependTo(rating);

                     });
         
                   jQuery('.products-grid-view > .product-grid .product-thumb').attr('class', 'thumbs product-thumb col-xs-12 padding_0');
                   jQuery('.products-grid-view > .product-grid .product-description').attr('class', 'product-description col-xs-12');

                   /* Active class in Product List Grid START */
                   jQuery('.products-grid-view > div.grid-item').addClass('product-grid');
                  
                   jQuery('#list-view').on('click',function() {
                     jQuery('.products-grid-view > div.grid-item ').removeClass('product-grid');
                     jQuery('.products-grid-view > div.grid-item ').addClass('product-list');
                     jQuery('#grid-view').removeClass('active');
                     jQuery('#list-view').addClass('active');
                     jQuery('.products-grid-view > .product-list .product-thumb').attr('class', 'product-thumb col-xs-5 col-sm-5 col-md-4');
                     jQuery('.products-grid-view > .product-list .product-description').attr('class', 'product-description col-xs-7 col-sm-7 col-md-8');

                     jQuery('.products-grid-view > div.grid-item').each(function(){
                       var thumb = jQuery(this).find('.product-description-wrap');
                       jQuery(this).find('.btn_wrapper').appendTo(thumb);
                       jQuery(this).find('.grid-view-item__title').prependTo(thumb);
                       jQuery(this).find('.product-thumb .spr-badge').prependTo(thumb);

                     });


                     localStorage.setItem('display', 'grid');
                     var paging = e(".filter-show  button span").text();
                     Shopify.queryParams.view = paging;
                   });
         
                   jQuery('#grid-view').on('click',function() {
                     jQuery('#list-view').removeClass('active');
                     jQuery('#grid-view').addClass('active');
                     jQuery('.products-grid-view > div.grid-item ').removeClass('product-list');
                     jQuery('.products-grid-view > div.grid-item ').addClass('product-grid');
                     jQuery('.products-grid-view > .product-grid .product-thumb').attr('class', 'thumbs product-thumb col-xs-12 padding_0');
                     jQuery('.products-grid-view > .product-grid .product-description').attr('class', 'product-description col-xs-12');	
                     localStorage.setItem('display', 'grid');
                     
                     jQuery('.products-grid-view > div.grid-item').each(function(){
                       var thumb = jQuery(this).find('.product-thumb');
                       jQuery(this).find('.btn_wrapper').appendTo(thumb);                       
                       

                     });
                     var paging = e(".filter-show  button span").text();
                     Shopify.queryParams.view = paging;
                   });
         
                   if(jQuery( window ).width() < 992) {  
                     jQuery(".sidebar .widget > h4").addClass( "toggle" );
                     jQuery(".sidebar .widget ").children(':nth-child(2)').css( 'display', 'none' );
                     jQuery(".sidebar .widget.active").children(':nth-child(2)').css( 'display', 'block' );
                     jQuery(".sidebar .widget > h4.toggle").unbind("click");
                     jQuery(".sidebar .widget > h4.toggle").on('click',function() {
                       jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
                     });
                   }
                   /* Active class in Product List Grid END */
                   if (localStorage.getItem('display') == 'grid') {
                     jQuery('#grid-view').trigger('click');
                   }else{
                     jQuery('#list-view').trigger('click');
                   }   
                   countDownIni('.flip-countdown'); 

        },
       
      
      
      
        sidebarMapSorting: function(n) {
            e(".filter-sortby a").click(function(n) {
                if (!e(this).parent().hasClass("active")) {
                    Shopify.queryParams.sort_by = e(this).attr("href");
                    t.sidebarAjaxClick();
                    var sortbyText = e(this).text();                  
                    e(".filter-sortby  button span").text(sortbyText);
                    e(".filter-sortby li.active").removeClass("active");
                    e(this).parent().addClass("active");
                }
                n.preventDefault();
            });
        },
      
      sidebarMapShow: function() {
            e(".filter-show a").click(function(n) {
                if (!e(this).parent().hasClass("active")) {
                    var thisPaging = e(this).attr('href');
                   Shopify.queryParams.view = thisPaging;
                    t.sidebarAjaxClick();                  
                    e(".filter-show .btn span").text(thisPaging);
                    e(".filter-show li.active").removeClass("active");
                    e(this).parent().addClass("active");
                  
                }
                n.preventDefault();
               
            });
        },
       initSortby: function() {
            //sort by filter
            if (Shopify.queryParams.sort_by) {
                var sortby = Shopify.queryParams.sort_by;
                var sortbyText = e(".filter-sortby a[href='" + sortby + "']").text();
                e(".filter-sortby  button span").text(sortbyText);
                e(".filter-sortby li.active").removeClass("active");
                e(".filter-sortby a[href='" + sortby + "']").parent().addClass("active");
            }
        },
        sidebarMapPaging: function() {
            e(".pagination-custom a").click(function(n) {
                var page = e(this).attr("href").match(/page=\d+/g);
                if (page) {
                    Shopify.queryParams.page = parseInt(page[0].match(/\d+/g));
                    if (Shopify.queryParams.page) {
                        var newurl = t.sidebarCreateUrl();
                        t.isSidebarAjaxClick = true;
                        History.pushState({
                            param: Shopify.queryParams
                        }, newurl, newurl);
                        t.sidebarGetContent(newurl);
                        //go to top
                        e('body,html').animate({
                            scrollTop: 500
                        }, 600);
                    }
                }
                n.preventDefault();
            });
        },
          sidebarMapTagEvents: function() {
            if(jQuery( window ).width() < 992) {  
              jQuery(".collection_right .sidebar .widget > h4,.collection_left .sidebar .widget > h4,.blog-section .sidebar .widget > h4").addClass( "toggle" );
              jQuery(".collection_right .sidebar .widget,.collection_left .sidebar .widget,.blog-section .sidebar .widget").children(':nth-child(2)').css( 'display', 'none' );
              jQuery(".collection_right .sidebar .widget.active,.collection_left .sidebar .widget.active,.blog-section .sidebar .widget.active").children(':nth-child(2)').css( 'display', 'block' );
              jQuery(".collection_right .sidebar .widget > h4.toggle,.collection_left .sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").unbind("click");
              jQuery(".collection_right .sidebar .widget > h4.toggle,.collection_left .sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").on('click',function() {
                jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
              });
            }
            if(jQuery( window ).width() < 992) { 
              jQuery(".collection_right .sidebar-block .widget > h4,.collection_left .sidebar-block .widget > h4").addClass( "toggle" );
              jQuery(".collection_right .sidebar-block .widget,.collection_left .sidebar-block .widget ").children(':nth-child(2)').css( 'display', 'none' );
              jQuery(".collection_right .sidebar-block .widget.active,.collection_left .sidebar-block .widget.active").children(':nth-child(2)').css( 'display', 'block' );
              jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle").unbind("click");
              jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle").on('click',function() {
                jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
              }); 
            }
          	e('.sidebar-tag a:not(".clear"), .sidebar-tag label').click(function(n) {
              e(this).addClass('active');
                var currentTags = [];
                if (Shopify.queryParams.constraint) {
                    currentTags = Shopify.queryParams.constraint.split('+');
                }

                //one selection or multi selection
                if (!window.enable_sidebar_multiple_choice && !e(this).prev().is(":checked")) {
                    //remove other selection first                  
                    var otherTag = e(this).parents('.sidebar-tag').find("input:checked");
                    if (otherTag.length > 0) {
                        var tagName = otherTag.val();
                        if (tagName) {
                            var tagPos = currentTags.indexOf(tagName);
                            if (tagPos >= 0) {
                                //remove tag
                                currentTags.splice(tagPos, 1);
                            }
                        }
                    }
                }

                var tagName = e(this).prev().val();
                if (tagName) {
                    var tagPos = currentTags.indexOf(tagName);
                    if (tagPos >= 0) {
                        //tag already existed, remove tag
                        currentTags.splice(tagPos, 1);
                    } else {
                        //tag not existed
                        currentTags.push(tagName);
                    }
                }
                if (currentTags.length) {
                    Shopify.queryParams.constraint = currentTags.join('+');
                } else {
                    delete Shopify.queryParams.constraint;
                }
                t.sidebarAjaxClick();
                n.preventDefault();
            });
        },
       
        
      
        sidebarInitToggle: function() {
            if (e(".sidebar-tag").length > 0) {
                e(".sidebar-tag .widget span").click(function() {
                    var $title = e(this).parents('.widget');
                    if ($title.hasClass('click')) {
                        $title.removeClass('click');
                    } else {
                        $title.addClass('click');
                    }

                    e(this).parents(".sidebar-tag").find(".widget-content").slideToggle();
                });
            }
        },
       
       
        sidebarMapClearAll: function() {
            //clear all selection
            e('.refined-widgets a.clear-all').click(function(n) {
                delete Shopify.queryParams.constraint;
                delete Shopify.queryParams.q;
                t.sidebarAjaxClick();
                n.preventDefault();
            });
        },
        sidebarMapClear: function() {
            e(".sidebar-tag").each(function() {
                var sidebarTag = e(this);
                if (sidebarTag.find("input:checked").length > 0) {
                    //has active tag
                    sidebarTag.find(".clear").show().click(function(n) {                     
                        var currentTags = [];
                        if (Shopify.queryParams.constraint) {
                            currentTags = Shopify.queryParams.constraint.split('+');
                        }
                        sidebarTag.find("input:checked").each(function() {
                            var selectedTag = e(this);
                            var tagName = selectedTag.val();
                            if (tagName) {
                                var tagPos = currentTags.indexOf(tagName);
                                if (tagPos >= 0) {
                                    //remove tag
                                    currentTags.splice(tagPos, 1);
                                }
                            }
                        });
                        if (currentTags.length) {
                            Shopify.queryParams.constraint = currentTags.join('+');
                        } else {
                            delete Shopify.queryParams.constraint;
                        }
						t.sidebarAjaxClick();
                        n.preventDefault();
                    });
                }
            });
        },
        sidebarMapEvents: function() {
            t.sidebarMapTagEvents();
            t.sidebarMapView();            
            t.sidebarMapSorting();
          	t.sidebarMapShow();
        },
         reActivateSidebar: function() {
            e(".sidebar-tag .active").removeClass("active");
            e(".sidebar-tag input:checked").attr("checked", false);

            //view mode and show filter
            if (Shopify.queryParams.view) {
                e(".view-mode .active").removeClass("active");
                var view = Shopify.queryParams.view;
                if (view.indexOf("list") >= 0) {
                    e(".view-mode .list").addClass("active");
                    //paging
                    view = view.replace("list", "");
                } else {
                    e(".view-mode .grid").addClass("active");
                    }
                    e(".filter-show  button span").text(view);
                    e(".filter-show li.active").removeClass("active");
                    e(".filter-show a[href='" + view + "']").parent().addClass("active");
                }
                t.initSortby();
            },
            sidebarMapData: function(data) {
             
            var currentList = e(".col-main .products-grid-view");
           
            var productList = e(data).find(".col-main .products-grid-view");
            currentList.replaceWith(productList);
              
            //convert currency
            if (t.checkNeedToConvertCurrency()) {
                Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), 'span.money', 'money_format');
            }
               
            //replace refined
            e(".refined-widgets").replaceWith(e(data).find(".refined-widgets"));
            
            //replace tags
            e(".sidebar-block").replaceWith(e(data).find(".sidebar-block"));
                   	countDownIni('.flip-countdown'); 
          //replace paging
            if (e(".pagination-wrap").length > 0) {
                e(".pagination-wrap").replaceWith(e(data).find(".pagination-wrap"));
            } else {
                e(e(data).find(".pagination-wrap")).insertAfter(".col-main");
            }
               if (localStorage.getItem('display') == 'grid') {
                  jQuery('#grid-view').trigger('click');
               }else{
                  jQuery('#list-view').trigger('click');
               }   
            t.initInfiniteScrolling();
           if ($(".spr-badge").length > 0) {
                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
            }
           
          
        },
        sidebarCreateUrl: function(baseLink) {
            var newQuery = e.param(Shopify.queryParams).replace(/%2B/g, '+');
            if (baseLink) {
                location.href = baseLink + "?" + newQuery;
                if (newQuery != "")
                    return baseLink + "?" + newQuery;
                else
                    return baseLink;
            }
            return location.pathname + "?" + newQuery;
        },
        sidebarAjaxClick: function(baseLink) {
            delete Shopify.queryParams.page;
            var newurl = t.sidebarCreateUrl(baseLink);
            t.isSidebarAjaxClick = true;
            History.pushState({
                param: Shopify.queryParams
            }, newurl, newurl);
            t.sidebarGetContent(newurl);
        },
        sidebarGetContent: function(newurl) {
          //alert(newurl)
            $.ajax({
                type: 'get',
                url: newurl,
                beforeSend: function() {
                    t.showLoading();
                },
                success: function(data) {
                    t.sidebarMapData(data);
                    t.sidebarMapTagEvents();
                    //t.sidebarInitToggle();
                    t.sidebarMapClear();
                    t.sidebarMapClearAll();
                    t.hideLoading();
                    t.initQuickView();
                    t.initAddToCart();
                    t.initWishlist();
                    t.sidebarMapPaging()
                    countDownIni('.flip-countdown'); 
                    var $container = $(".shop_masonry");
                  if($container.length > 0){
                      $container.imagesLoaded( function() {
                      $container.masonry({ itemSelector : ".ms-item" , columnWidth: ".ms-item",percentPosition: true
                      }); 
                    });
                    t.initInfiniteScrolling();
                     
                    
                  }
                },
                error: function(xhr, text) {
                    t.hideLoading();
                    e('.loading-modal').hide();
                    e('.ajax-error-message').text($.parseJSON(xhr.responseText).description);
                    t.showModal('.ajax-error-modal');
                }
            });
        },
        sidebarParams: function() {
            Shopify.queryParams = {};
            //get after ?...=> Object {q: "Acme"} 
            if (location.search.length) {
                for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
                    aKeyValue = aCouples[i].split('=');
                    if (aKeyValue.length > 1) {
                        Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
                    }
                }
            }
        },
       initInfiniteScrolling: function() {
         var tt_is_loading = false
            e(".infinite-scrolling").length > 0 && e(".infinite-scrolling a.next").click(function(i) {
                i.preventDefault(), e(this).hasClass("disabled") || t.doInfiniteScrolling()
            })
             
           },
        doInfiniteScrolling: function() {
            var currentList = $('.col-main .products-grid-view');
            
            if (currentList) {
                var showMoreButton = $('.infinite-scrolling a.next').first();
                $.ajax({
                    type: 'GET',
                    url: showMoreButton.attr("href"),
                    beforeSend: function() {
                        t.showLoading();
                        $('.loading-modal').show();
                      tt_is_loading = true;
                    },
                    success: function(data) {
                        t.hideLoading();
                      var $container = $(".products-grid-view");
                        var products = $(data).find(".col-main .products-grid-view");
                        tt_is_loading = false;
                      //get link of Show more
                            if ($(data).find('.infinite-scrolling').length > 0) {
                                showMoreButton.attr('href', $(data).find('.infinite-scrolling a.next').attr('href'));
                            } else {
                                //no more products
                                showMoreButton.removeClass('next');
                                showMoreButton.hide();
                                showMoreButton.next().show();
                            }
                          
                        if (products.length) {
                               
                                  currentList.append(products.children());
                                 
                           
                            t.initQuickView();
                            t.initAddToCart();
                            t.initWishlist();
                             countDownIni('.flip-countdown'); 
                              if (localStorage.getItem('display') == 'grid') {
                                  jQuery('#grid-view').trigger('click');
                              }else{
                                  jQuery('#list-view').trigger('click');
                              }  
                            
                          
                            
                          	//currency
                            if (window.show_multiple_currencies && window.shop_currency != jQuery(".currencies li.active .currencies-a").val())
                            {
                                Currency.convertAll(window.shop_currency, jQuery('.currencies li.active .currencies-a').val(), "span.money", "money_format")
                            }
                          
                            t.initColorSwatchGrid();
                            //product review
                            if ($(".spr-badge").length > 0) {
                                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges();
                            }
                          
                        }
                      
                    },
                    error: function(xhr, text) {
                        t.hideLoading();
                        $('.loading-modal').hide();
                        $('.ajax-error-message').text($.parseJSON(xhr.responseText).description);
                        t.showModal('.ajax-error-modal');
                    },
                    dataType: "html"
                });
            }
        }
      
    }    
    
})(jQuery);