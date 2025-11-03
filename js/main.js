// particle js initial

//Contact PHP bar
	// ajax contact form
	$(function () {
		new WOW().init();
		var form = $("#contact-form");
		var formMessages = $(".form-message");
		$(form).submit(function (e) {
			e.preventDefault();
			var formData = $(form).serialize();
			$.ajax({
				type: "POST",
				url: $(form).attr("action"),
				data: formData,
			})
				.done(function (response) {
					$(formMessages).removeClass("error");
					$(formMessages).addClass("success");
					$(formMessages).text(response);
					$("#contact-form input, #contact-form textarea").val("");
				})
				.fail(function (data) {
					$(formMessages).removeClass("success");
					$(formMessages).addClass("error");
					if (data.responseText !== "") {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							"Oops! An error occured and your message could not be sent."
						);
					}
				});
		});
	});
	
	$(function () {
		var form = $("#subscribes");
		var formMessages = $(".success-alert");
		$(form).submit(function (e) {
			e.preventDefault();
			var formData = $(form).serialize();
			$.ajax({
				type: "POST",
				url: $(form).attr("action"),
				data: formData,
			})
				.done(function (response) {
					$(formMessages).removeClass("error");
					$(formMessages).addClass("success");
					$(formMessages).text(response);
					$("#subscribes input").val("");
				})
				.fail(function (data) {
					$(formMessages).removeClass("success");
					$(formMessages).addClass("error");
					if (data.responseText !== "") {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text(
							"Oops! An error occured and your message could not be sent."
						);
					}
				});
		});
	});
	//Contact PHP bar

particlesJS("particles-js", {
	particles: {
		number: {
			value: 400,
			density: {
				enable: true,
				value_area: 1362.9002517356944,
			},
		},
		color: {
			value: "#3dc467",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 12,
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.1683582663908799,
			random: true,
			anim: {
				enable: true,
				speed: 5,
				opacity_min: 0.5359709601188878,
				sync: true,
			},
		},
		size: {
			value: 5,
			random: true,
			anim: {
				enable: true,
				speed: 0,
				size_min: 1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 100,
			color: "#3dc467",
			opacity: 0.5,
			width: 2,
		},
		move: {
			enable: true,
			speed: 2,
			direction: "bottom-left",
			random: true,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: true,
				rotateX: 400.8530152163807,
				rotateY: 801.7060304327614,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: false,
				mode: "repulse",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 308.58934067451116,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
});
particlesJS("particles-js-2", {
	particles: {
		number: {
			value: 400,
			density: {
				enable: true,
				value_area: 1362.9002517356944,
			},
		},
		color: {
			value: "#3dc467",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 12,
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.1683582663908799,
			random: true,
			anim: {
				enable: true,
				speed: 5,
				opacity_min: 0.5359709601188878,
				sync: true,
			},
		},
		size: {
			value: 5,
			random: true,
			anim: {
				enable: true,
				speed: 0,
				size_min: 1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 100,
			color: "#3dc467",
			opacity: 0.5,
			width: 2,
		},
		move: {
			enable: true,
			speed: 2,
			direction: "bottom-left",
			random: true,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: true,
				rotateX: 400.8530152163807,
				rotateY: 801.7060304327614,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: false,
				mode: "repulse",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 308.58934067451116,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
});
particlesJS("particles-js-3", {
	particles: {
		number: {
			value: 400,
			density: {
				enable: true,
				value_area: 1362.9002517356944,
			},
		},
		color: {
			value: "#3dc467",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 12,
			},
			image: {
				src: "img/github.svg",
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.1683582663908799,
			random: true,
			anim: {
				enable: true,
				speed: 5,
				opacity_min: 0.5359709601188878,
				sync: true,
			},
		},
		size: {
			value: 5,
			random: true,
			anim: {
				enable: true,
				speed: 0,
				size_min: 1,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 100,
			color: "#3dc467",
			opacity: 0.5,
			width: 2,
		},
		move: {
			enable: true,
			speed: 2,
			direction: "bottom-left",
			random: true,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: true,
				rotateX: 400.8530152163807,
				rotateY: 801.7060304327614,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: false,
				mode: "repulse",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 308.58934067451116,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
});

// lightcase
$("a[data-rel^=lightcase]").lightcase();

jQuery(document).ready(function ($) {
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
		offset: 70,
		beginAt: 100,
		formatter: function (n) {
			return n.replace(/,/g, ".");
		},
	});

	

	//skill bar
	$(window).scroll(function () {
		var hT = $("#skill-content").offset().top,
			hH = $("#skill-content").outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
		if (wS > hT + hH - 1.4 * wH) {
			jQuery(document).ready(function () {
				jQuery(".skillbar-container").each(function () {
					jQuery(this)
						.find(".skills")
						.animate(
							{
								width: jQuery(this).attr("data-percent"),
							},
							5000
						); // 5 seconds
				});
			});
		}
	});

	// // Add smooth scrolling to all links
	$(".menu li a").on("click", function () {
		// Make sure this.hash has a value before overriding default behavior

		if (this.hash !== "") {
			// Store hash
			var hash = this.hash;
			$("#toogle-menu").prop("checked", false);

			// Using jQuery's animate() method to add smooth page scroll The optional number
			// (800) specifies the number of milliseconds it takes to scroll to the
			// specified area
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				800,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});
});

//testimonial slider
var swiper = new Swiper(".testi-wrapper", {
	pagination: {
		el: ".testi-pagination",
		dynamicBullets: true,
	},
});

// add current class in the menu on active section
let mainNavLinks = document.querySelectorAll(".menu .menu-item a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];
window.addEventListener("scroll", (event) => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach((link) => {
		let section = document.querySelector(link.hash);

		if (
			section.offsetTop <= fromTop &&
			section.offsetTop + section.offsetHeight > fromTop
		) {
			link.classList.add("current");
		} else {
			link.classList.remove("current");
		}
	});
});

  
