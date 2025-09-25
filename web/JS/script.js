
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger && nav) {
        burger.addEventListener('click', function() {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll("[data-animate]");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3; 

      if (elementPosition < screenPosition) {
        element.classList.add("animated");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); 
});