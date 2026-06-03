// Accrew Website JavaScript
// Mobile navigation, smooth scrolling, and interactive elements

(function() {
  'use strict';

  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');

      // Animate hamburger icon
      this.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);

      if (!isClickInside && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }

  // Smooth Scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar background on scroll
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll(
    '.feature-card, .problem-card, .industry-card, .pricing-card, .timeline-item'
  );

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Stats counter animation
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(function() {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Trigger counter animation when stats come into view
  const stats = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const text = entry.target.textContent;
        const number = parseInt(text.replace(/\D/g, ''));

        if (!isNaN(number)) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target, number, 1500);
        }
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => statsObserver.observe(stat));

  // Form validation (if contact form exists)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;

      if (!email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Here you would normally send the form data to a server
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      this.reset();
    });
  }

  // Copy email to clipboard
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Optional: Add click-to-copy functionality
      const email = this.getAttribute('href').replace('mailto:', '');

      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(function() {
          // Could show a toast notification here
          console.log('Email copied to clipboard');
        });
      }
    });
  });

})();

// ============================================================================
// Cost Calculator
// ============================================================================

(function() {
  'use strict';

  function fmt(n) {
    return 'HKD ' + n.toLocaleString('en-HK');
  }

  function getRecommendedTier(txns) {
    if (txns <= 150) return { name: 'Essential', monthly: 6000, annual: 66000 };
    if (txns <= 400) return { name: 'Growth', monthly: 12000, annual: 132000 };
    return { name: 'Enterprise', monthly: null, annual: null };
  }

  function runCalculator() {
    var setupEl = document.getElementById('calcSetup');
    var salaryEl = document.getElementById('calcSalary');
    var txnsEl = document.getElementById('calcTxns');
    var txnDisplay = document.getElementById('txnDisplay');
    var salaryGroup = document.getElementById('salaryGroup');
    var currentTotalEl = document.getElementById('currentTotal');
    var currentBreakdownEl = document.getElementById('currentBreakdown');
    var accrewTotalEl = document.getElementById('accrewTotal');
    var accrewBreakdownEl = document.getElementById('accrewBreakdown');
    var savingsHighlight = document.getElementById('savingsHighlight');
    var savingsAmountEl = document.getElementById('savingsAmount');

    if (!setupEl) return; // Calculator not on this page

    function update() {
      var setup = setupEl.value;
      var salary = Math.max(3000, parseInt(salaryEl.value, 10) || 30000);
      var txns = parseInt(txnsEl.value, 10) || 200;

      txnDisplay.textContent = txns >= 600 ? '600+' : txns;

      // Show/hide salary input based on setup
      salaryGroup.style.display = setup === 'diy' ? 'none' : 'block';

      // Build current cost breakdown
      var currentAnnual = 0;
      var breakdownItems = [];

      if (setup === 'fulltime') {
        var mpf = Math.round(salary * 0.05);
        var benefits = 2000;
        var software = 300;
        var total = salary + mpf + benefits + software;
        currentAnnual = total * 12;
        breakdownItems = [
          'Salary: ' + fmt(salary) + '/mo',
          'Employer MPF (5%): ' + fmt(mpf) + '/mo',
          'Benefits est.: ' + fmt(benefits) + '/mo',
          'Software (Xero): ' + fmt(software) + '/mo',
          'Annual total: ' + fmt(currentAnnual)
        ];
      } else if (setup === 'parttime') {
        currentAnnual = salary * 12;
        breakdownItems = [
          'Part-time pay: ' + fmt(salary) + '/mo',
          'Annual total: ' + fmt(currentAnnual)
        ];
      } else if (setup === 'diy') {
        currentAnnual = 0;
        breakdownItems = [
          'Direct cost: HKD 0',
          'But your time has value — and errors can cost more'
        ];
      } else if (setup === 'outsourced') {
        currentAnnual = salary * 12;
        breakdownItems = [
          'Current service: ' + fmt(salary) + '/mo',
          'Annual total: ' + fmt(currentAnnual)
        ];
      }

      // Accrew recommended tier
      var tier = getRecommendedTier(txns);
      var accrewItems = [];

      if (tier.annual) {
        accrewItems = [
          tier.name + ' plan: ' + fmt(tier.monthly) + '/mo',
          'Annual (1 month free): ' + fmt(tier.annual),
          'Includes all bookkeeping, reports &amp; MPF'
        ];
      } else {
        accrewItems = [
          'Enterprise plan — custom pricing',
          'Designed for 600+ transactions/month',
          'Multi-entity &amp; CFO advisory included'
        ];
      }

      // Render current
      currentTotalEl.textContent = setup === 'diy' ? 'HKD 0/year' : (fmt(currentAnnual) + '/year');
      currentBreakdownEl.innerHTML = breakdownItems.map(function(i) {
        return '<div class="breakdown-item">' + i + '</div>';
      }).join('');

      // Render Accrew
      if (tier.annual) {
        accrewTotalEl.textContent = fmt(tier.annual) + '/year';
      } else {
        accrewTotalEl.textContent = 'Let\'s talk';
      }
      accrewBreakdownEl.innerHTML = accrewItems.map(function(i) {
        return '<div class="breakdown-item">' + i + '</div>';
      }).join('');

      // Savings
      if (tier.annual && currentAnnual > tier.annual) {
        var savings = currentAnnual - tier.annual;
        savingsAmountEl.textContent = fmt(savings) + '/year';
        savingsHighlight.style.display = 'block';
      } else if (setup === 'diy') {
        savingsHighlight.style.display = 'none';
      } else {
        savingsHighlight.style.display = 'none';
      }
    }

    setupEl.addEventListener('change', update);
    salaryEl.addEventListener('input', update);
    txnsEl.addEventListener('input', update);

    update(); // Run on load
  }

  document.addEventListener('DOMContentLoaded', runCalculator);
})();
