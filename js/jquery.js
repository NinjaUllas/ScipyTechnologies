

$(".home-owl").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  stagePadding: 0,
  smartSpeed: 700,
  dots: false,
  responsiveClass: true,
  responsiveBaseElement: "section",
  margin: 0,
  nav: false,
  navText: ["⇽", "⇾"],
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".service-owl").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  stagePadding: 0,
  dots: true,
  responsiveClass: true,
  margin: 0,
  nav: false,
  navText: ["⇽", "⇾"],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1400: {
      items: 4,
    },
  },
});

$(".gallery-owl").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 5,
  dots: true,
  autoplayTimeout: 5000,
  smartSpeed: 500,
  autoplayHoverPause: true,
  responsiveClass: true,
  stagePadding: 0,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1200: {
      items: 4,
    },
    1500: {
      items: 5,
    },
  },
});

$(".clients-owl").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 500,
  dots: false,
  stagePadding: 0,
  nav: false,
  responsive: {
    0: {
      items: 3,
    },
    700: {
      items: 4,
    },
    900: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});
