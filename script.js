document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    // Get the hamburger icon and navbar
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
  
    // Add click event listener to each link
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();
  
        // Remove 'active' class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
  
        // Add 'active' class to the clicked link
        this.classList.add('active');
  
        // Scroll to the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
  
        // For mobile, hide the navbar after clicking a link
        if (window.innerWidth <= 576) {
          navbar.classList.remove('show');
          document.body.style.overflowY = 'auto'; // Restore body overflow
        }
      });
    });
  
    // Add click event listener to toggle the 'show' class on the navbar
    hamburger.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the event from reaching document click
  
      navbar.classList.toggle('show');
      document.body.style.overflowY = navbar.classList.contains('show') ? 'hidden' : 'auto';
    });
  
    // Close the navbar when clicking outside of it
    document.addEventListener('click', function () {
      if (navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        document.body.style.overflowY = 'auto'; // Restore body overflow
      }
    });
  });
  