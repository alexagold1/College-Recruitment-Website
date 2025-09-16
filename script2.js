document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".schools-list button");
  const sections = document.querySelectorAll(".programs-container .programs");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons and hide all sections
      buttons.forEach((b) => b.classList.remove("active"));
      sections.forEach((sec) => (sec.hidden = true));

      // Add active class to clicked button and show matching section
      btn.classList.add("active");
      const schoolId = btn.getAttribute("data-school");
      const targetSection = document.getElementById(schoolId);
      if (targetSection) {
        targetSection.hidden = false;
      }
    });
  });
});
