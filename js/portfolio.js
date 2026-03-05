/* ============================================
   ENHANCE_BY_V — Portfolio Filter JS
   File: js/portfolio.js
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.getAttribute('data-filter');

      // The grid needs to reflow — use CSS display toggle
      portfolioItems.forEach(item => {
        const cat = item.getAttribute('data-category');

        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
          // Trigger reflow for animation
          void item.offsetWidth;
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 350);
        }
      });
    });
  });

});
