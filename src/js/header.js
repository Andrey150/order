window.addEventListener('scroll', function() {
  let header = document.querySelector('.header');
  let headerHeight = document.querySelector('.header').offsetHeight;
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > headerHeight) {
    header.classList.add('dark');
  } else {
    header.classList.remove('dark');
  }
});

const burgerMenu = document.querySelector('.burger-menu');
const headerMenu = document.querySelector('.navigation');
const headerLink = document.querySelectorAll('.navigation__list li a');

burgerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('active');
  burgerMenu.classList.toggle('active');


  if(headerMenu.classList.contains('active')){
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
})

headerLink.forEach(headerLink => {
  headerLink.addEventListener('click', () => {
    headerMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.documentElement.style.overflow = 'auto';
  })
})