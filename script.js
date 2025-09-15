document.addEventListener("DOMContentLoaded", () => {
  const whiteBox = document.querySelector(".white-box");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.9
    );
  }

  function checkVisibility() {
    if (isInViewport(whiteBox)) {
      whiteBox.classList.add("visible");
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // check on load as well
});
