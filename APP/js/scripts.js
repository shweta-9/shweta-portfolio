$( document ).ready(function() {

	//image fade out scroll


	//project title fade scroll
	$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            $('.project-title, .slogan, .page-title').css({'opacity':(( 300-scroll )/100)+0.1});
    });

	//element fade in use class = "hidden"
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hidden').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
            	$(this).animate({'opacity':'1'},900);
                    
            }
            
        }); 
    
    });
 
});
