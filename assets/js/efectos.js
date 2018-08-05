/* Efecto Logo Panineto */


$(document).ready(function(){
    
    if($(window).width() < 768) {
        console.log("Logo Estático");
        $('#logo-id').css({
            'width' :'58px',
            'left' : '150px',
            display:'block'
        });
    } 
});

$(window).resize(function(){ 

    if($(window).width() < 768) {
        console.log("Logo Estático < 768");
        $('#logo-id').css({
            'width' :'58px',
            'left' : '150px',
            display:'block'
        });
    }  else  {
        console.log("Logo Estático >= 768");
        $('#logo-id').css({
            'width' :'58px', 
            'left' : '45%',
            '-webkit-transition' : 'width 2s', /* Safari */
            'transition' : 'width 2s',
            display:'block'
        });
        
    }
    
    if( $(this).scrollTop() > 10 && $(window).width() >= 768) {
        console.log("Logo Adaptado");
        $('#logo-id').css({
            'width' :'58px', 
            'left' : '45%',
            '-webkit-transition' : 'width 2s', /* Safari */
            'transition' : 'width 2s',
            display:'block'
        });
    } 
    
    if( $(this).scrollTop() <= 10 && $(window).width() >= 768) {
        console.log("Logo Adaptado Minimizar");
        $('#logo-id').css({
            'width' :'130px', 
            '-webkit-transition' : 'width 2s', /* Safari */
            'transition' : 'width 2s',
            display:'block'
        });
    } 
    
});


$(document).scroll(function() {
    if( $(this).scrollTop() > 10 && $(window).width() >= 768) {
        console.log("Logo Adaptado");
        $('#logo-id').css({
            'width' :'58px', 
            'left' : '45%',
            '-webkit-transition' : 'width 2s', /* Safari */
            'transition' : 'width 2s',
            display:'block'
        });
    } 
      
    if( $(this).scrollTop() <= 10 && $(window).width() >= 768) {
        console.log("Logo Adaptado Minimizar");
        $('#logo-id').css({
            'width' :'130px', 
            '-webkit-transition' : 'width 2s', /* Safari */
            'transition' : 'width 2s',
            display:'block'
        });
    } 
    
    
});