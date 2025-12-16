// js/main.js
// Vanilla JavaScript for mobile menu, scroll reveal, and testimonials slider

(function() {
  'use strict';

  // ===== Burger Menu =====
  const burgerBtn = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  if (burgerBtn && mainNav && overlay) {
    burgerBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-active')) {
        closeMenu();
      }
    });

    // Close menu when clicking nav links
    const navLinks = mainNav.querySelectorAll('.header__nav-item');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  function toggleMenu() {
    const isActive = mainNav.classList.toggle('is-active');
    burgerBtn.classList.toggle('is-active');
    overlay.classList.toggle('is-active');
    
    // Update ARIA attributes
    burgerBtn.setAttribute('aria-expanded', isActive);
    overlay.setAttribute('aria-hidden', !isActive);
    
    // Prevent body scroll when menu is open
    if (isActive) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }

  function closeMenu() {
    mainNav.classList.remove('is-active');
    burgerBtn.classList.remove('is-active');
    overlay.classList.remove('is-active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('aria-hidden', 'true');
    body.style.overflow = '';
  }

  // ===== Scroll Reveal Animation =====
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: unobserve after reveal
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

  // Observe all elements with scroll-reveal class
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll('.faq__question');
  
  faqItems.forEach(question => {
    question.addEventListener('click', toggleFAQ);
  });

  function toggleFAQ(e) {
    const button = e.currentTarget;
    const item = button.parentElement;
    const answer = item.querySelector('.faq__answer');
    const icon = button.querySelector('.faq__icon');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    // Close all other FAQ items
    faqItems.forEach(otherQuestion => {
      if (otherQuestion !== button) {
        const otherItem = otherQuestion.parentElement;
        const otherAnswer = otherItem.querySelector('.faq__answer');
        const otherIcon = otherQuestion.querySelector('.faq__icon');
        
        otherQuestion.setAttribute('aria-expanded', 'false');
        otherAnswer.classList.remove('is-active');
        otherIcon.classList.remove('is-active');
      }
    });

    // Toggle current item
    button.setAttribute('aria-expanded', !isExpanded);
    answer.classList.toggle('is-active');
    icon.classList.toggle('is-active');
  }

  // ===== Testimonials Slider =====
  const testimonialsGrids = document.querySelectorAll('.testimonials__grid');
  
  testimonialsGrids.forEach(grid => {
    const cards = grid.querySelectorAll('.testimonials__card');
    const controlsContainer = grid.parentElement.querySelector('.testimonials__controls');
    
    if (!controlsContainer || cards.length === 0) return;

    const prevBtn = controlsContainer.querySelectorAll('button')[0];
    const nextBtn = controlsContainer.querySelectorAll('button')[1];
    
    let currentIndex = 0;
    const totalCards = cards.length;

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => showPreviousCard());
      nextBtn.addEventListener('click', () => showNextCard());
    }

    function showCard(index) {
      cards.forEach((card, i) => {
        if (i === index) {
          card.style.display = 'flex';
          setTimeout(() => card.classList.add('is-visible'), 50);
        } else {
          card.classList.remove('is-visible');
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    }

    function showNextCard() {
      currentIndex = (currentIndex + 1) % totalCards;
      showCard(currentIndex);
    }

    function showPreviousCard() {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      showCard(currentIndex);
    }

    // Show first card initially on mobile
    if (window.innerWidth < 768) {
      showCard(0);
    }
  });

  // ===== Single Testimonial Controls =====
  const singleTestimonials = document.querySelectorAll('.testimonials__single');
  
  singleTestimonials.forEach(section => {
    const testimonialCards = section.querySelectorAll('.testimonials__card');
    const controls = section.querySelector('.testimonials__controls');
    
    if (!controls || testimonialCards.length === 0) return;

    const prevBtn = controls.querySelectorAll('button')[0];
    const nextBtn = controls.querySelectorAll('button')[1];
    
    let currentTestimonialIndex = 0;
    const testimonials = [
      {
        quote: 'Proin urna enim, sagittis a lorem et, hendrerit faucibus arcu. Cras vehicula placerat rhoncus.',
        author: 'Maria M.',
        title: 'CEO, Tech Solutions'
      },
      {
        quote: 'Another testimonial quote would go here with different content.',
        author: 'John D.',
        title: 'Director, Innovation Lab'
      }
    ];

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => cycleSingleTestimonial(-1));
      nextBtn.addEventListener('click', () => cycleSingleTestimonial(1));
    }

    function cycleSingleTestimonial(direction) {
      currentTestimonialIndex = (currentTestimonialIndex + direction + testimonials.length) % testimonials.length;
      const testimonial = testimonials[currentTestimonialIndex];
      
      testimonialCards.forEach(card => {
        const quoteEl = card.querySelector('.testimonials__single-quote');
        const nameEl = card.querySelector('.testimonials__author-name');
        const titleEl = card.querySelector('.testimonials__author-title');
        
        if (quoteEl && nameEl && titleEl) {
          quoteEl.textContent = testimonial.quote;
          nameEl.textContent = testimonial.author;
          titleEl.textContent = testimonial.title;
        }
      });
    }
  });

  // ===== Smooth Scroll for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip empty anchors
      if (href === '#' || href === '#!') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        closeMenu();
      }
    });
  });

  // ===== Header Scroll Effect =====
  const header = document.getElementById('header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
      header.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 1px 0 0 rgba(255, 255, 255, 0.32), inset 0 -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0 1px rgba(0, 0, 0, 0.11)';
    }
    
    lastScrollTop = scrollTop;
  });

  // ===== Video Play Buttons =====
  const videoButtons = document.querySelectorAll('.clarity__video-button, .testimonials__card-play');
  
  videoButtons.forEach(button => {
    button.addEventListener('click', () => {
      // In a real implementation, this would open a video modal
      console.log('Video play button clicked');
      alert('Video player would open here');
    });
  });

  // ===== Resize Handler for Responsive Behavior =====
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Reset testimonial slider on desktop
      if (window.innerWidth >= 768) {
        testimonialsGrids.forEach(grid => {
          const cards = grid.querySelectorAll('.testimonials__card');
          cards.forEach(card => {
            card.style.display = 'flex';
            card.classList.add('is-visible');
          });
        });
      }
    }, 250);
  });

  // ===== Loading Complete =====
  console.log('JavaScript loaded successfully');
  
})();
