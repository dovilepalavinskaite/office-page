
// Background smoothly changes when scrolled: 

$(document).ready(function () { 
	$(window).scroll(function () { 
		if ($(document).scrollTop() > 100) 
			{ $(".header").addClass("scrolled"); 
		} else { 
			$(".header").removeClass("scrolled"); 
		} 
	}); 


// Burger menu functionality:

const navSlider = () => {
	const nav = document.querySelector('.nav-links');
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

	// Animation:
		navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
		}
	});
	// Burger lines animation:
	burger.classList.toggle('toggle');
	});
	
}

navSlider();


// Content appears when scrooled:

window.onload = function() {
	const effect = document.querySelector('.effect');

	window.addEventListener('scroll', scrollEffect);

	function scrollEffect () {
		if(window.scrollY >= 1000) {
			effect.style.opacity = '1';
			effect.style.transform = 'translateX(0px)';
			effect.style.transition = '1s ease-in-out';
		}
		else {
			effect.style.opacity = '0';
			effect.style.transform = 'translateX(-50px)';
		}
	}
	scrollEffect();
}


});
