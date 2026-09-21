const navLinks = document.querySelectorAll(".navbar nav a");
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (
            link.getAttribute("href") ===
            "#" + entry.target.id
          ) {
            link.classList.add("active");
          }
        });

      }

    });
  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

sections.forEach((section) => {
  observer.observe(section);
});


/* subtle card entrance */

const cards =
  document.querySelectorAll(
    ".card, .career article, .status-panel"
  );

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

        }

      });

    },
    {
      threshold: 0.1
    }
  );

cards.forEach((card) => {
  revealObserver.observe(card);
});
