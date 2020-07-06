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
          $('.navbar-wrapper').attr('style' , 'background-color: white');
        } else {
            $('.navbar-wrapper').attr('style' , 'background-color: none');
        }
    });
    if ($(".element-wrapper.advantages-wrapper") && $( window ).width() < 466) {
        $('.element.advantages').flickity({
            prevNextButtons: false
        });
    }
}