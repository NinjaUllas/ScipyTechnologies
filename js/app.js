// header section for scoll down fixed postion
const header = document.querySelector("header");
const navbar = document.querySelector(".nav-bar");
let isHeaderSticky = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    if (!isHeaderSticky) {
      header.style.position = "fixed";
      header.style.top = "0px"; // Adjust this value to match your header height
      header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
      navbar.style.padding = "8px 0";
      header.style.backgroundColor = "#fff";
      isHeaderSticky = true;
    }
  } else {
    header.style.position = "absolute";
    header.style.top = "0"
    header.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0.2)";
    navbar.style.padding = "28px 0 8px 0";
    header.style.backgroundColor = "transparent";
    navbar.style.backgroundColor = "transparent";
    isHeaderSticky = false;
  }
});

// Nav Menu Active Color change
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-list .active-link");
  const homecolor = document.querySelector(".home-color");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      // Remove the 'active' class from all links
      links.forEach(function (link) {
        link.classList.remove("active");
        homecolor.style.color = "#1d2c38";
      });
      // Add the 'active' class to the clicked link
      link.classList.add("active");
      // Check if the clicked link is the "Home" link
      if (link.classList.contains("home-color")) {
        // Change the text color of the element with class "home-color"
        const homecolor = document.querySelector(".home-color");
        if (homecolor) {
          homecolor.style.color = "#0092FF"; // Change the color as needed
        }
      }
    });
  });
});
const homeBtn = document.getElementById("home");
const sideHomeBtn = document.getElementById("home-sidebar");
const homepage = document.getElementById("home-page");

sideHomeBtn.addEventListener("click", () => {
  let homeTarget = homepage.offsetTop;
  window.scrollTo({
    top: homeTarget,
    behavior: "smooth",
  });
});

homeBtn.addEventListener("click", () => {
  let homeTarget = homepage.offsetTop;
  window.scrollTo({
    top: homeTarget,
    behavior: "smooth",
  });
});

const aboutusBtn = document.getElementById("About-us");
const aboutSidebarBtn = document.getElementById("About-us-sidebar");
const aboutSection = document.getElementById("aboutus-sect");

aboutSidebarBtn.addEventListener("click", () => {
  let aboutTarget = aboutSection.offsetTop;
  window.scrollTo({
    top: aboutTarget,
    behavior: "smooth",
  });
});

aboutusBtn.addEventListener("click", () => {
  let aboutTarget = aboutSection.offsetTop;
  window.scrollTo({
    top: aboutTarget,
    behavior: "smooth",
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const openSidebarButton = document.querySelector(".sidemenu-btn");
  const sidebar = document.querySelector(".sidebar");

  sidebar.style.width = "0";

  openSidebarButton.addEventListener("click", function () {
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "250px";
    }
  });
});

const getServicesBtn = document.getElementById("service-btn");
const servicesidebarBtn = document.getElementById("Service-sidebar");
const serviesTarget = document.getElementById("services-sect");

servicesidebarBtn.addEventListener("click", () => {
  let targetPosition = serviesTarget.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

getServicesBtn.addEventListener("click", () => {
  let targetPosition = serviesTarget.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

const contactBtn = document.getElementById("Contact-us")
const contactSidebarBtn = document.getElementById("contact-sidebar")
const contactSection = document.getElementById("contact-sect")

contactBtn.addEventListener("click", () => {
  let targetPosition = contactSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

contactSidebarBtn.addEventListener("click", () => {
  let targetPosition = contactSection.offsetTop;
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

// Mouse over service card for animation

const card = document.querySelectorAll(".cards");

card.addEventListener("mouseover", () => {
  card.style.backgroundColor = "#0092ff";
});
card.addEventListener("mouseout", () => {
  card.style.backgroundColor = "#f3f4f5";
});

const homepageFadeIn = document.getElementById("home-page");
const FadeElements = document.querySelectorAll(".fade-in");

function checkScroll() {
  homepageFadeIn.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      homeFadeHeading.classList.add("active");
    } else {
      homeFadeHeading.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

// Initial check when the page loads
checkScroll();
