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
    header.style.position = "static";
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
        homecolor.style.color = "#5e6576";
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
const serviesTarget = document.getElementById("services-sect");

getServicesBtn.addEventListener("click", () => {
  const targetPosition = serviesTarget.offsetTop;

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

