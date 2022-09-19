const navbartoggleBtn = document.querySelector(".navbar-toggle-btn ");
const navbarNav = document.querySelector(".navbar-nav");
const navbarToggleFunc = function () {
  navbartoggleBtn.classList.toggle('activo');
  navbarNav.classList.toggle('activo');
};
navbartoggleBtn.addEventListener('click',navbarToggleFunc);
