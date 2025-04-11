export default function decorateText(block) {
  let counter = 1;
  Array.from(block.children).forEach((ele) => {
    ele.classList.add('text-content', `text-content-${counter}`);
    const childEle = document.querySelectorAll('.text-content');
    Array.from(childEle).forEach((element) => {
      element.children[0].classList.add('text-content-wrapper');
    });
    counter++;
  });
}
