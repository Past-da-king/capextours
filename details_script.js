document.addEventListener('DOMContentLoaded', function() {
    // Get the tour number from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const tourNumber = urlParams.get('tour');

    // Get the tour details based on the tour number
    const tourData = tours.find(tour => tour.tour_number == tourNumber);

    if (tourData) {
        // Update the tour details on the page
        document.getElementById('tourName').innerText = tourData.tour_name;
        document.getElementById('tourImage').src = tourData.image; // Set the tour image
        document.getElementById('tourDescription').innerText = tourData.description;
        document.getElementById('tourPrice').innerText = `Price: ${tourData.price}`;

        // Update the activity list
        const activityList = document.getElementById('activityList');
        tourData.activity_list.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = activity;
            activityList.appendChild(li);
        });
    }
});

// Sample tour data (from provided JSON)
const tours = [
    
    {
        "tour_number": 1,
        "tour_name": "Wine Tram Tour",
        "image": "3d.jpg",
        "description": "Indulge in the renowned Hop-on Hop-off Experience, a favorite among visitors to the picturesque Franschhoek Valley. Immerse yourself in the charm of the valley as you leisurely explore its vineyards, tasting exquisite wines, taking insightful cellar tours, enjoying delicious lunches, or simply strolling through the scenic vineyard paths. With the flexibility to hop on and off at your convenience, this experience allows you to curate your day, choosing where to linger longer and which activities to savor. Whether it’s the allure of wine tasting, the intrigue of cellar tours, the satisfaction of a delightful lunch, or the tranquility of a vineyard stroll, the Hop-on Hop-off Experience promises a day filled with unforgettable moments.",
        "activity_list": [
            "Wine tasting",
            "Cellar tour",
            "Lunch",
            "Vineyard stroll",
            "Shopping"
        ],
        "price": "R 1,500.00"
    },
    {
        "tour_number": 2,
        "tour_name": "Table Mountain",
        "image": "tm.webp",
        "description": "Embark on an extraordinary journey to Table Mountain, a symbol of Cape Town's natural beauty and majesty. Discover the magic of this iconic landmark as you hike its trails, revel in breathtaking scenic views, indulge in delicious dining options, explore the botanical wonders of Kirstenbosch Botanical Gardens, or delve into the mountain's history on guided tours. With the freedom to hop on and off, you can craft your day, choosing to linger where the views captivate you, the trails beckon, or the stories intrigue you. Whether it’s the thrill of hiking, the awe of panoramic vistas, the joy of dining, the serenity of botanical gardens, or the fascination of guided tours, the Table Mountain Experience promises an unforgettable adventure.",
        "activity_list": [
            "Hiking",
            "Scenic views",
            "Dining",
            "Botanical gardens",
            "Guided tours"
        ],
        "price": "R 1,000.00"
    },
    {
        "tour_number": 3,
        "tour_name": "Red-bus City Tour",
        "image": "RBT.jpg",
        "description": "Discover the vibrant soul of Cape Town on the iconic Red-bus City Tour, a captivating exploration of the city's rich history and diverse culture. Delve into the heart of Cape Town as you visit its historic landmarks, immerse yourself in its cultural sites, soak in panoramic views, indulge in shopping delights, and savor delectable dining experiences. With the flexibility to hop on and off, you can tailor your day, choosing to linger where the history intrigues, the culture enchants, or the vistas mesmerize. Whether it’s the allure of landmarks, the richness of cultural sites, the grandeur of panoramic views, the excitement of shopping, or the indulgence of dining, the Red-bus City Tour guarantees an enriching exploration of Cape Town.",
        "activity_list": [
            "Landmarks",
            "Cultural sites",
            "Panoramic views",
            "Shopping",
            "Dining"
        ],
        "price": "R 800.00"
    },
    {
        "tour_number": 4,
        "tour_name": "Safari Adventure",
        "image": "Sfr.webp",
        "description": "Embark on an unforgettable Safari Adventure, a journey into the heart of Cape Town's wilderness and wildlife. Encounter the thrill of game drives, the wonder of birdwatching, the fascination of wildlife centers, the tranquility of sunset drives, and the luxury of safari lodges. With the freedom to hop on and off, you can shape your day, choosing where to linger where the wildlife mesmerizes, the landscapes captivate, or the relaxation beckons. Whether it’s the excitement of game drives, the beauty of birdwatching, the education of wildlife centers, the tranquility of sunset drives, or the luxury of safari lodges, the Safari Adventure promises an extraordinary day in nature's embrace.",
        "activity_list": [
            "Game drives",
            "Birdwatching",
            "Wildlife centers",
            "Sunset drives",
            "Safari lodges"
        ],
        "price": "R 2,000.00"
    },
    {
        "tour_number": 5,
        "tour_name": "Beach Excursion",
        "image": "image.png",
        "description": "Experience the epitome of relaxation with our Beach Excursion, a journey to Cape Town's most stunning beaches. Bask in the sun, swim in the crystal-clear waters, dine on delectable beachside delights, stroll along picturesque coastal paths, and indulge in thrilling water sports. With the freedom to hop on and off, you can tailor your day, choosing where to linger where the sun beckons, the waves entice, or the relaxation calls. Whether it’s the joy of sunbathing, the refreshment of swimming, the indulgence of dining, the beauty of coastal walks, or the excitement of water sports, the Beach Excursion promises a day of bliss by the sea.",
        "activity_list": [
            "Sunbathing",
            "Swimming",
            "Dining",
            "Coastal walks",
            "Water sports"
        ],
        "price": "R 700.00"
    },
    {
        "tour_number": 6,
        "tour_name": "Historic Tour",
        "image": "28.jpg",
        "description": "Embark on a captivating journey through time with our Historic Tour, an exploration of Cape Town's rich heritage and storied past. Delve into the history of Cape Town as you visit its iconic landmarks, immerse yourself in its museums, wander its historic neighborhoods, savor its cultural cuisine, and admire its heritage sites. With the freedom to hop on and off, you can craft your day, choosing where to linger where the history fascinates, the culture enthralls, or the flavors tantalize. Whether it’s the grandeur of landmarks, the depth of museums, the charm of walking tours, the delight of cultural cuisine, or the significance of heritage sites, the Historic Tour promises an enriching journey through Cape Town's history.",
        "activity_list": [
            "Landmarks",
            "Museums",
            "Walking tours",
            "Cultural cuisine",
            "Heritage sites"
        ],
        "price": "R 900.00"
    }
    
];
function showMore() {
    var para = document.getElementById("tourDescription");
    var btn = document.getElementById("showBtn");

    if (para.classList.contains("show")) {
        para.classList.remove("show");
        btn.innerText = "Show More";
    } else {
        para.classList.add("show");
        btn.innerText = "Show Less";
    }}