const contentData = {
  facilities: {
    title: "Campus Facilities & Amenities",
    text: `Syracuse University offers modern classrooms, fully-equipped laboratories, 24/7 libraries, creative studios,
      collaborative study lounges, and recreational centers like the Barnes Center at The Arch. Students enjoy
      access to high-speed Wi-Fi, healthy dining options, and comfortable study environments throughout campus.`,
  },
  organizations: {
    title: "Student Organizations & Clubs",
    text: `With over 300 student-led organizations, Syracuse provides clubs for every interest — academic, cultural,
      service groups, Greek life, and niche hobbies. Great ways to meet friends and grow leadership skills.`,
  },
  activities: {
    title: "Social & Extracurricular Activities",
    text: `Orange After Dark events, concerts, sports, volunteering, and cultural celebrations keep the social life
      vibrant and engaging. There’s always something exciting happening on campus!`,
  },
  housing: {
    title: "Housing Options & Cost",
    text: `Freshmen typically live on North and South Campus in traditional dorms or suite-style halls. Costs range
      from $9,000 to $14,000 annually, depending on room and meal plans. Syracuse offers a safe, welcoming residential
      experience.`,
  },
};


// Bootstrap bundle loaded in HTML handles carousel functionality

// Club search filter logic
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("clubSearch");
  const clubsContainer = document.getElementById("clubsContainer");
  const clubs = Array.from(clubsContainer.getElementsByClassName("org-card"));

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    clubs.forEach((club) => {
      const title = club.querySelector("h3").textContent.toLowerCase();
      const description = club.querySelector("p").textContent.toLowerCase();

      if (title.includes(query) || description.includes(query)) {
        club.style.display = "";
      } else {
        club.style.display = "none";
      }
    });
  });
});
