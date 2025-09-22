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

const alumniQuotes = [
  {
    quote:
      "Syracuse gave me the foundation to dream big and the tools to achieve it.",
    author: "Sarah Johnson – Class of 2005, Communications",
  },
  {
    quote:
      "The connections I made at SU shaped both my career and my character.",
    author: "Michael Tan – Class of 1998, Business Administration",
  },
  {
    quote: "There’s something about the Orange spirit that never leaves you.",
    author: "Lena Chen – Class of 2012, Public Relations",
  },
  {
    quote:
      "Walking through the Quad taught me more than any textbook ever could.",
    author: "Jamal Greene – Class of 2001, Political Science",
  },
  {
    quote:
      "At Syracuse, I learned to lead, to listen, and to launch bold ideas.",
    author: "Priya Natarajan – Class of 2010, Engineering",
  },
  {
    quote:
      "Every step of my journey began with a snow-covered campus and a dream.",
    author: "Darius King – Class of 1995, Architecture",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const newQuoteBtn = document.getElementById("newQuoteBtn");

  newQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * alumniQuotes.length);
    const quote = alumniQuotes[randomIndex];
    quoteText.textContent = quote.quote;
    quoteAuthor.textContent = `— ${quote.author}`;
  });
});
