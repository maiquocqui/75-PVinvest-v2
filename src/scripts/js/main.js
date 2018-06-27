$(document).ready(function() {
    jQuery.scrollSpeed(150, 500);
    new WOW({
        offset: 100,
    }).init();
    // $('header').scrollToFixed({
    //     zIndex: 1000,
    // })
    $('[data-toggle="tooltip"]').tooltip()
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('hide');
        } else {
            $('header').removeClass('hide');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 500) {
            $('.up').addClass('active');
        } else {
            $('.up').removeClass('active');
        }
    });
    $('.btn-down').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 700);
        return false;
    });
    $('.up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });
    $(".counter").countimator({
        duration: 1000,
    });
    $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // MENU
    $('.language a').click(function() {
        $('.language a').removeClass('active');
        $(this).addClass('active');
    });
    $('.btn-showmenu').click(function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('open');
        $('.overlay').fadeToggle(500);
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.btn-showmenu').removeClass('active');
        $('.menu').removeClass('open');
    });
    // $('.btn-showsub').click(function() {
    //     $(this).siblings('.sub').slideToggle(300);
    //     $(this).siblings('.mega').slideToggle(300);
    // });
    // $('.searchtoggle').click(function() {
    //     $('.searchwrap').toggleClass('open');
    //     // $('.overlay').fadeIn(500);
    //     // $('html').css('overflow', 'hidden');
    // });
    // $('.btn-closesearch').click(function() {
    //     $('.searchwrap').removeClass('open');
    //     // $('.overlay').fadeOut(500);
    //     // $('html').css('overflow', 'auto');
    // });
    // END-MENU

    $('.btn-apply').click(function() {
        $('.apply-form').slideToggle(300);
    });
    $('#map').click(function() {
            $(this).find('iframe').addClass('active')
        })
        .mouseleave(function() {
            $(this).find('iframe').removeClass('active')
        });
    $('.addresslist .address').click(function() {
        $('.addresslist .address').removeClass('active');
        $(this).addClass('active');
    });

    // SLIDE

    $('.btn-spin').click(function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
    });

    $('.fly-menu a[href^="#"]').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 160
        }, 700);
        $('.fly-menu li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });
});

// REVOLUTION SLIDER
var tpj = jQuery;

var banner001;
tpj(document).ready(function() {
    if (tpj("#banner001").revolution == undefined) {
        revslider_showDoubleJqueryError("#banner001");
    } else {
        banner001 = tpj("#banner001").show().revolution({
            sliderType: "standard",
            sliderLayout: 'fullscreen',
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "on",
                onHoverStop: "on",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                arrows: {
                    style: "dione",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '<div class="tp-arr-imgwrapper"><div class="tp-arr-imgholder"></div><div class="project-nav">{{title}}</div></div>',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 800,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 5,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{param1}}</span>'
                }
            },
            responsiveLevels: [1024, 991, 767, 543],
            visibilityLevels: [1024, 991, 767, 543],
            gridwidth: [1600, 1024, 768, 575],
            gridheight: [580, 400, 300, 200],
            lazyType: "none",
            // parallax: {
            //     type: "scroll",
            //     origo: "slidercenter",
            //     speed: 50,
            //     levels: [5000]
            // },
            shadow: 0,
            spinner: "off",
            stopLoop: "off",
            shuffle: "off",
            autoHeight: "off",
            fullScreenAutoWidth: "off",
            fullScreenAlignForce: "off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar: "off",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                nextSlideOnWindowFocus: "off",
                disableFocusListener: false
            }
        });
    }
})