// JavaScript for scrolling to the booking section and selecting the correct booking option

// Select all "Book Now" buttons
const bookNowButtons = document.querySelectorAll('.book-now');

// Add click event listener to each "Book Now" button
bookNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the value of the tour from the data attribute
        const tour = button.dataset.tour;

        // Scroll to the booking section
        document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });

        // Select the correct booking option
        const bookingSelect = document.getElementById('tour');
        const options = bookingSelect.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === tour) {
                bookingSelect.selectedIndex = i;
                break;
            }
        }
    });
});
// JavaScript for image carousel
const carouselImages = document.querySelectorAll('.carousel img');
let currentImageIndex = 0;

function showImage(index) {
    carouselImages.forEach(image => image.style.display = 'none');
    carouselImages[index].style.display = 'block';
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = carouselImages.length - 1;
    }
    showImage(currentImageIndex);
}

// Initially show the first image
showImage(currentImageIndex);

// Add click event listeners to carousel navigation buttons
document.querySelector('.prev').addEventListener('click', prevImage);
document.querySelector
