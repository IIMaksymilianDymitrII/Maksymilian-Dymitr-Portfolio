document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash');
  const content = document.getElementById('content');

  setTimeout(() => {
    splash.classList.add('fadeOut');
    splash.addEventListener('animationend', () => {
      splash.style.display = 'none';
      content.classList.remove('hidden');
      document.body.style.overflow = 'auto';
    });
  }, 1000);
  
  const sections = Array.from(content.querySelectorAll('section'));
  let currentIndex = 0;
  
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
      currentIndex = index;
    }
  }
  
  document.addEventListener('keydown', (e) => {
    if (content.classList.contains('hidden')) return; // Only when content is visible
    if (e.key === 'ArrowDown') {
      if (currentIndex < sections.length - 1) {
        scrollToSection(currentIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (currentIndex > 0) {
        scrollToSection(currentIndex - 1);
      }
    }
  });
});

