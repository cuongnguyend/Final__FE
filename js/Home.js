$(document).ready(function() {

    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    // back top top

    $('.openNav').click(function() {
        $('.navv').show();
        $('.openNav').hide();
        $('.closeNav').show();
    });
    $('.closeNav').click(function() {
        $('.navv').hide();
        $('.closeNav').hide();
        $('.openNav').show();
    });

    // scrol next 
    $('.scroll_next').click(function() {

        var fuller = $(this).closest('header').next();

        $('html, body').animate({
            scrollTop: fuller.offset().top
        }, 800);

    });
    // scrol next 

    // var d = new Date();

    // var month = d.getMonth() + 1;
    // var day = d.getDate();

    // $('.date').text() = d.getFullYear() + '/' +
    //     (month < 10 ? '0' : '') + month + '/' +
    //     (day < 10 ? '0' : '') + day;
    $(window).resize(function() {
            var width = $(window).width();
            if (width < 992) {
                $('.containner').removeClass('container');
            }
        })
        .resize();
    $('.opennav').click(function() {
        $('.menu_responsive').show();
        $('.opennav').hide();
    });
    $('.closenav').click(function() {
        $('.opennav').show();
        $('.menu_responsive').hide();
    });

    // $(document).mouseup(function(e) {
    //     var container = $(".menu_responsive");
    //     var open = $('.opennav');
    //     if (!container.is(e.target) && !open.is(e.target) && container.has(e.target).length === 0) {
    //         container.hide();
    //         $('.overlay').hide();
    //         $('.opennav').show();
    //     }
    // });

});