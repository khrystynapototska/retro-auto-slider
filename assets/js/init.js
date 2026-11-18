/* Лаб. 10. Ініціалізація Swiper та Fancybox (після завантаження DOM) */
document.addEventListener('DOMContentLoaded', () => {
  // Об'єкт конфігурації Swiper
  const fleetSwiper = new Swiper('.fleet-swiper', {
    loop: true,                 // нескінченна прокрутка
    speed: 700,                 // тривалість анімації переходу, мс
    spaceBetween: 16,
    slidesPerView: 1,           // мобільні: 1 слайд
    grabCursor: true,
    autoplay: {
      delay: 4000,              // пауза між слайдами, мс
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    keyboard: { enabled: true },
    a11y: { enabled: true },
    // Адаптивність: параметри від зазначеної ширини екрана (px) і вище
    breakpoints: {
      640:  { slidesPerView: 2, spaceBetween: 20 },   // планшет
      1024: { slidesPerView: 3, spaceBetween: 24 },   // десктоп
    },
  });

  // Fancybox: галерея за атрибутом data-fancybox="fleet"
  Fancybox.bind('[data-fancybox="fleet"]', {
    Thumbs: { type: 'classic' },
    Toolbar: { display: { left: ['infobar'], middle: [], right: ['slideshow', 'fullscreen', 'close'] } },
    Hash: false,
  });

  window.fleetSwiper = fleetSwiper; // для налагодження в Console
});
