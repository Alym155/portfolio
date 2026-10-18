const root = document.documentElement;
var toggleGear = document.getElementById("settings-toggle");
var settingsSidebar = document.getElementById("settings-sidebar");
var closeSettings = document.getElementById("close-settings");
var toggleTheme = document.getElementById("theme-toggle-button");
var fontOptions = document.querySelectorAll(".font-option");
var changeColorTheme = document.querySelector("#theme-colors-grid");
var reset = document.getElementById("reset-settings");
var scrollToUp = document.getElementById("scroll-to-top");
var portfolioFilter = document.querySelector("#portfolio-filters");
var portfolioCards = document.querySelectorAll(".portfolio-item");
// var portfolioGrid = document.querySelectorAll("#portfolio-grid div")

// open sidebar
toggleGear.addEventListener("click", function () {
  settingsSidebar.classList.remove("translate-x-full");
  settingsSidebar.inert = false;
  toggleGear.setAttribute("aria-expanded", "true");
  toggleGear.style.transform = "translateY(-50%) translateX(-20rem)";
});

// close sidebar
closeSettings.addEventListener("click", function () {
  toggleGear.focus(); // move focus out of the panel before it becomes inert
  toggleGear.style.transform = "translateY(-50%)";
  toggleGear.setAttribute("aria-expanded", "false");
  settingsSidebar.inert = true;
  settingsSidebar.classList.add("translate-x-full");
});

// toggle theme
toggleTheme.addEventListener("click", function () {
  root.classList.toggle("dark");
});

// change the font
for (let i = 0; i < fontOptions.length; i++) {
  fontOptions[i].addEventListener("click", function (option) {
    const target = option.currentTarget.dataset.font;
    document.body.classList.remove(
      `font-alexandria`,
      `font-tajawal`,
      `font-cairo`,
    );
    document.body.classList.add(`font-${target}`);

    for (let j = 0; j < fontOptions.length; j++) {
      fontOptions[j].classList.remove(
        "active",
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800",
      );
      fontOptions[j].classList.add("border-slate-200", "dark:border-slate-700");
      if (
        fontOptions[j] ===
        document.querySelector(`button[data-font="${target}"]`)
      ) {
        fontOptions[j].classList.add(
          "active",
          "border-primary",
          "bg-slate-50",
          "dark:bg-slate-800",
        );
      }
    }
  });
}

//change the color theme
changeColorTheme.addEventListener("click", function (e) {
  // console.log(e.target.dataset)
  const colorOption = e.target.closest("button");
  if (colorOption) {
    const primaryColor = colorOption.dataset.primary;
    const secondaryColor = colorOption.dataset.secondary;
    // console.log(primaryColor, secondaryColor);
    root.style.setProperty("--color-primary", primaryColor);
    root.style.setProperty("--color-secondary", secondaryColor);
    root.style.setProperty("--color-accent", secondaryColor);
    for (let i = 0; i < changeColorTheme.children.length; i++) {
      changeColorTheme.children[i].classList.remove(
        "ring-2",
        "ring-primary",
        "ring-offset-2",
        "ring-offset-white",
        "dark:ring-offset-slate-900",
      );

      if (changeColorTheme.children[i] === colorOption) {
        changeColorTheme.children[i].classList.add(
          "ring-2",
          "ring-primary",
          "ring-offset-2",
          "ring-offset-white",
          "dark:ring-offset-slate-900",
        );
      }
    }
  }
});

// reset page
reset.addEventListener("click", function () {
  const primaryColor = "#6366f1 ";
  const secondaryColor = "#8b5cf6";
  root.style.setProperty("--color-primary", primaryColor);
  root.style.setProperty("--color-secondary", secondaryColor);
  root.style.setProperty("--color-accent", secondaryColor);
  for (let i = 0; i < changeColorTheme.children.length; i++) {
    changeColorTheme.children[i].classList.remove(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900",
    );
  }

  changeColorTheme.children[0].classList.add(
    "ring-2",
    "ring-primary",
    "ring-offset-2",
    "ring-offset-white",
    "dark:ring-offset-slate-900",
  );

  document.body.classList.remove(
    `font-alexandria`,
    `font-tajawal`,
    `font-cairo`,
  );
  document.body.classList.add(`font-tajawal`);

  for (let j = 0; j < fontOptions.length; j++) {
    fontOptions[j].classList.remove(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800",
    );
    fontOptions[j].classList.add("border-slate-200", "dark:border-slate-700");
  }
  fontOptions[1].classList.add(
    "active",
    "border-primary",
    "bg-slate-50",
    "dark:bg-slate-800",
  );
});

// scroll to up
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToUp.classList.remove("opacity-0", "invisible");
    scrollToUp.classList.add("opacity-100", "visible");
  } else {
    scrollToUp.classList.add("opacity-0", "invisible");
    scrollToUp.classList.remove("opacity-100", "visible");
  }
});

scrollToUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// portfolio filters
portfolioFilter.addEventListener("click", function (e) {
  const filterOpthion = e.target.closest("button");

  // console.log(filterOpthion.dataset.filter);
  // console.log(targetGrid[0].dataset.category);
  if (filterOpthion) {
    const target = filterOpthion.dataset.filter;
    // console.log(target);
    for (let i = 0; i < portfolioFilter.children.length; i++) {
      portfolioFilter.children[i].classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50",
      );
      portfolioFilter.children[i].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );

      if (portfolioFilter.children[i] == filterOpthion) {
        portfolioFilter.children[i].classList.add(
          "active",
          "bg-linear-to-r",
          "from-primary",
          "to-secondary",
          "text-white",
          "shadow-lg",
          "shadow-primary/50",
        );
        portfolioFilter.children[i].classList.remove(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300",
        "border",
        "border-slate-300",
        "dark:border-slate-700",
      );
      }
    }

    for (let i = 0; i < portfolioCards.length; i++) {
      let targetCard = portfolioCards[i].dataset.category;
      // console.log(targetCard);

      if (target === "all" || target === targetCard) {
        showCard(portfolioCards[i]);
      } else {
        hideCard(portfolioCards[i]);
      }
    }
  }
});

// the card already has "transition-all duration-300", so opacity and scale animate in 300ms

// grow + fade a card in
function showCard(card) {
  clearTimeout(card.animTimer); // cancel any animation still running on this card

  // already visible -> just make sure it's full size
  if (!card.classList.contains("hidden")) {
    card.style.opacity = 1;
    card.style.transform = "scale(1)";
    return;
  }

  // wait for the other cards to finish shrinking, then show this one
  card.animTimer = setTimeout(function () {
    card.classList.remove("hidden");
    card.animTimer = setTimeout(function () {
      card.style.opacity = 1;
      card.style.transform = "scale(1)";
    }, 50);
  }, 300);
}

// shrink + fade a card out, then hide it
function hideCard(card) {
  clearTimeout(card.animTimer);

  card.style.opacity = 0;
  card.style.transform = "scale(0)";

  card.animTimer = setTimeout(function () {
    card.classList.add("hidden");
  }, 300);
}

// testimonials carousel
var carousel = document.getElementById("testimonials-carousel");
var testimonialCards = document.querySelectorAll(".testimonial-card");
var nextTestimonial = document.getElementById("next-testimonial");
var prevTestimonial = document.getElementById("prev-testimonial");
var indicatorsBox = document.querySelector(".carousel-indicator").parentElement;
var currentSlide = 0;
var autoPlay;

// how many cards fit on the screen (same breakpoints as w-full sm:w-1/2 lg:w-1/3)
function cardsPerView() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

// last position we can move to without showing empty space
function lastSlide() {
  return testimonialCards.length - cardsPerView();
}

// one dot for each position (4 on desktop, 5 on tablet, 6 on phone)
function buildIndicators() {
  indicatorsBox.innerHTML = "";
  for (let i = 0; i <= lastSlide(); i++) {
    const dot = document.createElement("button");
    dot.className =
      "carousel-indicator w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer";
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "التوصية " + (i + 1));
    dot.dataset.index = i;
    indicatorsBox.appendChild(dot);
  }
}

function goToSlide(index) {
  // loop around at both ends
  if (index > lastSlide()) index = 0;
  if (index < 0) index = lastSlide();
  currentSlide = index;

  // the page is RTL, so the next cards are on the left -> move the row to the right (+)
  const cardWidth = testimonialCards[0].offsetWidth;
  carousel.style.transform = "translateX(" + currentSlide * cardWidth + "px)";

  for (let i = 0; i < indicatorsBox.children.length; i++) {
    const isActive = i === currentSlide;
    indicatorsBox.children[i].classList.toggle("bg-accent", isActive);
    indicatorsBox.children[i].classList.toggle("bg-slate-400", !isActive);
    indicatorsBox.children[i].classList.toggle("dark:bg-slate-600", !isActive);
    indicatorsBox.children[i].setAttribute("aria-selected", isActive);
  }
}

// clicking restarts the 5-second timer so it doesn't jump right after a click
nextTestimonial.addEventListener("click", function () {
  goToSlide(currentSlide + 1);
  startAutoPlay();
});

prevTestimonial.addEventListener("click", function () {
  goToSlide(currentSlide - 1);
  startAutoPlay();
});

indicatorsBox.addEventListener("click", function (e) {
  const dot = e.target.closest("button");
  if (dot) {
    goToSlide(Number(dot.dataset.index));
    startAutoPlay();
  }
});

// move to the next card every 5 seconds, pause while the mouse is over the carousel
function startAutoPlay() {
  clearInterval(autoPlay);
  autoPlay = setInterval(function () {
    goToSlide(currentSlide + 1);
  }, 5000);
}

carousel.addEventListener("mouseenter", function () {
  clearInterval(autoPlay);
});
carousel.addEventListener("mouseleave", startAutoPlay);

// card width and number of dots change with the screen size
window.addEventListener("resize", function () {
  buildIndicators();
  goToSlide(Math.min(currentSlide, lastSlide()));
});

buildIndicators();
goToSlide(0);
startAutoPlay();

// mobile menu (burger icon)
var menuBtn = document.getElementById("mobile-menu-btn");
var navLinks = document.getElementById("nav-links");
var navAnchors = document.querySelectorAll(".nav-links a");

function setMenu(open) {
  navLinks.classList.toggle("active", open); // .nav-links.active slides the menu in (style.css)
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
  // swap the icon: bars when closed, X when open
  menuBtn.firstElementChild.classList.toggle("fa-bars", !open);
  menuBtn.firstElementChild.classList.toggle("fa-xmark", open);
}

menuBtn.addEventListener("click", function () {
  setMenu(!navLinks.classList.contains("active"));
});

// close the menu after choosing a link
for (let i = 0; i < navAnchors.length; i++) {
  navAnchors[i].addEventListener("click", function () {
    setMenu(false);
  });
}

// navbar underline: mark the link of the section that is on the screen
function updateActiveLink() {
  let current = navAnchors[0];
  for (let i = 0; i < navAnchors.length; i++) {
    const section = document.querySelector(navAnchors[i].getAttribute("href"));
    // the section's top has passed the bottom of the fixed navbar
    if (section && section.getBoundingClientRect().top <= 120) {
      current = navAnchors[i];
    }
  }
  // at the very bottom of the page, the last section may be too short to reach the top
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
    current = navAnchors[navAnchors.length - 1];
  }

  for (let i = 0; i < navAnchors.length; i++) {
    navAnchors[i].classList.toggle("active", navAnchors[i] === current); // .nav-links a.active draws the underline
  }
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700"

// active bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50
