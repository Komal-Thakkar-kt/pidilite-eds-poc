export default function decorateText(block) {
  Array.from(block.children).forEach(function (ele) {
    ele.classList.add('text-content');
    const childEle = document.querySelectorAll('.text-content');
    Array.from(childEle).forEach(function (element) {
      element.children[0].classList.add('text-content-wrapper');
    });
  });
}
