//var fixed = false;
  $(document).scroll(function() {
    if( $(this).scrollTop() > 10 ) {
        console.log("FUNCIONA");
        $('#logo-id').css({
            'width' :'55px', 
            '-webkit-transition' : 'width 2s', /* Safari */
            'transition' : 'width 2s',
            display:'block'
        });
    } 
      
    if( $(this).scrollTop() <= 10 ) {
        console.log("FUNCIONA");
        $('#logo-id').css({
            'width' :'130px', 
            '-webkit-transition' : 'width 2s', /* Safari */
            'transition' : 'width 2s',
            display:'block'
        });
    } 
});