$( document ).ready(function() {

	//image fade out scroll


	//project title fade scroll
	$(window).scroll(function() {    
        var scroll = $(window).scrollTop();
            $('.project-title, .slogan').css({'opacity':(( 180-scroll )/100)+0.1});
    });

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// // When the user clicks the button, open the modal 
	// btn.onclick = function() {
	//     modal.style.display = "block";
	// }

	$("#myBtn").click(function() {
    	$(".modal").fadeIn( 200 );
    });

	$(".link").click(function() {
    	$(".modal").fadeOut( 200 );
    });

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	



});