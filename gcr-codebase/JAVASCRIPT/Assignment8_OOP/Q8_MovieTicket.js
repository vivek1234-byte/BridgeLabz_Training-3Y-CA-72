/*
 * Q8: Movie Ticket Booking System
 * MovieTicket (movieName, seatNo, price) -> OnlineTicket adds convenienceFee and getTotalAmount().
 * printTicket() is added directly to MovieTicket.prototype and called on OnlineTicket
 * objects, which shows the prototype chain:
 *   onlineTicket -> OnlineTicket.prototype -> MovieTicket.prototype -> Object.prototype
 */

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Added to the parent prototype AFTER the classes are defined
MovieTicket.prototype.printTicket = function () {
    // getTotalAmount exists only on OnlineTicket, so fall back to price for normal tickets
    const total = typeof this.getTotalAmount === "function" ? this.getTotalAmount() : this.price;
    console.log("----------------------------");
    console.log(`Movie : ${this.movieName}`);
    console.log(`Seat  : ${this.seatNo}`);
    console.log(`Price : Rs.${this.price}`);
    if (this.convenienceFee !== undefined) console.log(`Fee   : Rs.${this.convenienceFee}`);
    console.log(`Total : Rs.${total}`);
};

const onlineTickets = [
    new OnlineTicket("Interstellar", "C7", 250, 30),
    new OnlineTicket("Inception", "F12", 300, 35),
];
onlineTickets.forEach((ticket) => ticket.printTicket());

const counterTicket = new MovieTicket("Dune", "A1", 200);
counterTicket.printTicket();
console.log("----------------------------");

// Prove where printTicket lives
const ticket = onlineTickets[0];
console.log("\nOwn property printTicket?            ", Object.hasOwn(ticket, "printTicket"));
console.log("On OnlineTicket.prototype?           ", Object.hasOwn(OnlineTicket.prototype, "printTicket"));
console.log("On MovieTicket.prototype?            ", Object.hasOwn(MovieTicket.prototype, "printTicket"));
console.log("Prototype of OnlineTicket.prototype is MovieTicket.prototype?",
    Object.getPrototypeOf(OnlineTicket.prototype) === MovieTicket.prototype);
