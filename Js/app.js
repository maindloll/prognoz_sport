 $(function() {

		$("[data-scroll]").on("click", function(event) {

			event.preventDefault();
			var $this = $(this),
			blockId = $this.data("scroll"),
			blockoffset = $(blockId).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active");

			$("html, body").animate({

			scrollTop:blockoffset
			}, 500);
		});
		/*Nav Toggle*/

		$("#nav_toggle").on("click", function(event) {
			event.preventDefault();
			$(this).toggleClass("active");
			$("#nav").toggleClass("active");

		});
 }); 