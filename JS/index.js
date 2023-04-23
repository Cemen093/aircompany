const Airport = require('./Airport');

(function run() {

    let airport = new Airport(Airport.createAllPlanesAndReturn());
    let militaryAirport = new Airport(airport.militaryPlanes);
    let passengerAirport = new Airport(airport.passengerPlanes);
    console.log(`Military airport sorted by max distance: ${Airport.toString(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${Airport.toString(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${Airport.toString(passengerAirport.passengerPlaneWithMaxPassengersCapacity)}`);
})();