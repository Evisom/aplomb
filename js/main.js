window.onload = function () {
    $("#navbarBars").click(()=> {
        if ($(".navbar").attr("class") == "navbar") {
            $(".navbar").addClass("navbar-active")
        } else {
            $(".navbar").removeClass("navbar-active")
            $(".navbar-menu-spoiler-wrapper").removeClass("active")
        }
    })
    jQuery('.navbar-menu-spoiler-title').click(function(){
        $(this).parents('.navbar-menu-spoiler-wrapper').toggleClass("active").find('.spoiler-body').slideToggle();
    })
    jQuery('.footer-r1-spoiler-title').click(function(){
        $(this).parents('.footer-r1-spoiler').toggleClass("active").find('.spoiler-body').slideToggle();
    })
}