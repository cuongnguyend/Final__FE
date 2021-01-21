$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('#toTopBtn').show("slow");
        } else {
            $('#toTopBtn').hide("slow");
        }
    });
    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    // back top top

    $('.opennav').click(function() {
        $('.menu_responsive ').animate({ width: '100%' });
        $('.opennav').hide();
    });
    $('.closenav').click(function() {
        $('.menu_responsive').animate({ width: '0' });
        $('.opennav').show(100);
    });

    // scrol next 
    $('.scroll_next').click(function() {

        var fuller = $(this).closest('header').next();

        $('html, body').animate({
            scrollTop: fuller.offset().top
        }, 800);

    });
    // scrol next 

    $(window).resize(function() {
            var width = $(window).width();
            if (width < 992) {
                $('.containner').removeClass('container');
            }
        })
        .resize();

    const navMenu = $('#menu_responsive'),
        toggleMenu = $('#opennav'),
        closeMenu = $('#closenav')


    toggleMenu.click(function() {
        navMenu.toggleClass("show", "fast");
    });
    closeMenu.click(function() {
        navMenu.removeClass("show");
    });

});