
$(document).ready(function () { 
	$(window).scroll(function () { 
		if ($(document).scrollTop() > 100) 
			{ $(".header").addClass("scrolled"); 
		} else { 
			$(".header").removeClass("scrolled"); 
		} 
	}); 
});