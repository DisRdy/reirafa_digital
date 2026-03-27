// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  bar1.style.transform = menuOpen ? 'rotate(45deg) translate(3px, 3px)' : '';
  bar2.style.opacity = menuOpen ? '0' : '1';
  bar3.style.transform = menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : '';
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    bar1.style.transform = '';
    bar2.style.opacity = '1';
    bar3.style.transform = '';
  });
});

// Portfolio filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portCards = document.querySelectorAll('.port-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    filterBtns.forEach(b => {
      b.classList.remove('active', 'bg-brand', 'text-white');
      b.classList.add('bg-white', 'text-dark', 'border', 'border-gray-200');
    });
    btn.classList.add('active', 'bg-brand', 'text-white');
    btn.classList.remove('bg-white', 'text-dark', 'border', 'border-gray-200');

    portCards.forEach(card => {
      if (filter === 'all' || card.dataset.cat === filter) {
        card.classList.remove('hidden-card');
      } else {
        card.classList.add('hidden-card');
      }
    });
  });
});

// Scroll-triggered fade-in
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

fadeEls.forEach(el => observer.observe(el));
