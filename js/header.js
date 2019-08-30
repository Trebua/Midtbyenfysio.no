var clicked = 0;

function toggleMenu(element) {
  element.classList.toggle("change");
  ++clicked % 2 == 0
    ? $("#mobileNav").slideUp("fast")
    : $("#mobileNav").slideDown("fast");
}

window.addEventListener("scroll", checkHeader);

function checkHeader() {
  let scrollPosition = Math.round(window.scrollY);
  // If we've scrolled 100px, add "sticky" class to the header
  if (scrollPosition > 0) {
    document.getElementById("headerContainer").classList.add("sticky");
  }
  // If not, remove "sticky" class from header
  else {
    document.getElementById("headerContainer").classList.remove("sticky");
  }
}
