const restaurant = {
    name: 'Mans&Gebnah',
    hallCap: 75,
    guestsCount:0,
    checkAvailability: function (bookNum) {
        const empSeats = this.hallCap - this.guestsCount;
        return bookNum <= empSeats;
    },
    seatBook: function (bookNum) {
        this.guestsCount += bookNum
    },
    removeBook: function(bookNum) {
        this.guestsCount -= bookNum
    }
}

restaurant.seatBook(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeBook(5)
console.log(restaurant.checkAvailability(4))