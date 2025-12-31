// Initialize Lucide icons after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// Form submission handler (basic - can be enhanced with actual backend integration)
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // In production, this would submit to a backend
      alert('Thank you! We\'ll contact you within 2 hours.');
      form.reset();
    });
  }
});
