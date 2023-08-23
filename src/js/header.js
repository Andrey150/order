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
const headerLink = document.querySelectorAll('.navigation__link');

burgerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('navigation--active');
  burgerMenu.classList.toggle('burger-menu--active');

  console.log('click', )


  if(headerMenu.classList.contains('navigation--active')){
    document.documentElement.style.overflow = 'hidden';
  } else {
    document.documentElement.style.overflow = 'auto';
  }
})

headerLink.forEach(headerLink => {
  headerLink.addEventListener('click', () => {
    headerMenu.classList.remove('navigation--active');
    burgerMenu.classList.remove('burger-menu--active');
    document.documentElement.style.overflow = 'auto';
  })
})