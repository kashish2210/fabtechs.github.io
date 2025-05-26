<template>
  <div>
    <section class="widget-section padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6 sm-padding">
            <div class="widget-content">
              <a href="#"><img src="/img/fabtechs-logo.png" alt="brand"></a>
              <p>STRUCTURE FABRICATION | ERECTION | PAINTING & ROOF SHEET.</p>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6 sm-padding">
            <div class="widget-content">
              <h4>FABTECHS ENTERPRISES</h4>
              <ul class="widget-links">
                <li><NuxtLink to="/about-us">About Us</NuxtLink></li>
                <li><NuxtLink to="/projects">PROJECT GALLERY</NuxtLink></li>
                <li><NuxtLink to="/testimonial">Clients</NuxtLink></li>
                <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 sm-padding">
            <div class="widget-content">
              <h4>LOCATE US</h4>
              <p>GF 34, Krishna Complex, Near Rajpipla Chokadi GIDC Ankleshwar-393002</p>
              <span><a href="mailto:work@fabtechs.co.in">work@fabtechs.co.in</a></span>
              <span>(+91) 9427003687</span>
              <span>(+91) 9429282598</span>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 sm-padding">
            <div class="widget-content social-media">
              <h4>Follow Us</h4>
              <div class="social-icons" ref="socialIcons">
                <a href="https://www.instagram.com/fabtechs_enterprises/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/share/1CFJEQY5ez/" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="http://wa.me/9427003687" target="_blank">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-section align-center">
      <div class="container">
        <p><a href="#">© 2025 FABTECHS ENTERPRISES. All rights reserved.</a></p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}
.social-icons a {
  font-size: 34px;
  color: #f39c00;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.social-icons a:hover {
  color: #007bff;
  transform: scale(2.1);
}
</style>