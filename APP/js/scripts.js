$( document ).ready(function() {
	
	//menu animations
	$(".menulist").hover(function(){
	    $(this).addClass("animated infinite headShake");
	    }, function(){
	    $(this).removeClass("animated infinite headShake");
	})
	//image fade out scroll
	$(window).on("load",function() {
  		$(window).scroll(function() {
    		$(".hidden").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(300,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(300,0);}
      }
	    });
	  }); $(window).scroll(); 
	  //invoke scroll-handler on page-load
	});

	//project title fade scroll
	$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            $('.project-title, .slogan').css({'opacity':(( 180-scroll )/100)+0.1});
    });


	// $(".skillname").hover(function(){
	//     $(".skillsets").show("slow");
	//     }, function(){
	//     $(".skillsets").hide("slow");
	// })

	// $(".image-wrapper").mouseenter(function() {
	// 	$(this).toggleClass("deactive");
	// });


	// thumbnail hover
	// $('.thumb').on({
	//     mouseenter: function () {
	//         $(".infobox").show();

	//     },
	//     mouseleave: function () {
	//         $(".thumb").show();
	//     }
	// });

	// $('.proj').hover(function(){
	// 	$('.infobox').fadeIn('slow');
	// });


	// $('.thumb').hover(function(){
	// 	$('.infobox').fadeToggle('slow');
	// 	$('.infobox').addClass('.activeState');
	// });


	//image fade in scroll
	// $(window).scroll(function(){
	// 	$('.hidden').each(function(i){
	// 		var bottom_of_object = $(this).offset().top + $(this).outerHeight();
	// 		var bottom_of_window = $(window).scrollTop() + $(window).height();
	// 		if (bottom_of_window > bottom_of_object) {
	// 			$(this).animate({'opacity':'1'},500);
	// 		}
	// 	})
	// });




});