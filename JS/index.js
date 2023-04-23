const Airport = require('./Airport');
const PlaneFactory = require('./Planes/PlaneFactory');
const ModelsPlane = require('./models/ModelsPlane');

(function run() {
    const planeFactory = new PlaneFactory();

    let planes = [
        planeFactory.create(ModelsPlane.BOEING_737),
        planeFactory.create(ModelsPlane.BOEING_737_800),
        planeFactory.create(ModelsPlane.BOEING_747),
        planeFactory.create(ModelsPlane.AIRBUS_A320),
        planeFactory.create(ModelsPlane.AIRBUS_A330),
        planeFactory.create(ModelsPlane.EMBRAER_190),
        planeFactory.create(ModelsPlane.SUKHOI_SUPERJET_100),
        planeFactory.create(ModelsPlane.BOMBARDIER_CS300),
        planeFactory.create(ModelsPlane.B_1B_LANCER),
        planeFactory.create(ModelsPlane.B_2_SPIRIT),
        planeFactory.create(ModelsPlane.B_52_STRATOFORTRESS),
        planeFactory.create(ModelsPlane.F_15),
        planeFactory.create(ModelsPlane.F_22),
        planeFactory.create(ModelsPlane.C_130_HERCULES),
        planeFactory.create(ModelsPlane.BELL_X_14),
        planeFactory.create(ModelsPlane.RYAN_X_13_VERTIJET)
    ];

    let airport = new Airport(planes);
    let militaryAirport = new Airport(airport.militaryPlanes);
    let passengerAirport = new Airport(airport.passengerPlanes);
    console.log(`Military airport sorted by max distance: ${Airport.toString(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${Airport.toString(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${Airport.toString(passengerAirport.passengerPlaneWithMaxPassengersCapacity)}`);
})();