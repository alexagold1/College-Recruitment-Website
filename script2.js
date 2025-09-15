document.addEventListener("DOMContentLoaded", () => {
  const whiteBox = document.querySelector(".white-box");
  const heading = document.querySelector("h1");

  // Check if heading is visible, then show white box
  function checkVisibility() {
    const rect = heading.getBoundingClientRect();
    if (
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.9
    ) {
      whiteBox.classList.add("visible");
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // initial check on page load
});
