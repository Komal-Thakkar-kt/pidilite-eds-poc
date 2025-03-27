export default function decorate(block) {
  Array.from(block.children).forEach((ele) => {
    Array.from(ele.children).forEach((childEle) => {
      childEle.classList.add('full-width');
    });
  });
}
