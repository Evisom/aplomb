window.onload = function () {
    $("#navbarBars").click(()=> {
        if ($(".navbar").attr("class") == "navbar") {
            $(".navbar").addClass("navbar-active")
        } else {
            $(".navbar").removeClass("navbar-active")
            $(".navbar-menu-spoiler-wrapper").removeClass("active")
        }
    })
    $('.navbar-menu-spoiler-title').click(function(){
        $(this).parents('.navbar-menu-spoiler-wrapper').toggleClass("active").find('.spoiler-body').slideToggle();
    })
    $('.footer-r1-spoiler-title').click(function(){
        $(this).parents('.footer-r1-spoiler').toggleClass("active").find('.spoiler-body').slideToggle();
    })
    $(window).scroll(function(){
        var scrollPos = $(document).scrollTop();
        if (scrollPos > 5) {
          $('.navbar-wrapper').attr('style' , 'background-color: white; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);');
        } else {
            $('.navbar-wrapper').attr('style' , 'background-color: none; box-shadow: none');
        }
    });
    if ($(".element-wrapper.advantages-wrapper") && $( window ).width() < 466) {
        $('.element.advantages').flickity({
            prevNextButtons: false
        });
    }
    $('.main-block-lessons-slider-container').flickity({
        prevNextButtons: false
    });
    $('.coming-courses-slider').flickity({
        prevNextButtons: false,
        wrapAround: true
    });
    $('.lessons-pricing-slider').flickity({
        prevNextButtons: false,
        cellSelector: ".lessons-pricing-slider-element",
        pageDots: false,
        cellAlign: 'left'
    });
    if ( $(window).width() < 465 ) {
        $('.lessons-pricing-slider').flickity('destroy')
    }
    $('.reviews-slider-container').flickity({
        prevNextButtons: false,
        cellAlign: 'left',
        pageDots: false,
        imagesLoaded: true,
        // draggable: false,
        cellSelector: '.reviews-slider-container-element',
        contain: false
    });
    $('.reviews-slider-container').on( 'change.flickity', function( event, index ) {
        $('.reviews-slider-container').flickity('resize')
    })

    $("#ReviewsNext").click( () => {
        $('.reviews-slider-container').flickity("next")
        // $('.reviews-slider-container').flickity('reposition')
        $('.reviews-slider-container').flickity('resize')


    })
    $("#ReviewsPrev").click( () => {
        $('.reviews-slider-container').flickity("previous")
        $('.reviews-slider-container').flickity('resize')
    })
    $( function() {
        $( "#tabs" ).tabs();
    } );
}