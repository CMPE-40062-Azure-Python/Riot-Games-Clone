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