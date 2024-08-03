document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const movieSelect = document.getElementById('movie');
    const seatsInput = document.getElementById('seats');
    const moviePrice = parseInt(movieSelect.value);
    const numberOfSeats = parseInt(seatsInput.value);

    const totalCost = moviePrice * numberOfSeats;

    document.getElementById('total-cost').innerText = `Total Cost: $${totalCost}`;
});