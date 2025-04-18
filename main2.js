let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let slideInterval;

// Show the current slide
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

// Change slide by +1 or -1
function plusSlides(n) {
  clearInterval(slideInterval); // stop auto transition
  slideIndex += n;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  showSlide(slideIndex);
  startSlideShow(); // restart auto transition
}

// Start the slideshow
function startSlideShow() {
  slideInterval = setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlide(slideIndex);
  }, 5000); // every 5 seconds
}

// Initialize
window.addEventListener("load", () => {
  if (slides.length > 0) {
    showSlide(slideIndex);
    startSlideShow();
  }
});

//SCRIPT FOR NAVIGATION TABS IN ABOUT PAGE
        document.addEventListener('DOMContentLoaded', function() {
            const navButtons = document.querySelectorAll('.nav-button');
            const tabIndicator = document.querySelector('.tab-indicator');
            const tabContents = document.querySelectorAll('.tab-content');

            function showTab(tabId) {
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                const activeTab = document.getElementById(tabId);
                if (activeTab) {
                    activeTab.classList.add('active');
                }
            }

            navButtons.forEach((button, index) => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    navButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to the clicked button
                    this.classList.add('active');

                    // Calculate the left position and width of the indicator
                    let offsetLeft = this.offsetLeft;
                    let buttonWidth = this.offsetWidth;

                    tabIndicator.style.left = offsetLeft + 'px';
                    tabIndicator.style.width = buttonWidth + 'px';

                    // Show the corresponding tab content
                    const tabId = this.getAttribute('data-tab');
                    showTab(tabId);
                });

                // Set initial state: Find the active button and show its tab content
                if (button.classList.contains('active')) {
                    tabIndicator.style.left = button.offsetLeft + 'px';
                    tabIndicator.style.width = button.offsetWidth + 'px';
                    showTab(button.getAttribute('data-tab'));
                }
            });
        });


//STARTB OF GALLERY
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = imageSrc;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}