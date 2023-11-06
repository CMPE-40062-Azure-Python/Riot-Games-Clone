// For Navigation Bar

const navContainer = document.getElementById('nav_ContainerIndex') // Calling Nav Container ID

let isAtTop = true; // Checks if current page is at the top

// Scroll Event
window.addEventListener('scroll', () => {

  const currentScrollpos = window.pageYOffset; // current scroll position vertically

  // Checks if it scrolled
  if (currentScrollpos > 0) {
    navContainer.classList.add('nav_scrolled');
    isAtTop = false;
  } else if (!isAtTop) {
    navContainer.classList.remove('nav_scrolled');
    isAtTop = true;
  }
});

// To The Surface

const scrollToTop = document.getElementById('to_surfaceIndex')

// Add Click Event on To The Surface
scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const Seemore = document.getElementById("SeeMore");

Seemore.addEventListener('click', function () {
  window.location.href = 'news.html';
});


// For Nav Bar Hover
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  let isHovered = false;
  dropdown.addEventListener('mouseenter', () => {
    isHovered = true;
    const dropdownContent = dropdown.querySelector('.dropdown_content');
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    isHovered = false;
    const dropdownContent = dropdown.querySelector('.dropdown_content');
    setTimeout(() => {
      if (!isHovered) {
        dropdownContent.style.display = 'none';
      }
    }, 200); //Delay time
  });
});

// World Logo - Language Container

const WorldLogo = document.getElementById("world_logo");
const LanguageOption = document.getElementById("language_option");
let isOpen = false; // Display State to None

WorldLogo.addEventListener('click', function (event) {
  if (!isOpen) {
    LanguageOption.style.display = 'block';
    isOpen = true; // Show Container
  } else {
    LanguageOption.style.display = 'none';
    isOpen = false;
  }
  event.stopPropagation();
});

// Language Option Hide When Anything in the Screen is Clicked
document.addEventListener('click', function () {
  LanguageOption.style.display = 'none';
  isOpen = false;
});

// Riot Forge Side Scroll

const RiotForge_Option = document.getElementById("RiotForgeOption_container");
const items = RiotForge_Option.children; // Uses the children of RiotForgeOption_container
const ArrowLeft = document.getElementById("arrowLeft");
const ArrowRight = document.getElementById("arrowRight");

let currentIndex = 0; // Initial
const itemsDisplay = 3; // Items to Display

function ArrowUpdate() {
  ArrowLeft.style.display = 'block';
  ArrowRight.style.display = 'block';

  if (currentIndex === 0) {
    ArrowLeft.src = 'images/arrowLeft_black.png'; // Black since index on Left is 0
    ArrowRight.src = 'images/arrow_right.png';
  } else if (currentIndex + itemsDisplay >= items.length) {
    ArrowLeft.src = 'images/arrow_left.png';
    ArrowRight.src = 'images/arrowRight_black.png'; // Black since index on Right is 0
  } else {
    ArrowLeft.src = 'images/arrow_left.png';
    ArrowRight.src = 'images/arrow_right.png';
  }
}

// Displays Item Using for loop
function UpdateItemDisplay() {
  for (let i = 0; i < items.length; i++) {
    if (i >= currentIndex && i < currentIndex + itemsDisplay) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
}

ArrowUpdate();
UpdateItemDisplay();

// Arrow Click Logic
ArrowRight.addEventListener('click', function () {
  if (currentIndex < 2) {
    currentIndex++;
    ArrowUpdate();
    UpdateItemDisplay();
  }
});

ArrowLeft.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex--;
    ArrowUpdate();
    UpdateItemDisplay();
  }
});

// List of keywords and corresponding section IDs
const keywords = {
  "WORLDS 2023": "WORLDS2023",
  "What's Happening": "WhatsHappening",
  "Our Values": "OurValues",
  "Esports": "Esports",
  "Riot Forge": "RiotForge",
  "We're hiring!": "Werehiring"
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