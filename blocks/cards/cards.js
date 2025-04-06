import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Convert to UL/LI structure
  const ul = document.createElement('ul');
  
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    
    // Add card classes
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';
      }
    });

    // Add class for featured-segments specific section
    if (block.classList.contains('featured-segments')) {
      const index = ul.children.length + 1;
      li.classList.add(`featured-segments-item-${index}`);
      li.dataset.segmentIndex = index;
    }

    ul.append(li);
  });

  // Optimize images
  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(createOptimizedPicture(
      img.src, 
      img.alt, 
      false, 
      [{ width: '750' }]
    ));
  });

  block.textContent = '';
  block.append(ul);
}
