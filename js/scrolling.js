$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    var width = $(window).width();
    if (scrollTop <= height) {
        $('#scroll-e1').css({
            'opacity': ((height - scrollTop) / height)
        });
        $('#scroll-e2').css({
            'opacity': 0
        });
    } else if ((scrollTop) <= (height*2)) {
        $('#scroll-e1').css({
            'opacity': 0
        });
        $('#scroll-e2').css({
            'opacity': ((scrollTop - height) / height)
        });
    } else if ((scrollTop) <= (height*3)) {
        $('#scroll-e2').css({
            'opacity': 1
        });
        $('#scroll-e3').css({
            'opacity': ((scrollTop - height) / height) - 1
        });
    } else if ((scrollTop) <= (height*4)) {
        $('#scroll-e3').css({
            'opacity': 1
        });
        $('#scroll-e4').css({
            'opacity': ((scrollTop - height) / height) - 2
        });
    } else if ((scrollTop) <= (height*5)) {
        $('#scroll-e4').css({
            'opacity': 1
        });
        $('#scroll-e4').children().text("Daniel was born here, in South Korea.");
    } else if ((scrollTop) <= (height*6)) {
        $('#scroll-e3').css({
            'left': "50%"
        });
        $('#scroll-e4').children().text("But as his age turned double digits...");
    } else if ((scrollTop) <= (height*7)) {
        $('#scroll-e3').css({
            'left': 100 * (((height) - (scrollTop - (height*6)))/height) - 50 + "%"
        });
    } else if ((scrollTop) <= (height*9)) {
        $('#scroll-e6').css({
            'right': (100 * (((height) - (scrollTop - (height*8)))/height) - 50) + "%"
        });
    } else if ((scrollTop) <= (height*10)) {
        $('#scroll-e5').css({
            'left': 100 * (((height) - (scrollTop - (height*9)))/height) + 50 + "%"
        });
    } else if ((scrollTop) <= (height*11)) {
        $('#scroll-e5').css({
            'left': "50%"
        });
        $('#scroll-e4').children().text("He immigrated to Canada.");
    } else if ((scrollTop) <= (height*12)) {
        $('#scroll-e7').css({
            'opacity': ((scrollTop - height) / height) - 10
        });
        // console.log(((height - scrollTop) / height) -10)
        // console.log(height - scrollTop)
    }
});