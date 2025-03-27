export default function decorateBreadcrumb() {
  const sourceWrapper = document.querySelector(".nav-wrapper");
  const childElement = document.querySelector(".breadcrumbs");
  const removedChild = sourceWrapper.removeChild(childElement);
  const destinationWrapper = document.querySelector(".hero-wrapper");
  destinationWrapper.appendChild(removedChild);
}
