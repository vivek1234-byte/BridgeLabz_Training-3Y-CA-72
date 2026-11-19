/*
 * Q5: Ride-Sharing Application
 * User (name, rating) -> Driver (inherits User, adds vehicle details)
 * Trip (fromLocation, toLocation, distance) with calculateFare().
 * calculateFare() throws if the distance is negative or missing; errors are handled with try/catch.
 */

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }

    getProfile() {
        return `${this.name} (rating ${this.rating}★)`;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleModel, vehicleNumber) {
        super(name, rating);
        this.vehicleModel = vehicleModel;
        this.vehicleNumber = vehicleNumber;
    }

    getProfile() {
        return `${super.getProfile()} driving ${this.vehicleModel} [${this.vehicleNumber}]`;
    }
}

class Trip {
    static BASE_FARE = 50;   // flat booking charge
    static RATE_PER_KM = 12; // charge per kilometre

    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance is not provided.");
        }
        if (typeof this.distance !== "number" || Number.isNaN(this.distance)) {
            throw new TypeError("Distance must be a number.");
        }
        if (this.distance < 0) {
            throw new RangeError("Distance cannot be negative.");
        }
        return Trip.BASE_FARE + this.distance * Trip.RATE_PER_KM;
    }
}

const rider = new User("Ananya", 4.8);
const driver = new Driver("Suresh", 4.6, "Maruti Dzire", "MH12 AB 1234");
console.log("Rider :", rider.getProfile());
console.log("Driver:", driver.getProfile());
console.log();

const trips = [
    new Trip("Airport", "City Center", 18.5),
    new Trip("Station", "Mall", -4),
    new Trip("Office", "Home"),
];

trips.forEach((trip) => {
    try {
        const fare = trip.calculateFare();
        console.log(`${trip.fromLocation} -> ${trip.toLocation} (${trip.distance} km): Fare Rs.${fare.toFixed(2)}`);
    } catch (error) {
        console.log(`${trip.fromLocation} -> ${trip.toLocation}: Cannot calculate fare - ${error.name}: ${error.message}`);
    }
});
