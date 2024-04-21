        // Open or create a database
        const request = indexedDB.open('GG', 1);
        let db;

        request.onerror = function(event) {
            console.error("Database error: " + event.target.errorCode);
        };

        request.onsuccess = function(event) {
            db = event.target.result;

            // Display existing bookings
            displayBookings();
        };

        request.onupgradeneeded = function(event) {
            db = event.target.result;

            // Create object store for bookings
            const objectStore = db.createObjectStore("bookings", { keyPath: "id", autoIncrement: true });
            objectStore.createIndex("tour", "tour", { unique: false });
            objectStore.createIndex("date", "date", { unique: false });
            objectStore.createIndex("participants", "participants", { unique: false });
        };

        // Function to handle form submission
        function submitForm(event) {
            event.preventDefault(); // Prevent form from submitting

            // Get form values
            const tourSelect = document.getElementById('tour');
            const selectedOption = tourSelect.options[tourSelect.selectedIndex];
            const tour = selectedOption.value;
            const tourName = selectedOption.text;
            const date = document.getElementById('date').value;
            const participants = document.getElementById('participants').value;

            // Calculate price based on selected tour
            const price = parseInt(selectedOption.getAttribute('data-price'));
            const totalPrice = price * parseInt(participants);

            // Add booking to IndexedDB
            addBookingToDB({ tour: tourName, date: date, participants: participants, totalPrice: totalPrice });
        }

        // Function to add booking to IndexedDB
        function addBookingToDB(booking) {
            const transaction = db.transaction(["bookings"], "readwrite");
            const objectStore = transaction.objectStore("bookings");

            const request = objectStore.add(booking);
            request.onsuccess = function(event) {
                console.log("Booking added to database");
                displayBookings(); // Display updated bookings
            };
        }

        // Function to display bookings
        function displayBookings() {
            const bookingList = document.getElementById('bookingList');
            bookingList.innerHTML = ''; // Clear previous list

            const objectStore = db.transaction("bookings").objectStore("bookings");
            objectStore.openCursor().onsuccess = function(event) {
                const cursor = event.target.result;
                if (cursor) {
                    const booking = cursor.value;
                    const bookingCard = document.createElement('div');
bookingCard.className = 'booking-card';
bookingCard.innerHTML = `                        <h3>Tour: ${booking.tour}</h3>                         <ul>                             <li><strong>Date:</strong> ${booking.date}</li>                             <li><strong>Participants:</strong> ${booking.participants}</li>                             <li><strong>Total Price:</strong> ${booking.totalPrice} ZAR</li>                         </ul>                         <button class="delete-button" onclick="deleteBooking(${booking.id})">Cancel</button>  <button class="delete-button">CheckOut</button>             `;
bookingList.appendChild(bookingCard);
cursor.continue();
}
};
}
// Function to delete booking from IndexedDB
function deleteBooking(id) {
        const transaction = db.transaction(["bookings"], "readwrite");
        const objectStore = transaction.objectStore("bookings");

        const request = objectStore.delete(id);
        request.onsuccess = function(event) {
            console.log("Booking deleted from database");
            displayBookings(); // Display updated bookings
        };
    }

    // Add event listener to form submission
    document.getElementById('bookingForm').addEventListener('submit', submitForm);

    const cartButton = document.getElementById('cartButton');
    const cartButton2 = document.getElementById('cartButton2');
    const bookingSection = document.getElementById('bookingSection');
    const bookingForm = document.getElementById('bookingForm');

    cartButton.addEventListener('click', () => {
        bookingSection.classList.toggle('open');
    });

    cartButton2.addEventListener('click', () => {
        bookingSection.classList.toggle('open');
    });

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        bookingSection.classList.add('open');
        // Handle form submission here (add booking to list)
    });
