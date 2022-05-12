const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
  // console.log(navList.classList);
  // console.log(navList.classList.contains('nav__list'));
  if (navList.classList.contains('show-links')) {
    navList.classList.remove('show-links');
  } else {
    navList.classList.add('show-links');
  }
});
