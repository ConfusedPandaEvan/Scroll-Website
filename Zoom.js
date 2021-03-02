$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
    width: (100 + scroll/5) +"%"
    })
})