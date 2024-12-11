const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const scrollContent = document.querySelector('.scroll-content');

leftBtn.addEventListener('click', () => {
  scrollContent.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll left
});

rightBtn.addEventListener('click', () => {
  scrollContent.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll right
});
