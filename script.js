// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the saved theme
  if (savedTheme === 'dark') {
      html.setAttribute('data-theme', 'dark');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
  });
  // Image Sliders for each cartoon
  document.querySelectorAll('.image-slider').forEach(slider => {
      const images = slider.querySelectorAll('img');
      let currentIndex = 0;
      
      // Show first image initially
      if (images.length > 0) {
          images[0].classList.add('active');
      }

      // Manual image change buttons
      const parentCard = slider.closest('.cartoon-card');
      const nextBtn = parentCard.querySelector('.image-btn');
      
      nextBtn.addEventListener('click', () => {
          images[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % images.length;
          images[currentIndex].classList.add('active');
      });
  });
// Theme color change buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
      const card = btn.closest('.cartoon-card');
      const themes = ['orange', 'blue', 'green', 'red', 'yellow', 'pink'];
      let currentThemeIndex = themes.indexOf(card.dataset.theme);
      
      btn.addEventListener('click', () => {
          currentThemeIndex = (currentThemeIndex + 1) % themes.length;
          card.dataset.theme = themes[currentThemeIndex];
      });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Scroll animation
  const observerOptions = {
      threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.animation = `fadeIn 1s forwards`;
          }
      });
  }, observerOptions);
  
  document.querySelectorAll('.cartoon-card').forEach(card => {
      observer.observe(card);
  });
});