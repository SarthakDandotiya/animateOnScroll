var controller = new ScrollMagic.Controller();

$(".project").each(function() {
	var picOverlay = $(this).find(".overlay");
	var projectInfo = $(this).find(".project-info");
	var smallTittle = $(this).find(".small-title");
	var projectLink = $(this).find(".project-link");
	var titleh4 = $(this).find("h4");

	var animateIn = new TimelineMax();

	animateIn
		.fromTo(
			picOverlay,
			2,
			{ skewX: 30, scale: 1.5 },
			{
				skewX: 0,
				xPercent: 100,
				transformOrigin: "0% 100%",
				ease: Power4.easeOut
			}
		)

		.from(
			projectInfo,
			1,
			{ scaleY: 0, transformOrigin: "bottom left" },
			"-=1.5"
		)

		.from(
			smallTittle,
			0.5,
			{ autoAlpha: 0, y: 30, ease: Power4.easeOut },
			"-=0.8"
		)

		.from(projectLink, 0.4, { autoAlpha: 0, ease: Power4.easeOut }, "-=0.2")
		.from(
			titleh4,
			0.7,
			{ autoAlpha: 0, y: 30, ease: Power4.easeOut },
			"-=0.8"
		);

	// Make a scrollMagic Scene

	var scene = new ScrollMagic.Scene({
		triggerElement: this
	})
		.addIndicators()
		.setTween(animateIn)
		.addTo(controller);
});
