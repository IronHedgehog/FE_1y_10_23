(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mob-menu__button--open'),
    closeMenuBtn: document.querySelector('.mob-menu__button--close'),
    menu: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();

const a = 5;

console.log(a);
