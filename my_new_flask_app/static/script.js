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
// Get the dropdown content element
var dropdownContent = document.querySelector('.dropdown-content');

// Get the links inside the dropdown content
var links = dropdownContent.getElementsByTagName('a');

// Initialize a variable to keep track of the maximum width
var maxWidth = 0;

// Loop through the links to find the maximum width
for (var i = 0; i < links.length; i++) {
    if (links[i].offsetWidth > maxWidth) {
        maxWidth = links[i].offsetWidth;
    }
}

// Set the width of the dropdown content to the maximum width
dropdownContent.style.width = maxWidth + 'px';


function toggleLanguages() {
  var languageDropdown = document.getElementById("languages");
  languageDropdown.classList.toggle("show");
}