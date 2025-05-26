export default defineNuxtPlugin(() => {
  // This plugin runs only on client-side
  if (process.client) {
    // Load jQuery and other scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Load scripts in order
    const loadScripts = async () => {
      try {
        // Load jQuery first
        await loadScript('/js/vendor/jquery-1.12.4.min.js');
        
        // Load other vendor scripts
        await loadScript('/js/vendor/bootstrap.min.js');
        await loadScript('/js/vendor/tether.min.js');
        await loadScript('/js/vendor/headroom.min.js');
        await loadScript('/js/vendor/owl.carousel.min.js');
        await loadScript('/js/vendor/smooth-scroll.min.js');
        await loadScript('/js/vendor/venobox.min.js');
        await loadScript('/js/vendor/jquery.ajaxchimp.min.js');
        await loadScript('/js/vendor/slick.min.js');
        await loadScript('/js/vendor/waypoints.min.js');
        await loadScript('/js/vendor/odometer.min.js');
        await loadScript('/js/vendor/wow.min.js');
        
        // Load main script last
        await loadScript('/js/main.js');
        
        console.log('All scripts loaded successfully');
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    // Load scripts when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadScripts);
    } else {
      loadScripts();
    }
  }
});