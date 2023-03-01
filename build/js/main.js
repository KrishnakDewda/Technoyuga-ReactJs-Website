// var TxtType = function(el, toRotate, period) {
//   this.toRotate = toRotate;
//   this.el = el;
//   this.loopNum = 0;
//   this.period = parseInt(period, 10) || 500;
//   this.txt = '';
//   this.tick();
//   this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//   var i = this.loopNum % this.toRotate.length;
//   var fullTxt = this.toRotate[i];

//   if (this.isDeleting) {
//   this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//   this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//   var that = this;
//   var delta = 200 - Math.random() * 100;

//   if (this.isDeleting) { delta /= 2; }

//   if (!this.isDeleting && this.txt === fullTxt) {
//   delta = this.period;
//   this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === '') {
//   this.isDeleting = false;
//   this.loopNum++;
//   delta = 500;
//   }

//   setTimeout(function() {
//   that.tick();
//   }, delta);
// };

// window.onload = function() {
//   var elements = document.getElementsByClassName('typewrite');
//   for (var i=0; i<elements.length; i++) {
//       var toRotate = elements[i].getAttribute('data-type');
//       var period = elements[i].getAttribute('data-period');
//       if (toRotate) {
//         new TxtType(elements[i], JSON.parse(toRotate), period);
//       }
//   }

//   var css = document.createElement("style");
//   css.type = "text/css";
//   css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//   document.body.appendChild(css);
// };



const text_arr = ["Innovation", "Mobile Apps", "Web Apps", "emerging tech", "Client Success"];

function TypeWriter() {
    let i = 0;
    let text_elem = document.getElementById("typewriter_text");
    let word = text_arr[i].split("");
    let delword = text_arr[i].split("");

    let type = function () {
        if (word.length > 0) {

            //  text_elem.innerHTML += word.shift ();
        } else {

            delword.pop();
            text_elem.innerHTML = delword.join("");

            if (delword.length == 0) {

                i = (i + 1) % text_arr.length;
                word = text_arr[i].split("");
                delword = text_arr[i].split("");
            }
        }
    }

    setInterval(type, 180);
}

TypeWriter();

if ($(window).width() < 768) {
    $('#process-content').addClass('owl-carousel process-carousel');
    $('#process-content').removeClass('tab-content');
    $('.process-content').removeClass('tab-pane fade');

    $('.outsource-wrapper').addClass('owl-carousel outsource-carousel');

    $('.ios-services').addClass('owl-carousel ios-service-carousel');

    $('.flutter-client ul').addClass('owl-carousel flutter-client-carousel');
}


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#header").addClass("header-bg");
    } else {
        $("#header").removeClass("header-bg");
    }
});

!(function ($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight();
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    // if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('#header .container-fluid').append($mobile_nav);
        $('#header .container-fluid').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('#header .container-fluid').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            console.log('clicked');
            $('#header .container-fluid').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    // } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    //     $(".mobile-nav, .mobile-nav-toggle").hide();
    // }



    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            900: {
                items: 5
            }
        }
    });

    // Portfoloio carousel (uses the Owl Carousel library)
    $(".portfolio-carousel").owlCarousel({
        autoplay: false,
        nav: true,
        dots: false,
        pullDrag: false,
        mouseDrag: false,
        margin: 10,
        loop: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    // Process carousel (uses the Owl Carousel library)
    $(".process-carousel").owlCarousel({
        autoplay: false,
        nav: true,
        dots: false,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    // Outsource carousel (uses the Owl Carousel library)
    $(".outsource-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: false,
        margin: 10,
        loop: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 2
            },
            992: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });

    // ios-service carousel (uses the Owl Carousel library)
    $(".ios-service-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: true,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    // ios-service carousel (uses the Owl Carousel library)
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        margin: 10,
        loop: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    // flutter-client carousel (uses the Owl Carousel library)
    $(".flutter-client-carousel").owlCarousel({
        autoplay: true,
        nav: false,
        dots: false,
        margin: 10,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });

    // Initi AOS
    AOS.init({
        duration: 800,
        easing: "ease-in-out"
    });

    setTimeout(function () {
        $("#afterpopup").modal('show');
    }, 60000);


    // Stories Slider Start

    $('.stories-slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        pauseOnHover: false,
        // autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.stories-slider-tabs'
    });
    $('.stories-slider-tabs').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        asNavFor: '.stories-slider-list',
        dots: false,
        arrows: false,
        centerMode: false,
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },]
    });

    // Stories Slider End

    // Testimonial Slider Start
    $('.testimonial-slider-list').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 2000,
    });
    // Testimonial Slider End

    // Country Code Start
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/img";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };

    $(".js-example-templating").select2({
        templateResult: formatState
    });
    // Country Code End

    // Startup Slider Start
    $('.startup-slider').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 300,
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        ]
    });
    // startup Slider End

    Scrollbar.initAll();
    // $("#mobile-number").intlTelInput();
})(jQuery);