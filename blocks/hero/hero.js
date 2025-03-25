export default function decorate(block) {
    Array.from(block.children).forEach(function(ele) {
        Array.from(ele.children).forEach(function(childEle) {
            childEle.classList.add('full-width');
        });
    });
}