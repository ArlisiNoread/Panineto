var resta-compensativa = 320;

$(document).ready(function(){
    console.log('Redimensión al cargar');
    $('div.jumbotron.carousel-hero').css('padding-top', $(window).height() - resta-compensativa);
    
    console.log($(window).height());
});

$(window).resize(function(){    
    console.log('Redimensión al cambiar ventana');
    $('div.jumbotron.carousel-hero').css('padding-top', $(window).height() - resta compensativa);
});

