const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');

let currentIndex = 0;
const intervalTime = 2500; // 2.5 seconds
let interval;

// Function to focus a card
function focusCard(index) {
  cards.forEach((card, i) => {
    card.classList.toggle('focused', i === index);
  });
  cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  currentIndex = index;
}

// Auto-scroll carousel
function startCarousel() {
  interval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % cards.length;
    focusCard(nextIndex);
  }, intervalTime);
}

// Stop auto-scroll
function stopCarousel() {
  clearInterval(interval);
}

// Initialize
focusCard(0);
startCarousel();

// Optional: Pause on hover
track.addEventListener('mouseenter', stopCarousel);
track.addEventListener('mouseleave', startCarousel);

// Optional: Update focused card on manual scroll
track.addEventListener('scroll', () => {
  const trackCenter = track.scrollLeft + track.offsetWidth / 2;
  cards.forEach((card, i) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    if (Math.abs(trackCenter - cardCenter) < card.offsetWidth / 2) {
      focusCard(i);
    }
  });
});
