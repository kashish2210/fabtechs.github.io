<template>
  <div>
    <div class="site-preloader-wrap">
      <div class="spinner"></div>
    </div>
    
    <Header />
    
    <main>
      <slot />
    </main>
    
    <Footer />
    
    <a data-scroll href="#" id="scroll-to-top"><i class="arrow_carrot-up"></i></a>
  </div>
</template>

<script setup>
// Layout setup can go here if needed
</script>

<style>
/* Any layout-specific styles */
</style>