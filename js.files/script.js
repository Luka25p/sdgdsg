const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const indicatorsContainer = document.getElementById('indicators');
    const autoplayToggle = document.getElementById('autoplayToggle');

    let currentIndex = 0;
    let autoplay = false;
    let autoplayInterval;

    // Create indicators
    slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      if (index === 0) indicator.classList.add('active');
      indicator.dataset.index = index;
      indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll('.indicator');

    function updateSlider() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
          slide.classList.add('active');
        }
      });

      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach(indicator => indicator.classList.remove('active'));
      indicators[currentIndex].classList.add('active');
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.dataset.index, 10);
        updateSlider();
      });
    });


    // Initial activation
    updateSlider();