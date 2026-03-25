document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in-image");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade2");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slideshow").forEach(slideshow => {
    const track = slideshow.querySelector(".slides-track");
    const slides = track.querySelectorAll("img");
    let index = 0;

    const first = slides[0];

    function init() {
      const ratio = first.naturalWidth / first.naturalHeight;
      const slideWidth = first.offsetHeight * ratio;

      slideshow.style.width = slideWidth + "px";

      slides.forEach(img => {
        img.style.setProperty("--ratio", ratio);
      });

      setInterval(() => {
        index++;
        track.style.transition = "transform 0.8s ease-in-out";
        track.style.transform = `translateX(-${slideWidth * index}px)`;

        if (index === slides.length - 1) {
          setTimeout(() => {
            track.style.transition = "none";
            track.style.transform = "translateX(0)";
            index = 0;
          }, 800);
        }
      }, 3000);
    }

    if (first.complete) init();
    else first.addEventListener("load", init);
  });
});

