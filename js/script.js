$(document).ready(function(){


    // try center everything like it should ...
    $(window).resize(function(){
        $('.comingsoon').css({
            position:'absolute',
            left: ($(window).width()
                - $('.comingsoon').outerWidth())/2,
            top: ($(window).height()
                - $('.comingsoon').outerHeight())/2
        });

    });
    $(window).resize();

    

});


















