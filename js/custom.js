// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/slide-1.jpg", 
	 		 "images/slide-2.jpg",
			 "images/slide-3.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})