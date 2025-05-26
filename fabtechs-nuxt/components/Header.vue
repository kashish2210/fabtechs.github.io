<template>
  <header class="header">
    <div class="primary-header">
      <div class="container">
        <div class="primary-header-inner">
          <div class="header-logo">
            <NuxtLink to="/">
              <img src="/img/fabtechs-logo.png" class="logo">
            </NuxtLink>
            <NuxtLink to="/" class="texty">FABTECHS ENTERPRISES</NuxtLink>
          </div>
          <div class="header-menu-wrap">
            <ul class="dl-menu">
              <li><NuxtLink to="/">HOME</NuxtLink></li>
              <li><NuxtLink to="/about-us">About</NuxtLink></li>
              <li><NuxtLink to="/testimonial">client's</NuxtLink></li>
              <li><NuxtLink to="/projects">PROJECT GALLERY</NuxtLink></li>
              <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
          </div>

          <div class="header-right">
            <a class="menu-btn" href="mailto:work@fabtechs.co.in?subject=quote%20request&body=I%20hope%20this%20email%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20request%20a%20quote%20for%20%0A">Request a Quote</a>
            <div class="header-right12">(+91) 9427003687</div>
            <div class="mobile-menu-icon">
              <div class="burger-menu">
                <div class="line-menu line-half first-line"></div>
                <div class="line-menu"></div>
                <div class="line-menu line-half last-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Component logic here if needed
</script>