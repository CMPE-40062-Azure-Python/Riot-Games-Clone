// For Navigation Bar

const navContainer = document.getElementById('nav_ContainerAboutUs') // Calling Nav Container ID

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

const scrollToTop = document.getElementById('to_surfaceAboutUs')

// Add Click Event on To The Surface
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});