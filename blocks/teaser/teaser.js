export default function decorateTeaser(block) {
    Array.from(block.children).forEach(function(ele) {
        ele.classList.add('teaser-content');
        var childEle = document.querySelectorAll('.teaser-content');
        Array.from(childEle).forEach(function(ele) {
            console.log(ele.children);
            ele.children[0].classList.add('teaser-content-left');
            ele.children[1].classList.add('teaser-content-right');
        })
    })
}