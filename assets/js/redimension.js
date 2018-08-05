var navbarHeight = $('#barraNavegacion').outerHeight(true);

$(document).ready(function(){

    console.log('Redimensión al cargar');
    $('div.jumbotron.carousel-hero').css('height', $(window).height() - navbarHeight);
});

$(window).resize(function(){ 

    console.log('Redimensión al cambiar ventana');
    $('div.jumbotron.carousel-hero').css('height', $(window).height() - navbarHeight);
});

