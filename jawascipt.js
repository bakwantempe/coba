const logo = document.getElementById('logo');

setTimeout(() => {
  logo.classList.add('fade-out');
}, 2000);

setTimeout(() => {
  logo.remove();
}, 4000);

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var headerHeight = document.querySelector('header').offsetHeight;
    if (window.scrollY > headerHeight) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });