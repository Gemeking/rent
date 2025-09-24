// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Search form functionality
const searchForm = document.querySelector('.search-bar');
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const location = this.querySelector('input[type="text"]').value;
  const houseType = this.querySelector('select').value;
  const minPrice = this.querySelector('input[type="number"]').value;
  const maxPrice = this.querySelectorAll('input[type="number"]')[1].value;
  const rooms = this.querySelectorAll('select')[1].value;
  
  // In a real application, this would send the data to a server
  console.log('Search parameters:', {
    location,
    houseType,
    minPrice,
    maxPrice,
    rooms
  });
  
  // Show a simple alert for demonstration
  alert(`Searching for ${houseType || 'any property type'} in ${location || 'any location'} with ${rooms || 'any number of'} rooms, priced between ${minPrice || '0'} and ${maxPrice || 'unlimited'} Birr.`);
});

// Simple property card interaction
const propertyCards = document.querySelectorAll('.card');
propertyCards.forEach(card => {
  card.addEventListener('click', function(e) {
    if (e.target.tagName !== 'A') {
      const link = this.querySelector('a');
      if (link) {
        window.location.href = link.href;
      }
    }
  });
});

// Add some visual feedback for form inputs
const formInputs = document.querySelectorAll('input, select');
formInputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.style.borderColor = '#8B4513';
    this.style.boxShadow = '0 0 0 2px rgba(139, 69, 19, 0.2)';
  });
  
  input.addEventListener('blur', function() {
    this.style.borderColor = '#ddd';
    this.style.boxShadow = 'none';
  });
});