/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var imgCount = $("img").length, currentImgCount = 0;

  $(document).ready(function () {
      $("img").show(300);
      $(".preloadBG").each(function () {
          var t, n, r = $(this),
          i = r.css("background-image");
          i && (t = i.replace(/(^url\()|(\)$|[\"\'])/g, ""),
          n = new Image, n.src = t, n.complete && $(n).trigger("load"))
      })
  });
  $("img").load(function () {
      currentImgCount++;
      currentImgCount == imgCount && setTimeout(function () {
          /mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () { window.scrollTo(0, 1) },
          2e3);
          $(".loader-container").fadeOut();
          $("img").unbind("load")
      },
      2e3)
  }).each(function () { this.complete && $(this).trigger("load") });

(function($) {

	$("#banner").unslider({
		autoplay: true,
		speed: 1500,
		delay: 6000,
		animation: "fade",
		arrows: {
			prev: '<a class="unslider-arrow prev absolute-v-center"><img src="assets/css/images/flecha.svg"></a>',
			next: '<a class="unslider-arrow next absolute-v-center"><img class="flip-horizontal" src="assets/css/images/flecha.svg"></a>'
		}
	});

	$(".overlay").css("height", $(".overlay").width());

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center'
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);
