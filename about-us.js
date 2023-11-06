// For Navigation Bar

const navContainer = document.getElementById("nav_ContainerAboutUs"); // Calling Nav Container ID

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

const scrollToTop = document.getElementById("to_surfaceAboutUs");

// Add Click Event on To The Surface
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const newData = [
  {
    imageId: "image1",
    headingId: "h31",
    paragraphId: "p1",
    openId: "open1",
    posId: "pos1",
    imageUrl: "images/tokyo.jpg",
    headingText: "Tokyo",
    paragraphText: "Japan",
    openText: "6",
    posText: "Open Positions:",
  },
  {
    imageId: "image2",
    headingId: "h32",
    paragraphId: "p2",
    openId: "open2",
    posId: "pos2",
    imageUrl: "images/turkey.jpg",
    headingText: "Istanbul",
    paragraphText: "Turkey",
    openText: "3",
    posText: "Open Positions:",
  },
  {
    imageId: "image3",
    headingId: "h33",
    paragraphId: "p3",
    openId: "open3",
    posId: "pos3",
    imageUrl: "images/mexico_city.jpg",
    headingText: "Mexico City",
    paragraphText: "Mexico",
    openText: "3",
    posText: "Open Positions:",
  },
  {
    imageId: "image1",
    headingId: "h31",
    paragraphId: "p1",
    openId: "open1",
    posId: "pos1",
    imageUrl: "images/barcelona.jpg",
    headingText: "Barcelona",
    paragraphText: "Spain",
    openText: "4",
    posText: "Open Positions:",
  },
  {
    imageId: "image2",
    headingId: "h32",
    paragraphId: "p2",
    openId: "open2",
    posId: "pos2",
    imageUrl: "images/china.jpg",
    headingText: "Shanghai",
    paragraphText: "China",
    openText: "10",
    posText: "Open Positions:",
  },
  {
    imageId: "image3",
    headingId: "h33",
    paragraphId: "p3",
    openId: "open3",
    posId: "pos3",
    imageUrl: "images/france.jpg",
    headingText: "France",
    paragraphText: "Paris",
    openText: "7",
    posText: "Open Positions:",
  },
  {
    imageId: "image1",
    headingId: "h31",
    paragraphId: "p1",
    openId: "open1",
    posId: "pos1",
    imageUrl: "images/south_korea.webp",
    headingText: "Seoul",
    paragraphText: "Korea",
    openText: "9",
    posText: "Open Positions:",
  },
  {
    imageId: "image2",
    headingId: "h32",
    paragraphId: "p2",
    openId: "open2",
    posId: "pos2",
    imageUrl: "images/sau_paulo.jpg",
    headingText: "Sau Paulo",
    paragraphText: "Brazil",
    openText: "5",
    posText: "Open Positions:",
  },
  {
    imageId: "image3",
    headingId: "h33",
    paragraphId: "p3",
    openId: "open3",
    posId: "pos3",
    imageUrl: "images/mumbai.jpg",
    headingText: "Mumbai",
    paragraphText: "India",
    openText: "12",
    posText: "Open Positions:",
  },
  {
    imageId: "image1",
    headingId: "h31",
    paragraphId: "p1",
    openId: "open1",
    posId: "pos1",
    imageUrl: "images/dubai.jpg",
    headingText: "Dubai",
    paragraphText: "UAE",
    openText: "3",
    posText: "Open Positions:",
  },
  {
    imageId: "image2",
    headingId: "h32",
    paragraphId: "p2",
    openId: "open2",
    posId: "pos2",
    imageUrl: "images/sydney.jpg",
    headingText: "Sydney",
    paragraphText: "Australia",
    openText: "2",
    posText: "Open Positions:",
  },
  {
    imageId: "image3",
    headingId: "h33",
    paragraphId: "p3",
    openId: "open3",
    posId: "pos3",
    imageUrl: "images/singapore.jpg",
    headingText: "Singapore",
    paragraphText: "Singapore",
    openText: "1",
    posText: "Open Positions:",
  },
];

let currentIndex = 0;

function updateRows() {
  for (let i = 0; i < 3; i++) {
    const data = newData[currentIndex + i];
    // Get the elements
    const image = document.getElementById(data.imageId);
    const heading = document.getElementById(data.headingId);
    const paragraph = document.getElementById(data.paragraphId);
    const opening = document.getElementById(data.openId);
    const positions = document.getElementById(data.posId);

    // Apply the fading effect
    image.style.opacity = 0.1;
    heading.style.opacity = 0.1;
    paragraph.style.opacity = 0.1;
    opening.style.opacity = 0.1;
    positions.style.opacity = 0.1;

    // Update content
    image.src = data.imageUrl;
    heading.textContent = data.headingText;
    paragraph.textContent = data.paragraphText;
    opening.textContent = data.openText;
    positions.textContent = data.posText;

    // Fade in the elements
    setTimeout(() => {
      image.style.opacity = 1;
      heading.style.opacity = 1;
      paragraph.style.opacity = 1;
      opening.style.opacity = 1;
      positions.style.opacity = 1;
    }, 700);
  }

  currentIndex = (currentIndex + 3) % newData.length;
}

// Update the rows every 5 seconds
setInterval(updateRows, 5000);

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
  "WHO ARE WE?": "WHOAREWE?",
  "Our Values": "OurValues",
  "Diversity & Inclusion": "DiversityInclusion",
  "Social Impact": "SocialImpact",
  "We are global": "WereGlobal",
  "Work With Us": "WorkwithUs",
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