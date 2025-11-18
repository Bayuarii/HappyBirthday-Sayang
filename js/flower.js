
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // Tunggu sampai animasi bunga selesai, misal 5 detik
setTimeout(() => {
  const text = document.querySelector('.popup-text');
  const button = document.querySelector('.next-btn');
  const container = document.querySelector('.message-container');

  container.style.opacity = 1;
  container.style.pointerEvents = 'auto';
  
  // Munculkan teks
  text.style.opacity = 1;
  text.style.transform = 'scale(1)';

  // Setelah teks muncul penuh, munculkan tombol
  setTimeout(() => {
    button.style.opacity = 1;
    button.style.transform = 'translateY(0)';
  }, 1200);
}, 5000); // Sesuaikan durasi ini dengan waktu animasi bungamu
