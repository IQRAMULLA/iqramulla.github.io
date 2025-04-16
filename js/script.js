/* ========================================== Typing Animation ============================= */
var typed = new Typed(".typing", {
  strings: ["Python Developer", "Analyst", "Front and Backend Developer", "Designer", "Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

/* ========================================== Aside Navigation ============================= */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
      let activeIndex = getActiveSectionIndex(); // Get current active section index
      removeActiveClass();
      this.classList.add("active");
      showSection(this, activeIndex);
      if (window.innerWidth < 1200) {
          asideSectionTogglerBtn();
      }
  });
}

// Function to get the index of the currently active section
function getActiveSectionIndex() {
  for (let i = 0; i < totalSection; i++) {
      if (allSection[i].classList.contains("active")) {
          return i;
      }
  }
  return -1;
}

// Function to remove "active" class from all sections and nav links
function removeActiveClass() {
  for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active", "back-section");
  }
  for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
  }
}

// Function to show the clicked section with proper transition handling
function showSection(element, prevIndex) {
  const target = element.getAttribute("href").split("#")[1];
  const targetSection = document.querySelector("#" + target);
  
  if (prevIndex !== -1 && prevIndex !== Array.from(allSection).indexOf(targetSection)) {
      allSection[prevIndex].classList.add("back-section"); // Add transition effect
  }

  targetSection.classList.add("active");
}

// Function to update active navigation link
function updateNav(element) {
  const target = element.getAttribute("href").split("#")[1];
  for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
          navList[i].querySelector("a").classList.add("active");
      }
  }
}

// Handle "Hire Me" button click
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this, getActiveSectionIndex());
  updateNav(this);
});

// Toggle sidebar navigation
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
  }
}
