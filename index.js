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