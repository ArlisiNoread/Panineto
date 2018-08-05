var resta-compensativa = 320;

$(document).ready(function(){
    102
    $('div.jumbotron.carousel-hero').css('padding-top', $(window).height() - resta-compensativa);
    
    console.log($(window).height());
});

$(window).resize(function(){    
    $('div.jumbotron.carousel-hero').css('padding-top', $(window).height() - resta compensativa);
});

