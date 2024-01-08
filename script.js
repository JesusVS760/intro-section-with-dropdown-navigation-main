const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const displayOption = document.querySelectorAll(".text__option");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

displayOptions.forEach((option) => {
  option.addEventListener("click", () => {
    option.classList.remove("expanded");
  });
});
