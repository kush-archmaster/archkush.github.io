//Js code for page transition

const header = document.querySelector(".main");
var footer = document.querySelector(".footer");
var tl = new TimelineMax();

tl.fromTo(
  header,
  3,
  { height: "0vh" },
  { height: "100vh", ease: Power2.easeInOut }
);
