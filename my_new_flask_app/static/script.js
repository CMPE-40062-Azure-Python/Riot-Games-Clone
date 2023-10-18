// document.addEventListener("scroll", function () {
//   const navbar = document.querySelector(".top-bar");
//   const navbarHeight = 100;

//   const distanceFromTop = Math.abs(
//     document.body.getBoundingClientRect().top
//   );

//   if (distanceFromTop >= navbarHeight) {
//     navbar.classList.add("fixed-top");
//     navbar.style.padding = "25px 20px"; // Adjusted padding
//   } else {
//     navbar.classList.remove("fixed-top");
//     navbar.style.padding = "25px 20px"; // Adjusted padding
//   }
// });

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".header");
  const content = document.querySelector(".content");

  header.addEventListener("click", function() {
      content.style.display = content.style.display === "none" ? "block" : "none";
  });
});
