export default function decorateTeaser(block) {
  Array.from(block.children).forEach((ele) => {
    ele.classList.add('teaser-content');
    const childEle = document.querySelectorAll('.teaser-content');
    Array.from(childEle).forEach((element) => {
      element.children[0].classList.add('teaser-content-left');
      element.children[1].classList.add('teaser-content-right');
    });
  });
}
