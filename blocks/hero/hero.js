export default function decorate(block) {
    // console.log(block);
    Array.from(block.children).forEach(function(ele) {
        // console.log(ele);
        Array.from(ele.children).forEach(function(childEle) {
            // console.log(childEle);
            childEle.classList.add('full-width');
        })
    })
}