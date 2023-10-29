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


const Data = [
    {
        imageId: 'image1',
        headingId: 'h31',
        paragraphId: 'p1',
        openId: 'open1',
        imageUrl: 'images/tokyo.jpg',
        headingText: 'Tokyo',
        paragraphText: 'Japan',
        openText: '6',
      },
      {
        imageId: 'image2',
        headingId: 'h32',
        paragraphId: 'p2',
        openId: 'open2',
        imageUrl: 'images/turkey.jpg',
        headingText: 'Istanbul',
        paragraphText: 'Turkey',
        openText: '3',
      },
      {
        imageId: 'image3',
        headingId: 'h33',
        paragraphId: 'p3',
        openId: 'open3',
        imageUrl: 'images/mexico_city.jpg',
        headingText: 'Mexico City',
        paragraphText: 'Mexico',
        openText: '3',
      },
      {
        imageId: 'image1',
        headingId: 'h31',
        paragraphId: 'p1',
        openId: 'open1',
        imageUrl: 'images/barcelona.jpg',
        headingText: 'Barcelona',
        paragraphText: 'Spain',
        openText: '4',
      },
      {
        imageId: 'image2',
        headingId: 'h32',
        paragraphId: 'p2',
        openId: 'open2',
        imageUrl: 'images/china.jpg',
        headingText: 'Shanghai',
        paragraphText: 'China',
        openText: '10',
      },
      {
        imageId: 'image3',
        headingId: 'h33',
        paragraphId: 'p3',
        openId: 'open3',
        imageUrl: 'images/france.jpg',
        headingText: 'France',
        paragraphText: 'Paris',
        openText: '7',
      },
      {
        imageId: 'image1',
        headingId: 'h31',
        paragraphId: 'p1',
        openId: 'open1',
        imageUrl: 'images/dubai.jpg',
        headingText: 'Dubai',
        paragraphText: 'UAE',
        openText: '3',
      },
      {
        imageId: 'image2',
        headingId: 'h32',
        paragraphId: 'p2',
        openId: 'open2',
        imageUrl: 'images/sydney.jpg',
        headingText: 'Sydney',
        paragraphText: 'Australia',
        openText: '2',
      },
      {
        imageId: 'image3',
        headingId: 'h33',
        paragraphId: 'p3',
        openId: 'open3',
        imageUrl: 'images/singapore.jpg',
        headingText: 'Singapore',
        paragraphText: 'Singapore',
        openText: '1'
      },
  ];
  
  let currentIndex = 0;
  
  function updateRows() {

    for (let i = 0; i < 3; i++) {
      const data = Data[currentIndex + i];
       // Get the elements
    const image = document.getElementById(data.imageId);
    const heading = document.getElementById(data.headingId);
    const paragraph = document.getElementById(data.paragraphId);
    const open = document.getElementById(data.openId);

    // Apply the fading effect
    image.style.opacity = 0;
    heading.style.opacity = 0;
    paragraph.style.opacity = 0;
    open.style.opacity = 0;

    // Update content
    image.src = data.imageUrl;
    heading.textContent = data.headingText;
    paragraph.textContent = data.paragraphText;
    open.textContent = data.openText;

    // Fade in the elements
    setTimeout(() => {
        image.style.opacity = 1;
        heading.style.opacity = 1;
        paragraph.style.opacity = 1;
        open.style.opacity = 1;
      }, 700);
    }
  
    currentIndex = (currentIndex + 3) % newData.length;
  }
  
  // Update the rows every 3 seconds
  setInterval(updateRows, 5000);
