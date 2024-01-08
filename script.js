const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
//const displayOptions = document.querySelectorAll(".options");
const expandableOptions = document.querySelectorAll(".expandable");
const dropEffect = document.querySelectorAll(".dropDown");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

expandableOptions.forEach((option) => {
  option.addEventListener("click", function (event) {
    event.preventDefault();

    const arrowImg = this.nextElementSibling.querySelector(".arrow-img");

    arrowImg.classList.toggle("rotate");
  });
});

dropEffect.forEach((element) => {
  element.addEventListener("click", function () {
    const expandedElement = this.querySelector(".expanded__company");
    expandedElement.classList.toggle("expanded");
  });
});
