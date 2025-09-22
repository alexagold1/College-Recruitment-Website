const counters = document.querySelectorAll(".counter");
let counted = false;

function runCounters() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 150)); // smoother increment

    function updateCounter() {
      current += increment;
      if (current < target) {
        counter.innerText = current.toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }

    updateCounter();
  });
}

function checkCounters() {
  const statsSection = document.getElementById("tuition-stats");
  if (!statsSection) return;

  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  // Trigger when section is about 80% visible from top
  if (sectionTop < screenHeight * 0.8 && !counted) {
    runCounters();
    counted = true;
  }
}

window.addEventListener("scroll", checkCounters);
window.addEventListener("load", checkCounters);
