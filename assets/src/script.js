
	    
			var swiper = new Swiper('.swiper-container', {
		      spaceBetween: 30,
		      centeredSlides: true,
		      loop:true,
		      autoplay: {
		        delay: 6500,
		        disableOnInteraction: false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		    });

	
		var toggle_on = document.querySelector(".toggle_on");
		var toggle_off = document.querySelector(".toggle_off");
		var nav_content = document.querySelector(".nav_content");
		var logo = document.querySelector("header .logo a");
		var nav_link = document.querySelectorAll(".nav_con1 ul li a");
		toggle_on.style.color = "#000";
		logo.style.color = "#6ab04c";
		toggle_on.onclick = () =>{
			nav_content.style.top = "0%";
			toggle_on.style.display = "none";
			toggle_off.style.display = "block";
			logo.style.color = "#fff";
		}
		toggle_off.onclick = () =>{
			nav_content.style.top = "-150%";
			toggle_on.style.display = "block";
			toggle_off.style.display = "none";
			nav_content.style.animation = "none";
			logo.style.color = "#6ab04c";
		};

		var btns = document.querySelectorAll(".nav_con1 ul li"); 
            for(var i = 0; i<btns.length; i++){
            	btns[i].onclick = () =>{
            		console.log(btns.length);
            		var current = document.querySelector("active");
            		current.className.replace("active","");
            		btns[i].className.add("active");
            	}
            };


		ScrollOut({
	        targets: ".slider_con,.card,.diff,img,form,.col-6,lottie-player"
	      });

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 50  || document.documentElement.scrollTop > 50) {
		    document.querySelector("#header").style.background = "rgba(255,255,255,0.9)";
		    // document.querySelector(".about_main video").style.filter = "greyscale(0.5)";
		    if (document.body.scrollTop > 500  || document.documentElement.scrollTop > 500){
		    	document.querySelector("#header").style.background = "#fff";
		    	// document.querySelector(".about_main video").style.filter = "greyscale(1)";
		    }
		  } else {
		     document.querySelector("#header").style.background = "transparent";
		     // document.querySelector(".about_main .top video").style.filter = "greyscale(0)";
		  }
		};

	    var swiper = new Swiper('.swiper-container-company', {
	      slidesPerView: 2,
	      spaceBetween: 10,
	      loop:true,
	      autoplay: {
	        delay: 500,
	        disableOnInteraction: false,
	      },
	      // init: false,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      breakpoints: {
	        640: {
	          slidesPerView: 2,
	          spaceBetween: 20,
	        },
	        768: {
	          slidesPerView: 3,
	          spaceBetween: 40,
	        },
	        1024: {
	          slidesPerView: 4,
	          spaceBetween: 50,
	        },
	      }
	    });

	    // testimonials

	    var swiper = new Swiper('.swiper-container-testimonials', {
	      spaceBetween: 30,
	      centeredSlides: true,
	      slidesPerView: 1,
	      spaceBetween: 10,
	      loop:true,
	      autoplay: {
	        delay: 4000,
	        disableOnInteraction: false,
	      },
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      breakpoints: {
	        640: {
	          slidesPerView: 1,
	          spaceBetween: 20,
	        },
	        768: {
	          slidesPerView: 1,
	          spaceBetween: 40,
	        },
	        1024: {
	          slidesPerView: 2,
	          spaceBetween: 50,
	        },
	      },
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });
  
            /* Code for changing active  
            link on clicking */ 
            var btns =  
                $(".nav_con1 ul li a"); 
  
            for (var i = 0; i < btns.length; i++) { 
                btns[i].addEventListener("click", 
                                      function () { 
                    var current = document
                        .getElementsByClassName("active"); 
  
                    current[0].className = current[0] 
                        .className.replace(" active", ""); 
  
                    this.className += " active"; 
                }); 
            } 
  
            /* Code for changing active  
            link on Scrolling */ 
            $(window).scroll(function () { 
                var distance = $(window).scrollTop(); 
                $('.page-section').each(function (i) { 
  
                    if ($(this).position().top  
                        <= distance + 250) { 
                          
                            $('.navbar-nav a.active') 
                                .removeClass('active'); 
  
                            $('.navbar-nav a').eq(i) 
                                .addClass('active'); 
                    } 
                }); 
            }).scroll();