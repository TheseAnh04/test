const slides = document.querySelectorAll('.trending-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});


showSlide(currentSlide);


const toggleButton = document.querySelector('.navbar-toggle');
const menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    const menuHeaders = document.querySelectorAll('.column-1 h4, .column-2 h4');

    menuHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const menu = this.nextElementSibling;

        document.querySelectorAll('.column-1 ul, .column-2 ul').forEach(item => {
          if (item !== menu) {
            item.style.display = 'none';
          }
        });

        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
      });
    });
  });
