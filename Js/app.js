 $(function() {

 	var header = $("header"),
 	    introH = $("#intro").innerHeight(),
 	    scrolloffset =$(window).scrollTop();


 	    /*HEADER fixed*/
 	chekScroll(scrolloffset);

 	$(window).on("scroll", function(){


 		scrolloffset = $(this).scrollTop();
 		chekScroll(scrolloffset)
	});



	function chekScroll(scrolloffset) {

 
 		if( scrolloffset >= introH){
 		header.addClass("fixed");
 		} else{
 			header.removeClass('fixed');
 		}
	}

		/*Smooth scroll*/


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

		/*HIDE MENU

    	$("#nav a").on("click", function(event){
        event.preventDefault();
        $("#nav_toggle").removeClass("active");
        $("#nav").hide();
        $("#nav-toggle").removeClass("active");

    });
  		*/



		/*COLLAPS*/

		$("[data-collapse]").on("click",function(event){
			event.preventDefault();
			var $this = $(this),
				blockId = $this.data("collapse");


			$this.toggleClass("active"); 



		});


		/*SLIDER*/

		$("[data-slider]").slick({
			infinite:true,
			fade:false,
			slidesToShow:1,
			slidesToScroll:1
		});

 }); 