/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* ===============================
   ACTIVE NAVIGATION
================================ */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navLinks =
  document.querySelectorAll(
    ".navbar nav a"
  );

const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {

          link.classList.remove(
            "active"
          );

          const target =
            link.getAttribute("href");

          if (
            target ===
            "#" + entry.target.id
          ) {

            link.classList.add(
              "active"
            );

          }

        });

      });

    },
    {
      rootMargin:
        "-35% 0px -55% 0px"
    }
  );

sections.forEach((section) => {
  sectionObserver.observe(section);
});


/* ===============================
   CURSOR LIGHT
================================ */

const glow =
  document.querySelector(
    ".cursor-glow"
  );

if (glow) {

  window.addEventListener(
    "mousemove",
    (event) => {

      glow.style.left =
        event.clientX + "px";

      glow.style.top =
        event.clientY + "px";

    }
  );

}


/* ===============================
   ECOSYSTEM INTERACTION
================================ */

const ecosystemNodes =
  document.querySelectorAll(
    ".eco-node"
  );

ecosystemNodes.forEach((node) => {

  node.addEventListener(
    "mouseenter",
    () => {

      ecosystemNodes.forEach(
        (item) =>
          item.classList.remove(
            "active"
          )
      );

      node.classList.add(
        "active"
      );

    }
  );

});


/* ===============================
   COMMAND CENTER RANDOM ACTIVITY
================================ */

const statusRows =
  document.querySelectorAll(
    ".system-status > div"
  );

function randomActivity() {

  if (!statusRows.length) {
    return;
  }

  statusRows.forEach((row) => {
    row.style.opacity = "0.72";
  });

  const random =
    Math.floor(
      Math.random() *
      statusRows.length
    );

  statusRows[random].style.opacity =
    "1";

}

setInterval(
  randomActivity,
  1800
);


/* ===============================
   PARALLAX COMMAND CENTER
================================ */

const commandCenter =
  document.querySelector(
    ".command-center"
  );

if (commandCenter) {

  window.addEventListener(
    "mousemove",
    (event) => {

      if (
        window.innerWidth < 900
      ) {
        return;
      }

      const x =
        (
          event.clientX /
          window.innerWidth -
          0.5
        ) * 4;

      const y =
        (
          event.clientY /
          window.innerHeight -
          0.5
        ) * -4;

      commandCenter.style.transform =
        `perspective(1000px)
         rotateY(${x}deg)
         rotateX(${y}deg)`;

    }
  );

}


/* ===============================
   SMOOTH INTERNAL LINKS
================================ */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach((anchor) => {

    anchor.addEventListener(
      "click",
      function(event) {

        const target =
          document.querySelector(
            this.getAttribute("href")
          );

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior:"smooth"
        });

      }
    );

  });
