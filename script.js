window.addEventListener('scroll', () => {
  const whiteBox = document.querySelector('.white-box');
  const scrollPosition = window.scrollY || window.pageYOffset;

  // You can adjust the scroll trigger point (e.g., 300px) as needed
  if (scrollPosition > 10) {
    whiteBox.classList.add('visible');
  } else {
    whiteBox.classList.remove('visible');
  }
});