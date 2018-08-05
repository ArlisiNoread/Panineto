var restaCompensativa = 320;

$(document).ready(function(){

    console.log('Redimensión al cargar');
    $('div.jumbotron.carousel-hero').css('padding-top', $(window).height() - restaCompensativa);
    
    //console.log($(window).height());
});

$(window).resize(function(){ 

    console.log('Redimensión al cambiar ventana');
    $('div.jumbotron.carousel-hero').css('padding-top', $(window).height() - restaCompensativa);
});

