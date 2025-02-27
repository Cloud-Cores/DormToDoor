// scroll view animation on HomePage

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section-fade");
  const univSection = document.querySelector("#section_7");
  const aboutWrapSection = document.querySelector(".about-wrap-fade-up");
  const aboutInfoSection = document.querySelector(".about-info-fade-in");
  const tableContentSection = document.querySelector(
    ".schedule-section .table-content"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Fade in
        } else {
          entry.target.classList.remove("visible"); // Fade out
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(heroSection); // hero section
  //   about section
  observer.observe(aboutWrapSection);
  observer.observe(aboutInfoSection);
  observer.observe(tableContentSection); // schedule section table content
  observer.observe(univSection); // find univesrity section
});

//artists-section scroll view
document.addEventListener("DOMContentLoaded", function () {
  const artistsHover = document.querySelector(".artists-hover");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          artistsHover.classList.add("visible");
          artistsHover.classList.remove("hidden");
        } else {
          artistsHover.classList.remove("visible");
          artistsHover.classList.add("hidden"); // Shrink when out of view
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(artistsHover);
});
