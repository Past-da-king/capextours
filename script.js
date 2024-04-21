// JavaScript for scrolling to the booking section and selecting the correct booking option
import { saveBooking, getAllBookings } from './indexedDB.js';
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
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const selectedTour = document.getElementById("tour").value;
    const selectedDate = document.getElementById("date").value;
    const numParticipants = document.getElementById("participants").value;

    const booking = {
        tour: selectedTour,
        date: selectedDate,
        participants: numParticipants
    };

    saveBooking(booking); // Save the booking details
});

// List bookings
function listBookings() {
    getAllBookings(function(bookings) {
        const bookingsContainer = document.getElementById("bookings-list");

        // Clear previous listings
        bookingsContainer.innerHTML = "";

        // Create a list item for each booking
        bookings.forEach(function(booking) {
            const bookingItem = document.createElement("li");
            bookingItem.textContent = `Tour: ${booking.tour}, Date: ${booking.date}, Participants: ${booking.participants}`;
            bookingsContainer.appendChild(bookingItem);
        });
    });
}

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open'); // Toggle the 'open' class
    });
});

