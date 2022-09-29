$(document).ready(function () {
    $(".hover").mouseover(function() {
        $(this).children(".a").hide();
        $(this).children(".b").show();
    }).mouseout(function() {
        $(this).children(".b").hide();
        $(this).children(".a").show();
    });
    $(".btn_menu").click(function() {
        $(".nav").toggleClass("open");
    });
    $(".nav").click(function() {
        $(this).removeClass("open");
    })
    $("a.btn_top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({scrollTop:0}, 800);
    });
    
})
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 300) {
      $("a.btn_top").fadeIn();
    } else {
      $("a.btn_top").fadeOut();
    }
});