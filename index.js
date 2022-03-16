// Burger
(function () {
  const burgerItem = document.querySelector('.burger');
  const menuOpen = document.querySelector('.menu');
  const pageOpacity = document.querySelector('.page');
  const menuClose = document.querySelector('.menu-close');
  const menuLink1 = document.querySelector('.menu__link_1');
  const menuLink2 = document.querySelector('.menu__link_2');
  const menuLink3 = document.querySelector('.menu__link_3');
  const menuLink4 = document.querySelector('.menu__link_4');
  const menuLink5 = document.querySelector('.menu__link_5');
  burgerItem.addEventListener('click', () => {
    menuOpen.classList.add('menu__active');
    pageOpacity.classList.add('menu__opacity');
  });
  menuClose.addEventListener('click', () => {
    menuOpen.classList.remove('menu__active');
    pageOpacity.classList.remove('menu__opacity');
  });
  menuLink1.addEventListener('click', () => {
    menuOpen.classList.remove('menu__active');
    pageOpacity.classList.remove('menu__opacity');
  });
  menuLink2.addEventListener('click', () => {
    menuOpen.classList.remove('menu__active');
    pageOpacity.classList.remove('menu__opacity');
  });
  menuLink3.addEventListener('click', () => {
    menuOpen.classList.remove('menu__active');
    pageOpacity.classList.remove('menu__opacity');
  });
  menuLink4.addEventListener('click', () => {
    menuOpen.classList.remove('menu__active');
    pageOpacity.classList.remove('menu__opacity');
  });
  menuLink5.addEventListener('click', () => {
    menuOpen.classList.remove('menu__active');
    pageOpacity.classList.remove('menu__opacity');
  });
}());

// Portfolio
// const portfolioBtn = document.querySelector('.portfolio-btn');
// const portfolioImg = document.querySelectorAll('.portfolio__img');
// portfolioImg.forEach((img, index) => img.src = `./assets/img/portfolio/winter/${index + 1}.jpg`);
// const portfolioBtns = document.querySelector('.portfolio-btns');
// function changeImage(event) {
//   if (event.target.classList.contains('portfolio-btn')) {
//   }
// }


const changePortfolioImg = () => {
  const portfolioBlockBtns = document.querySelector('.row-btn');
  const portfolioBtns = portfolioBlockBtns.querySelectorAll('.row-btn__btn');
  const porfolioImg = document.querySelectorAll('.portfolio__img');

  const changeImg = (e) => {
    if (e.target.classList.contains('row-btn__btn')) {
      porfolioImg.forEach(
        (img, index) =>
          (img.src = `./assets/img/portfolio/${e.target.dataset.season}/${index + 1}.jpg`)
      );
      portfolioBtns.forEach((btn) => {
        btn.classList.remove('btn-black');
      });
      e.target.classList.add('btn-gold');
    }
  };
  portfolioBlockBtns.addEventListener('click', changeImg);
};
















