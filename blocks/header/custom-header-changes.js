export default async function decorateSearch() {
  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  if (isMobile()) {
    const navWrapper = document.querySelector('.nav-wrapper');
    const navSearchInputHTML = `
    <div class="search-input-wrapper">
      <img src="../../icons/black-search-icon.svg" alt="Search Icon">
      <input type="text" placeholder="SEARCH">
    </div>`;
    navWrapper.insertAdjacentHTML('beforeend', navSearchInputHTML);
    const searchInputWrapper = document.querySelector('.search-input-wrapper');
    const searchIcon = document.querySelector('.nav-brand .default-content-wrapper .icon-white-search-icon');
    searchIcon.addEventListener('click', (() => {
      if (searchInputWrapper.classList.contains('active')) {
        searchInputWrapper.classList.remove('active');
      } else {
        searchInputWrapper.classList.add('active');
      }
    }));
  } else {
    const searchWrapper = document.querySelector('.nav-sections .default-content-wrapper p');
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', 'SEARCH');
    searchWrapper.appendChild(inputElement);
  }
}

const bodyElements = document.getElementsByTagName('body');
const body = bodyElements[0];
window.addEventListener('scroll', (() => {
  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
}));
