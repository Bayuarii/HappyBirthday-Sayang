  const wrapper = document.querySelector('.wrapper');
  const slides = document.querySelectorAll('.wrapper img');
  const totalSlides = slides.length;
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  // Clone slide pertama dan tambahkan ke akhir
  const firstClone = slides[0].cloneNode(true);
  wrapper.appendChild(firstClone);

  let index = 0;
  let interval;
  let isTransitioning = false;

  function goToSlide(i) {
    wrapper.style.transition = 'transform 1s ease-in-out';
    wrapper.style.transform = `translateX(-${i * 100}%)`;
  }

  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    index++;
    goToSlide(index);

    // Kalau sudah sampai di clone slide terakhir
    if (index === totalSlides) {
      setTimeout(() => {
        wrapper.style.transition = 'none';
        index = 0;
        wrapper.style.transform = 'translateX(0)';
      }, 1000);
    }

    setTimeout(() => (isTransitioning = false), 1000);
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    index--;

    if (index < 0) {
      wrapper.style.transition = 'none';
      index = totalSlides - 1;
      wrapper.style.transform = `translateX(-${index * 100}%)`;
      setTimeout(() => {
        wrapper.style.transition = 'transform 1s ease-in-out';
        index--;
        goToSlide(index);
      }, 20);
    } else {
      goToSlide(index);
    }

    setTimeout(() => (isTransitioning = false), 1000);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  function startAutoSlide() {
    interval = setInterval(nextSlide, 4000);
  }

  function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
  }

  startAutoSlide();


const navLinks = document.querySelectorAll('.navbar2 a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});