		var toggle_on = document.querySelector(".toggle_on");
		var toggle_off = document.querySelector(".toggle_off");
		var nav_content = document.querySelector(".nav_content");
		var logo = document.querySelector("header .logo a");
		var nav_link = document.querySelectorAll(".nav_con1 ul li a");
		toggle_off.style.display = "none";
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

		ScrollOut({
	        targets: ".slider_con,.card,.diff,img,form"
	      });

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 50  || document.documentElement.scrollTop > 50) {
		    document.querySelector("#header").style.background = "rgba(255,255,255,0.9)";
		    if (document.body.scrollTop > 500  || document.documentElement.scrollTop > 500){
		    	document.querySelector("#header").style.background = "#fff";
		    }
		  } else {
		     document.querySelector("#header").style.background = "transparent";
		  }
		};