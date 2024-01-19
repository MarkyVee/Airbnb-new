document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const dates = document.getElementById('dates').value;
    const guests = document.getElementById('guests').value;

    // Mock search function
    const listings = searchAirbnbListings(location, dates, guests);
    displayListings(listings);
});

function searchAirbnbListings(location, dates, guests) {
    // This is a mock function. Replace with real API calls or backend logic.
    return [
        { id: 1, name: "Listing 1", price: 100, amenities: ["Wifi", "Pool"], rating: 4.5 },
        { id: 2, name: "Listing 2", price: 150, amenities: ["Wifi"], rating: 4.0 }
    ];
}

function displayListings(listings) {
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = '';
    listings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.innerHTML = `<h3>${listing.name}</h3><p>Price: ${listing.price}</p>`;
        listingsContainer.appendChild(listingElement);
    });
}