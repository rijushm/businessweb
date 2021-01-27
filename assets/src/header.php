<?php 

session_start();

 $class = "active";

echo '<header id="header">
		<div class="logo">
			<a href="" class="">
				<h2>Business Web</h2>
			</a>
		</div>
		<div class="nav_content">
			<div class="nav_con1">
				<ul>
					<li>
						<i class="fas fa-arrow-right active"></i>
						<a href="index.php" class="active">Home</a>
					</li>
					<li>
						<i class="fas fa-arrow-right"></i>
						<a href="about.php" class="">About</a>
					</li>
					<li>
						<i class="fas fa-arrow-right "></i>
						<a href="service.php" class="">Service</a>
					</li>
					<li>
						<i class="fas fa-arrow-right "></i>
						<a href="contact.php" class="">Contact</a>
					</li>
					<li>
						<i class="fas fa-arrow-right "></i>
						<a href="career.php" class="">Career</a>
					</li>
				</ul>
			</div>
			<div class="nav_con2">
				<ul>
					<li>
						<a href="" class=""><i class="fab fa-facebook"></i>Facebook</a>
					</li>
					<li>
						<a href="" class=""><i class="fab fa-twitter"></i>twitter</a>
					</li>
					<li>
						<a href="" class=""><i class="fab fa-instagram"></i>instagram</a>
					</li>
					<li>
						<a href="" class=""><i class="fab fa-linkedin"></i>linkedin</a>
					</li>
				</ul>
			</div>

			<a href="" class="nav_btn b1">Our Services</a>
			<a href="" class="nav_btn b2">Subscribe Our Newsletter</a>
			<a href="" class="nav_btn b3">Lets Talk</a>

			<div class="waveWrapper waveAnimation">
			  <div class="waveWrapperInner bgTop">
			    <div class="wave waveTop" style="background-image: url(http://front-end-noobs.com/jecko/img/wave-top.png)"></div>
			  </div>
			  <div class="waveWrapperInner bgMiddle">
			    <div class="wave waveMiddle" style="background-image: url(http://front-end-noobs.com/jecko/img/wave-mid.png)"></div>
			  </div>
			  <div class="waveWrapperInner bgBottom">
			    <div class="wave waveBottom" style="background-image: url(http://front-end-noobs.com/jecko/img/wave-bot.png)"></div>
			  </div>
			</div>
		</div>
		<div class="nav_toggle">
			<!-- <i class="fas fa-bars toggle_on"></i> -->
			<img src="assets/img/bar.svg" class="toggle_on">
			<i class="fas fa-times toggle_off"></i>
		</div>
	</header>';

 ?>