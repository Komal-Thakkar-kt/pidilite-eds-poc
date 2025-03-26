export default function decorateText(block) {
    Array.from(block.children).forEach(function(ele) {
        ele.classList.add('text-content');
        var childEle = document.querySelectorAll('.text-content');
        Array.from(childEle).forEach(function(ele) {
            console.log(ele.children);
            ele.children[0].classList.add('text-content-wrapper');
        })
    })
}