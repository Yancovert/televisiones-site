document.addEventListener('DOMContentLoaded', () => {
  const movableElements = document.querySelectorAll('.movable-text, .movable-element');

  window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      movableElements.forEach(element => {
          const speed = parseFloat(element.dataset.speed);
          // Adjust the multiplier to control the intensity of the movement
          const translateY = scrollY * speed;
          element.style.transform = `translateY(-${translateY}px)`;
      });
  });
});

// NEW: JavaScript for Loading Screen
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
      loadingScreen.classList.add('fade-out');
  }
});

// NEW: JavaScript for Cursor Trail
document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  document.body.appendChild(trail);

  // Position the trail element
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;

  // Remove the trail element after its animation finishes
  trail.addEventListener('animationend', () => {
      trail.remove();
  });
});