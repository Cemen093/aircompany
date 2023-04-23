const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');
const TypesMilitaryPlane = require('./models/TypesMilitaryPlane');

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
        return passengerPlanes.reduce((maxCapacityPlane, plane) => {
                return plane.passengersCapacity > maxCapacityPlane.passengersCapacity ? plane : maxCapacityPlane;
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
        this._planes.sort((a, b) => a.minLoadCapacity - b.minLoadCapacity);
        return this;
    }

    static toString(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
