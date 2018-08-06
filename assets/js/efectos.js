/* Efecto Logo Panineto */


$(document).ready(function(){
    
    if($(window).width() < 990) {
        console.log("Logo Estático");
        $('#logo-id').css({
            'width' :'58px',
            'left' : '155px',
            display:'block'
        });
    } 
});

$(window).resize(function(){ 

    if($(window).width() < 990) {
        console.log("Logo Estático < 990");
        $('#logo-id').css({
            'width' :'58px',
            'left' : '155px',
            display:'block'
        });
    }  else  {
        console.log("Logo Estático >= 990");
        $('#logo-id').css({
            'width' :'58px', 
            'left' : '48%',
            '-webkit-transition' : 'all 2s', /* Safari */
            'transition' : 'all 2s',
            display:'block'
        });
        
    }
    
    if( $(this).scrollTop() > 10 && $(window).width() >= 990) {
        console.log("Logo Adaptado");
        $('#logo-id').css({
            'width' :'58px', 
            'left' : '48%',
            '-webkit-transition' : 'all 2s', /* Safari */
            'transition' : 'all 2s',
            display:'block'
        });
    } 
    
    if( $(this).scrollTop() <= 10 && $(window).width() >= 990) {
        console.log("Logo Adaptado Minimizar");
        $('#logo-id').css({
            'width' :'130px', 
            'left' : '45%',
            '-webkit-transition' : 'all 2s', /* Safari */
            'transition' : 'all 2s',
            display:'block'
        });
    } 
    
});


$(document).scroll(function() {
    if( $(this).scrollTop() > 10 && $(window).width() >= 990) {
        console.log("Logo Adaptado");
        $('#logo-id').css({
            'width' :'58px', 
            'left' : '48%',
            '-webkit-transition' : 'all 2s', /* Safari */
            'transition' : 'all 2s',
            display:'block'
        });
    } 
      
    if( $(this).scrollTop() <= 10 && $(window).width() >= 990) {
        console.log("Logo Adaptado Minimizar");
        $('#logo-id').css({
            'width' :'130px',
            'left' : '45%',
            '-webkit-transition' : 'all 2s', /* Safari */
            'transition' : 'all 2s',
            display:'block'
        });
    } 
    
    
});