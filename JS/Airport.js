const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');
const PlaneFactory = require('./Planes/PlaneFactory');
const TypesMilitaryPlane = require('./models/TypesMilitaryPlane');
const ModelsPlane = require('./models/ModelsPlane');

class Airport {

    constructor(planes) {
        this._planes = planes;
    }

    get planes() {
        return this._planes;
    }

     get passengerPlanes() {
        return this._planes.filter(plane => plane instanceof PassengerPlane);
    }

    get militaryPlanes() {
        return this._planes.filter(plane => plane instanceof MilitaryPlane);
    }

    get experimentalPlanes() {
        return this._planes.filter(plane => plane instanceof ExperimentalPlane);
    }

    get fighterMilitaryPlanes() {
        const militaryPlanes = this.militaryPlanes;
        return militaryPlanes.filter(plane => plane.typeMilitaryPlane === TypesMilitaryPlane.FIGHTER);
    }

    get transportMilitaryPlanes() {
        const militaryPlanes = this.militaryPlanes;
        return militaryPlanes.filter(plane => plane.typeMilitaryPlane === TypesMilitaryPlane.TRANSPORT);
    }


    get bomberMilitaryPlanes() {
        const militaryPlanes = this.militaryPlanes;
        return militaryPlanes.filter(plane => plane.typeMilitaryPlane === TypesMilitaryPlane.BOMBER);
    }

    get passengerPlaneWithMaxPassengersCapacity() {
        const passengerPlanes = this.passengerPlanes;
        if (!passengerPlanes.length){
            throw new Error('No planes');
        }
        return passengerPlanes.reduce((planeWithMaxCapacity, plane) => {
                return plane.maxPassengersCapacity > planeWithMaxCapacity.maxPassengersCapacity ? plane : planeWithMaxCapacity;
            }, passengerPlanes[0]);
    }
    
    sortByMaxDistance() {
        this._planes.sort((a, b) => a.maxFlightDistance - b.maxFlightDistance);
        return this;
    }
    
    sortByMaxSpeed() {
        this._planes.sort((a, b) => a.maxSpeed - b.maxSpeed);
        return this;
    }
    
    sortByMaxLoadCapacity() {
        this._planes.sort((a, b) => a.maxLoadCapacity - b.maxLoadCapacity);
        return this;
    }

    static toString(planes) {
        return JSON.stringify(planes);
    }

    static createAllPlanesAndReturn(){
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

        return planes;
    }
}

module.exports = Airport;
