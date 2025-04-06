import { loadHeader } from '../../scripts/aem.js';

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
//   const main = doc.querySelector('main');
  loadHeader(doc.querySelector('header-cipy'));
}

async function loadPage() {
  await loadLazy(document);
  // loadDelayed();
}

loadPage();
