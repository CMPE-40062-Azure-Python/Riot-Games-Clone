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


  //News Filter

  const Everything = document.getElementById("everything")
  const Offices = document.getElementById("offices");
  const Disciplines = document.getElementById("discipline");
  const News = document.getElementById("news");
  const Inside_riot = document.getElementById("inside_riot");
  const One_Shot = document.getElementById("one-shot");
  const Tech_Blog = document.getElementById("tech_blog");
  

  const CustomResponsive = document.getElementById("custom-box-Responsive")

  const customBox1 = document.getElementById("custom-box-1");
  const customBox2 = document.getElementById("custom-box-2");
  const customBox3 = document.getElementById("custom-box-3");
  const customBox4 = document.getElementById("custom-box-4");
  const customBox5 = document.getElementById("custom-box-5");
  const customBox6 = document.getElementById("custom-box-6");
  const customBox7 = document.getElementById("custom-box-7");
  const customBox8 = document.getElementById("custom-box-8");

  Everything.addEventListener('click', function () {
    CustomResponsive.style.top = '220px';
    customBox1.style.top = '1290px';
    customBox2.style.top = '1290px';
    customBox3.style.top = '2000px';
    customBox4.style.top = '2000px';
    document.getElementById('everythingDefault').textContent = 'Everything';
    options.style.display = 'none';
  })
  
Offices.addEventListener('click', function () {
    CustomResponsive.style.top = '880px';
    customBox1.style.top = '2000px';
    customBox2.style.top = '2000px';
    customBox3.style.top = '220px';
    customBox4.style.top = '220px';
    document.getElementById('everythingDefault').textContent = 'Offices';
    options.style.display = 'none';
});

/*Offices.addEventListener('click', () => {
    customBox3.style.display = 'block';
    customBox4.style.display = 'block';
    customBox1.style.display = 'none';
    customBox2.style.display = 'none';
    customBox5.style.display = 'none';
    customBox6.style.display = 'none';
    customBox7.style.display = 'none';
    customBox8.style.display = 'none';
    options.style.display = 'none'
});*/




  