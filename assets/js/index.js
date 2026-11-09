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
var carousel = document.getElementById("testimonials-carousel");
var testimonialCards = document.querySelectorAll(".testimonial-card");
var nextTestimonial = document.getElementById("next-testimonial");
var prevTestimonial = document.getElementById("prev-testimonial");
var indicatorsBox = document.querySelector(".carousel-indicator").parentElement;
var currentSlide = 0;
var autoPlay;
var menuBtn = document.getElementById("mobile-menu-btn");
var navLinks = document.getElementById("nav-links");
var navAnchors = document.querySelectorAll(".nav-links a");

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
  toggleGear.focus();
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

// cards 
function showCard(card) {
  card.dataset.visible = "yes";

  if (card.classList.contains("hidden")) {
    setTimeout(function () {
      if (card.dataset.visible === "yes") {
        card.classList.remove("hidden");
      }
    }, 300);

    setTimeout(function () {
      if (card.dataset.visible === "yes") {
        card.style.opacity = 1;
        card.style.transform = "scale(1)";
      }
    }, 350);
  } else {
    card.style.opacity = 1;
    card.style.transform = "scale(1)";
  }
}

function hideCard(card) {
  card.dataset.visible = "no";
  card.style.opacity = 0;
  card.style.transform = "scale(0)";

  setTimeout(function () {
    if (card.dataset.visible === "no") {
      card.classList.add("hidden");
    }
  }, 300);
}

// carousel part 

function cardsPerView() {
  if (window.innerWidth >= 1024) {
    return 3;
  } else if (window.innerWidth >= 640) {
    return 2;
  } else {
    return 1;
  }
}

function lastSlide() {
  return testimonialCards.length - cardsPerView();
}

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
  if (index > lastSlide()) {
    index = 0;
  }
  if (index < 0) {
    index = lastSlide();
  }
  currentSlide = index;

  const cardWidth = testimonialCards[0].offsetWidth;
  carousel.style.transform = "translateX(" + currentSlide * cardWidth + "px)";

  for (let i = 0; i < indicatorsBox.children.length; i++) {
    const dot = indicatorsBox.children[i];
    if (i === currentSlide) {
      dot.classList.add("bg-accent");
      dot.classList.remove("bg-slate-400", "dark:bg-slate-600");
      dot.setAttribute("aria-selected", "true");
    } else {
      dot.classList.remove("bg-accent");
      dot.classList.add("bg-slate-400", "dark:bg-slate-600");
      dot.setAttribute("aria-selected", "false");
    }
  }
}

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

window.addEventListener("resize", function () {
  buildIndicators();
  if (currentSlide > lastSlide()) {
    currentSlide = lastSlide();
  }
  goToSlide(currentSlide);
});

buildIndicators();
goToSlide(0);
startAutoPlay();

// burger menu
function openMenu() {
  const icon = menuBtn.firstElementChild;
  navLinks.classList.add("active");
  menuBtn.setAttribute("aria-expanded", "true");
  menuBtn.setAttribute("aria-label", "إغلاق القائمة");
  icon.classList.remove("fa-bars");
  icon.classList.add("fa-xmark");
}

function closeMenu() {
  const icon = menuBtn.firstElementChild;
  navLinks.classList.remove("active");
  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-label", "فتح القائمة");
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");
}

menuBtn.addEventListener("click", function () {
  if (navLinks.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

for (let i = 0; i < navAnchors.length; i++) {
  navAnchors[i].addEventListener("click", function () {
    closeMenu();
  });
}

function updateActiveLink() {
  let current = navAnchors[0];
  for (let i = 0; i < navAnchors.length; i++) {
    const section = document.querySelector(navAnchors[i].getAttribute("href"));
    if (section && section.getBoundingClientRect().top <= 120) {
      current = navAnchors[i];
    }
  }
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
    current = navAnchors[navAnchors.length - 1];
  }

  for (let i = 0; i < navAnchors.length; i++) {
    navAnchors[i].classList.remove("active");
  }
  current.classList.add("active");
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700"

// active bg-linear-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50
