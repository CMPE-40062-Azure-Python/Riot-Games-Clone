function processSelectedFolder() {
  const folderInput = document.getElementById("folderInput");
  const selectedFiles = folderInput.files;

  if (selectedFiles.length > 0) {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      formData.append("folder", file, file.name);
    }

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Folder uploaded successfully");
        } else {
          console.error("Folder upload failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var firstImage = document.querySelector('.gallery-container img');
  var firstImageUrl = firstImage.getAttribute('src');
  var firstImageFileName = firstImageUrl.split('/').pop();
  var placeholder = document.getElementById('placeholder');
  var currentImageIndex = 0;
  placeholder.setAttribute('src', firstImageUrl);
  displayFilename(firstImageFileName);


  var images = document.querySelectorAll(".card-img-top");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
        var fileName = this.src.split('/').pop();
        updatePlaceholder(this.src, fileName);
        updateTableDetails(fileName); // Add this line
    });
});
// Function to update the table on app initialization
  function updateTableOnAppStart() {
    const firstImage = document.querySelector('.gallery-container img');
    const firstImageUrl = firstImage.getAttribute('src');
    const firstImageFileName = firstImageUrl.split('/').pop();
    const placeholder = document.getElementById('placeholder');
    const currentImageIndex = 0;
    placeholder.setAttribute('src', firstImageUrl);
    displayFilename(firstImageFileName);
    updateTableDetails(firstImageFileName);
  }

  // Call the function to update the table on app start
  updateTableOnAppStart();


  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');

  prevButton.addEventListener("click", function () {
    var images = document.querySelectorAll(".card-img-top");
    if (currentImageIndex > 0) {
      currentImageIndex--;
      var prevImage = images[currentImageIndex];
      var prevImageFileName = prevImage.src.split('/').pop();
      updatePlaceholder(prevImage.src, prevImageFileName, currentImageIndex);

      // Update inspectImage in the modal
      var inspectImage = document.getElementById('inspectImage');
      inspectImage.src = prevImage.src;

      // Get the data for the currently displayed image
      var fileName = document.getElementById('filenameDisplay').textContent;
      var treeID = document.getElementById('treeidDisplay').textContent;
      var diagnosis = document.getElementById('diagnosisDisplay').textContent;
      var author = document.getElementById('authorDisplay').textContent;
      var part = document.getElementById('partDisplay').textContent;
      var status = document.getElementById('statusDisplay').textContent;
      var location = document.getElementById('locationDisplay').textContent;
      var captureTime = document.getElementById('capturetimeDisplay').textContent;
      var modifiedTime = document.getElementById('modifiedtimeDisplay').textContent;

      // Update the modal table
      updateModalTable(fileName, treeID, diagnosis, author, part, status, location, captureTime, modifiedTime);
    }


  });

  nextButton.addEventListener("click", function () {
    var images = document.querySelectorAll(".card-img-top");
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      var nextImage = images[currentImageIndex];
      var nextImageFileName = nextImage.src.split('/').pop();
      updatePlaceholder(nextImage.src, nextImageFileName, currentImageIndex);

      // Update inspectImage in the modal
      var inspectImage = document.getElementById('inspectImage');
      inspectImage.src = nextImage.src;

      // Get the data for the currently displayed image
      var fileName = document.getElementById('filenameDisplay').textContent;
      var treeID = document.getElementById('treeidDisplay').textContent;
      var diagnosis = document.getElementById('diagnosisDisplay').textContent;
      var author = document.getElementById('authorDisplay').textContent;
      var part = document.getElementById('partDisplay').textContent;
      var status = document.getElementById('statusDisplay').textContent;
      var location = document.getElementById('locationDisplay').textContent;
      var captureTime = document.getElementById('capturetimeDisplay').textContent;
      var modifiedTime = document.getElementById('modifiedtimeDisplay').textContent;

      // Update the modal table
      updateModalTable(fileName, treeID, diagnosis, author, part, status, location, captureTime, modifiedTime);
    }
  });

  // Add event listener for quarantine button click
  var quarantineButton = document.getElementById('quarantineButton');
  if (quarantineButton) {
    quarantineButton.addEventListener('click', function () {
      var quarantineModal = new bootstrap.Modal(document.getElementById('quarantineModal'));
      var placeholderImage = document.getElementById('placeholder');
      var quarantineImage = document.getElementById('quarantineImage');
      var quarantineText = document.getElementById('quarantineText');
      var currentImageName = document.getElementById('filenameDisplay').textContent;

      // Set the source of the image in the modal
      quarantineImage.src = placeholderImage.src;

      // Set the quarantine confirmation text
      quarantineText.textContent = " " + currentImageName + "?";

      // Show the modal
      quarantineModal.show();

      // Add event listener for confirm quarantine button click
      document.getElementById('confirmQuarantine').addEventListener('click', function () {
        // Add code here to handle quarantine action
        console.log("Image quarantined: " + currentImageName);

        // Close the modal
        quarantineModal.hide();
      });
    });
  }


  // Add a console.log statement to verify if this code block is executed
  console.log("DOMContentLoaded event handler executed");
});


function displayFilename(filename) {
  console.log("Displaying filename:", filename);
  var filenameDisplay = document.getElementById("filenameDisplay");
  filenameDisplay.textContent = filename;
}
function updatePlaceholder(imageSrc, fileName, index) {
  var placeholder = document.getElementById("placeholder");
  placeholder.src = imageSrc;
  displayFilename(fileName);

  currentImageIndex = index; // Update the current image index

  console.log("updatePlaceholder function called");

  // Update table details when placeholder is updated
  updateTableDetails(fileName);
}

function updateModalTable(filename, treeid, diagnosis, author, part, status, location, capturetime, modifiedtime) {
  document.getElementById('modalfilenameDisplay').innerHTML = filename;
  document.getElementById('modaltreeidDisplay').innerHTML = treeid;
  document.getElementById('modaldiagnosisDisplay').innerHTML = diagnosis;
  document.getElementById('modalauthorDisplay').innerHTML = author;
  document.getElementById('modalpartDisplay').innerHTML = part;
  document.getElementById('modalstatusDisplay').innerHTML = status;
  document.getElementById('modallocationDisplay').innerHTML = location;
  document.getElementById('modalcapturetimeDisplay').innerHTML = capturetime;
  document.getElementById('modalmodifiedtimeDisplay').innerHTML = modifiedtime;

  // Place the filename in a hidden input which will be used to send to the backend
  const filenameInput = document.querySelector(".filename-input");
  filenameInput.value = filename;
}



function inspect() {
  var inspectModal = new bootstrap.Modal(document.getElementById('inspectModal'));
  var inspectImage = document.getElementById('inspectImage');
  var placeholderImage = document.getElementById('placeholder');

  // Set the source of the image in the modal
  inspectImage.src = placeholderImage.src;

  // Get the data for the currently displayed image
  var fileName = document.getElementById('filenameDisplay').textContent;
  var treeID = document.getElementById('treeidDisplay').textContent;
  var diagnosis = document.getElementById('diagnosisDisplay').textContent;
  var author = document.getElementById('authorDisplay').textContent;
  var part = document.getElementById('partDisplay').textContent;
  var status = document.getElementById('statusDisplay').textContent;
  var location = document.getElementById('locationDisplay').textContent;
  var captureTime = document.getElementById('capturetimeDisplay').textContent;
  var modifiedTime = document.getElementById('modifiedtimeDisplay').textContent;

  // Update the modal table
  updateModalTable(fileName, treeID, diagnosis, author, part, status, location, captureTime, modifiedTime);

  // Show the modal
  inspectModal.show();
}

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here...

  // Function to handle the search button click event
  function handleFileNameSearch() {
    const searchTerm = document.getElementById("filename-input").value;
    const url = `/?filename=${encodeURIComponent(searchTerm)}`;
    window.location.href = url; // Redirect to the filtered URL
  }

  // Attach the handleSearch function to the search button click event
  document
    .getElementById("search-filename-button")
    .addEventListener("click", handleFileNameSearch);

  // Add a console.log statement to verify if this code block is executed
  console.log("DOMContentLoaded event handler executed");
});

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here...

  // Function to handle the TreeID search button click event
  function handleTreeIDSearch() {
    const treeId = document.getElementById("treeid-input").value;
    const url = `/?treeid=${encodeURIComponent(treeId)}`;
    window.location.href = url; // Redirect to the filtered URL
  }

  // Attach the handleTreeIDSearch function to the TreeID search button click event
  document
    .getElementById("search-treeid-button")
    .addEventListener("click", handleTreeIDSearch);

  // Add a console.log statement to verify if this code block is executed
  console.log("DOMContentLoaded event handler executed");
});


a = document.querySelector("#modalfilenameDisplay");
// document.querySelector("#modalfilenameDisplay").style.color = "pink";

console.log(document.getElementById('modalfilenameDisplay'));

// Initialize an object to store selected categories
const selectedCategories = {
  diagnosis: [],
  author: null,
  parts: null,
  status: null,
  location: null
};

// Function to update the selected categories object
function updateSelectedCategories() {
  // Update selected diagnosis categories
  selectedCategories.diagnosis = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(input => input.value);

  // Update selected author category
  selectedCategories.author = document.querySelector('input[name="authorRadioOptions"]:checked')
    ? document.querySelector('input[name="authorRadioOptions"]:checked').value
    : null;

  // Update selected parts category
  selectedCategories.parts = document.querySelector('input[name="partsRadioOptions"]:checked')
    ? document.querySelector('input[name="partsRadioOptions"]:checked').value
    : null;

  // Update selected status category
  selectedCategories.status = document.querySelector('input[name="statusRadioOptions"]:checked')
    ? document.querySelector('input[name="statusRadioOptions"]:checked').value
    : null;

  // Update selected location category
  selectedCategories.location = document.querySelector('input[name="locationRadioOptions"]:checked')
    ? document.querySelector('input[name="locationRadioOptions"]:checked').value
    : null;
}

// Function to build the filter string
function buildFilter() {
  const { diagnosis, author, parts, status, location } = selectedCategories;

  // Build the filter string
  const filter = `${diagnosis.join('+')}+${author}+${parts}+${status}+${location}`;

  return filter;
}

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here...

  // Function to handle the Filter Search button click event
  function handleFilterSearch() {
    console.log('Search button clicked'); // Add this line for debugging
    updateSelectedCategories();
    const filter = buildFilter();
    const url = `/?filter=${encodeURIComponent(filter)}`;
    window.location.href = url;
  }

  // Attach the handleFilterSearch function to the Filter Search button click event
  document
    .getElementById("filterSearchButton")
    .addEventListener("click", handleFilterSearch);

  // Add a console.log statement to verify if this code block is executed
  console.log("DOMContentLoaded event handler executed");
});

function updateTableDetails(filename) {
  fetch(`/get_details/${filename}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('treeidDisplay').innerHTML = data.treeID;
      document.getElementById('diagnosisDisplay').innerHTML = data.diagnosis;
      document.getElementById('authorDisplay').innerHTML = data.author;
      document.getElementById('partDisplay').innerHTML = data.part;
      document.getElementById('statusDisplay').innerHTML = data.status;
      document.getElementById('locationDisplay').innerHTML = data.location;
      document.getElementById('capturetimeDisplay').innerHTML = data.captureTime;
      document.getElementById('modifiedtimeDisplay').innerHTML = data.modifiedTime;
      // Add similar lines for other details
    })
    .catch(error => console.error('Error:', error));
}
