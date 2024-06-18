// alert("testing");
$(function(){
    $('.navbar_toggleBtn').click(function(){
        $('.navbar_menu').toggle("active");
    })

    $(window).resize(function(){
        if(parseInt ($('nav').css('width')) > 768){
            $('.navbar_menu').css('display', 'flex');
        }
    })
});

