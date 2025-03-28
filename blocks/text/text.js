export default function decorateText(block) {
  Array.from(block.children).forEach((ele) => {
    ele.classList.add('text-content');
    const childEle = document.querySelectorAll('.text-content');
    Array.from(childEle).forEach((element) => {
      element.children[0].classList.add('text-content-wrapper');
    });
  });
}
