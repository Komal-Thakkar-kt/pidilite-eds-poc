import { createOptimizedPicture } from '../../scripts/aem.js';


function initFeaturedSegments(block) {
  const segmentsBlock = block;
  
  block.querySelectorAll('li:has(> ul)').forEach((trigger) => {
    const nestedUl = trigger.querySelector('ul');
    trigger.classList.add('segments-trigger');
    nestedUl.classList.add('segments-dropdown');
    nestedUl.style.display = 'none';

    // Click handler for the trigger
    const handleTriggerClick = (e) => {
      e.stopPropagation();
      trigger.classList.toggle('active');
      nestedUl.style.display = trigger.classList.contains('active') ? 'block' : 'none';
    };

    // Close when clicking outside
    const handleDocumentClick = (e) => {
      if (!segmentsBlock.contains(e.target)) {
        trigger.classList.remove('active');
        nestedUl.style.display = 'none';
      }
    };

    trigger.addEventListener('click', handleTriggerClick);
    document.addEventListener('click', handleDocumentClick);

    // Cleanup event listeners when block is removed
    block.addEventListener('DOMNodeRemoved', () => {
      trigger.removeEventListener('click', handleTriggerClick);
      document.removeEventListener('click', handleDocumentClick);
    });
  });
}

export default function decorate(block) {

  // Initialize featured segments functionality if applicable
  if (block.classList.contains('featured-segments')) {
    initFeaturedSegments(block);
  }

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
      [{ width: '750' }],
    ));
  });

  block.textContent = '';
  block.append(ul);
}
