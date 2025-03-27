export default function decorateSearch() {
  const searchWrapper = document.querySelector('.nav-sections .default-content-wrapper p');
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  searchWrapper.appendChild(inputElement);
}
