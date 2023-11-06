// For Navigation Bar

const navContainer = document.getElementById("nav_ContainerNews"); // Calling Nav Container ID

let isAtTop = true; // Checks if current page is at the top

// Scroll Event
window.addEventListener("scroll", () => {
  const currentScrollpos = window.pageYOffset; // current scroll position vertically

  if (currentScrollpos > 0) {
    navContainer.classList.add("nav_scrolled");
    isAtTop = false;
  } else if (!isAtTop) {
    navContainer.classList.remove("nav_scrolled");
    isAtTop = true;
  }
});

// To The Surface

const scrollToTop = document.getElementById("to_surfaceNews");

// Add Click Event on To The Surface
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Dropdown Button
const newsDropdown = document.getElementById("NewsDropdown");
const options = document.getElementById("options");

options.style.display = "none"; // Initial state of Options

newsDropdown.addEventListener("click", function () {
  if (options.style.display === "none") {
    options.style.display = "block";
    options.style.zIndex = 100;
  } else {
    options.style.display = "none";
    background.style.display = "none";
  }
});

// X Button Inside Filter
const xButton = document.getElementById("x_button");

xButton.addEventListener("click", function () {
  options.style.display = "none";
});

//News Filter

const Everything = document.getElementById("everything");
const Offices = document.getElementById("offices");
const Disciplines = document.getElementById("disciplines");
const News = document.getElementById("news");
const Inside_riot = document.getElementById("inside_riot");
const One_Shot = document.getElementById("one_shot");
const Tech_Blog = document.getElementById("tech_blog");

const CustomResponsive = document.getElementById("custom-box-Responsive");

const customBox1 = document.getElementById("custom-box-1");
const customBox2 = document.getElementById("custom-box-2");
const customBox3 = document.getElementById("custom-box-3");
const customBox4 = document.getElementById("custom-box-4");
const customBox5 = document.getElementById("custom-box-5");
const customBox6 = document.getElementById("custom-box-6");
const customBox7 = document.getElementById("custom-box-7");
const customBox8 = document.getElementById("custom-box-8");

Everything.addEventListener("click", function () {
  CustomResponsive.style.top = "220px";
  customBox1.style.top = "1290px";
  customBox2.style.top = "1290px";
  customBox3.style.top = "2000px";
  customBox4.style.top = "2000px";
  customBox5.style.top = "2700px";
  customBox6.style.top = "2700px";
  customBox7.style.top = "3500px";
  customBox8.style.top = "3500px";
  document.getElementById("everythingDefault").textContent = "Everything";
  options.style.display = "none";
});

Offices.addEventListener("click", function () {
  CustomResponsive.style.top = "1000px";
  customBox1.style.top = "2110px";
  customBox2.style.top = "2110px";
  customBox3.style.top = "220px";
  customBox4.style.top = "220px";
  customBox5.style.top = "2810px";
  customBox6.style.top = "2810px";
  customBox7.style.top = "3550px";
  customBox8.style.top = "3550px";
  document.getElementById("everythingDefault").textContent = "Offices";
  options.style.display = "none";
});

Disciplines.addEventListener("click", function () {
  CustomResponsive.style.top = "1000px";
  customBox1.style.top = "2050px";
  customBox2.style.top = "2050px";
  customBox3.style.top = "2760px";
  customBox4.style.top = "2760px";
  customBox5.style.top = "3400px";
  customBox6.style.top = "3400px";
  customBox7.style.top = "220px";
  customBox8.style.top = "220px";
  document.getElementById("everythingDefault").textContent = "Disciplines";
  options.style.display = "none";
});

News.addEventListener("click", function () {
  CustomResponsive.style.top = "1000px";
  customBox1.style.top = "2050px";
  customBox2.style.top = "2050px";
  customBox3.style.top = "2760px";
  customBox4.style.top = "2760px";
  customBox5.style.top = "220px";
  customBox6.style.top = "220px";
  customBox7.style.top = "3500px";
  customBox8.style.top = "3500px";
  document.getElementById("everythingDefault").textContent = "News";
  options.style.display = "none";
});

Inside_riot.addEventListener("click", function () {
  CustomResponsive.style.top = "900px";
  customBox1.style.top = "220px";
  customBox2.style.top = "220px";
  customBox3.style.top = "2050px";
  customBox4.style.top = "2050px";
  customBox5.style.top = "2760px";
  customBox6.style.top = "2760px";
  customBox7.style.top = "3500px";
  customBox8.style.top = "3500px";
  document.getElementById("everythingDefault").textContent = "Inside Riot";
  options.style.display = "none";
});
One_Shot.addEventListener("click", function () {
  CustomResponsive.style.top = "1000px";
  customBox1.style.top = "2110px";
  customBox2.style.top = "2110px";
  customBox3.style.top = "220px";
  customBox4.style.top = "220px";
  customBox5.style.top = "2810px";
  customBox6.style.top = "2810px";
  customBox7.style.top = "3550px";
  customBox8.style.top = "3550px";
  document.getElementById("everythingDefault").textContent = "One Shot";
  options.style.display = "none";
});

Tech_Blog.addEventListener("click", function () {
  CustomResponsive.style.top = "900px";
  customBox1.style.top = "220px";
  customBox2.style.top = "220px";
  customBox3.style.top = "2050px";
  customBox4.style.top = "2050px";
  customBox5.style.top = "2760px";
  customBox6.style.top = "2760px";
  customBox7.style.top = "3500px";
  customBox8.style.top = "3500px";
  document.getElementById("everythingDefault").textContent = "Tech Blog";
  options.style.display = "none";
});

// For Nav Bar
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  let isHovered = false;
  dropdown.addEventListener("mouseenter", () => {
    isHovered = true;
    const dropdownContent = dropdown.querySelector(".dropdown_content");
    dropdownContent.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", () => {
    isHovered = false;
    const dropdownContent = dropdown.querySelector(".dropdown_content");
    setTimeout(() => {
      if (!isHovered) {
        dropdownContent.style.display = "none";
      }
    }, 200); //Delay time
  });
});

// World Logo - Language Container

const WorldLogo = document.getElementById("world_logo");
const LanguageOption = document.getElementById("language_option");
let isOpen = false; // Display State to None

WorldLogo.addEventListener("click", function (event) {
  if (!isOpen) {
    LanguageOption.style.display = "block";
    isOpen = true; // Show Container
  } else {
    LanguageOption.style.display = "none";
    isOpen = false;
  }
  event.stopPropagation();
});

// Language Option Hide When Anything in the Screen is Clicked
document.addEventListener("click", function () {
  LanguageOption.style.display = "none";
  isOpen = false;
});

// List of keywords and corresponding section IDs
const keywords = {
  Everything: "custom-box-Responsive",
  News: "custom-box-5",
  Offices: "custom-box-3",
  Disciplines: "custom-box-7",
  "Inside Riot": "custom-box-2",
  "One Shot": "custom-box-3",
  "Tech Blog": "custom-box-2",
};

const searchBox = document.querySelector(".search_box");
const searchIcon = document.querySelector(".search_icon");

searchIcon.addEventListener("click", function () {
  const keyword = searchBox.value.trim();

  if (keywords.hasOwnProperty(keyword)) {
    // Scroll to the section with the matching keyword
    const sectionId = keywords[keyword];
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Keyword not found, show the list of keywords to use
    const keywordList = Object.keys(keywords).join(", ");
    alert("Keyword not found. List of keywords to use: " + keywordList);
  }
});