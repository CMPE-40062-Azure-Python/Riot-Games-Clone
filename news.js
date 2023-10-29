// For Navigation Bar

const navContainer = document.getElementById('nav_ContainerNews') // Calling Nav Container ID

let isAtTop = true; // Checks if current page is at the top

// Scroll Event
window.addEventListener('scroll', () => { 

    const currentScrollpos = window.pageYOffset; // current scroll position vertically

    if (currentScrollpos > 0) {
        navContainer.classList.add('nav_scrolled');
        isAtTop = false;
    } else if (!isAtTop) {
        navContainer.classList.remove('nav_scrolled');
        isAtTop = true;
    }
});

// To The Surface

const scrollToTop = document.getElementById('to_surfaceNews')

// Add Click Event on To The Surface
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


//Dropdown Button 
  const  newsDropdown = document.getElementById("NewsDropdown");
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

  // X Button Inside Options
  const xButton = document.getElementById("x_button");

  xButton.addEventListener('click', function () {
    options.style.display = "none";
  });


  