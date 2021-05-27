//Js code for page transition

const header = document.querySelector(".main");
var about = document.querySelector(".about");
var tl = new TimelineMax();

tl.fromTo(
  header,
  4,
  { height: "0vh" },
  { height: "100vh", ease: Power2.easeInOut }
);
fromTo(
  about,
  3,
  { height: "0vh" },
  { height: "100vh", ease: Power2.easeInOut }
);
