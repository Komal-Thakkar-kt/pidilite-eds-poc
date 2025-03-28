export default function decorateSearch() {
  const searchWrapper = document.querySelector('.nav-sections .default-content-wrapper p');
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  searchWrapper.appendChild(inputElement);
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
