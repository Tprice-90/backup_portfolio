$(document).ready(function(){
    $("#mobilenav").click(function(){
    $("#nav").stop().slideToggle("slow");
    });
    
});


$(window).resize(function(){
    if ($(this).width() > 800) {
        $("#nav").css("display","block");
        $("#phone").css("display", "block");
        $("#mobile_phone").css("display", "none");
    } else {
        $("#nav").css("display","none");
        $("#phone").css("display", "none");
        $("#mobile_phone").css("display", "block");
    }
});