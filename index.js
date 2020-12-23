const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = Number(movieSelect.value);

// Update total and count

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map(seats => [...seat].indexOf(seats))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    console.log(seatsIndex);
}

// Movie Select Event

movieSelect.addEventListener('change', event => {
    ticketPrice = Number(event.target.value);
    setMovieData(event.target.selectedIndex, event.target.value);
    updateSelectedCount();
})

// Seat Select Event
container.addEventListener('click', event => {
    if (event.target.classList.contains('seat')
        && !event.target.classList.contains('occupied')) {
        event.target.classList.toggle('selected');
        updateSelectedCount();
    }
});
