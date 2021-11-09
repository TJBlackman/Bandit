/**
 * Save this as a utility function that any component can use.
 * It's possible that the element wont be found, so check for it,
 * if it exists, then scroll, otherwise log a warning
 * @param selector The selector attribute of the element to scroll to.
 */

export const scrollElementIntoView = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    console.warn("No element found with selector: " + selector);
  } else {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
