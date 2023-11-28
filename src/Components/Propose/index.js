var slideIndex = 1;

// Function to show the specified slide
function showDivs(n) {
  // Get all slides
  var slides = document.getElementsByClassName("mySlides3");

  // Get all image badges
  var imageBadges = document.getElementsByClassName("image-badge");

  // If the specified slide index is beyond the number of slides, reset it to 1
  if (n > slides.length) {
    slideIndex = 1;
  }

  // If the specified slide index is less than 1, set it to the last slide index
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "badge-white" class from all image badges
  for (var i = 0; i < imageBadges.length; i++) {
    imageBadges[i].className = imageBadges[i].className.replace(" badge-white", "");
  }

  // Show the specified slide
  slides[slideIndex - 1].style.display = "block";

  // Add the "badge-white" class to the image badge of the current slide
  imageBadges[slideIndex - 1].className += " badge-white";
}

// Function to show the next slide
function plusDivs(n) {
  showDivs(slideIndex += n);
}

// Function to show a specific slide
function currentDiv(n) {
  showDivs(slideIndex = n);
}