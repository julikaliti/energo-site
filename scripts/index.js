$(document).ready(function() {
	
	/*=============== Slideshow ======================*/
	var images = new Array('./images/slide01.jpg', './images/slide02.jpg', './images/slide03.jpg');
	var nextImage = 0;
		
	function slideshowFadeIn() {
    $('.slideshow').prepend($('<img class="slideshowImage" src="' + images[nextImage++] + '" style="display:none">').fadeIn(1000, function(){setTimeout(slideshow, 5000);}));
    if(nextImage >= images.length) {
        nextImage = 0;
		}
	}
	function slideshow() {
    if($('.slideshowImage').length != 0) {
        $('.slideshowImage').fadeOut(1000, function(){slideshowFadeIn(); $(this).remove()});
    } else {
        slideshowFadeIn();
    }
	}
	slideshow();

	/*================= Navigation =====================*/
  var navCheck = 'hide';
	function responsiveNav() {
		if (navCheck === 'hide')  {
			$("#myMainNav").addClass("responsive");
			$(".curtain").css("height", "100%");
			navCheck = 'show';
		} else {
			$("#myMainNav").removeClass("responsive");
			$(".curtain").css("height", "95%");

			navCheck = 'hide';
		}
	}									
	$("#iconn").click(function(){
    responsiveNav();
  });
	
	/*================== Date for Copywrite ===================*/
	 function dateCopyright() {
		 var d = new Date();
		 var year = d.getFullYear();
		 $(".copyright").prepend("<span>&#169 " + year + "</span>");
	 }
	 dateCopyright();
	
});

