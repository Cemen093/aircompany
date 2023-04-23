const Plane = require('./Plane');

class PassengerPlane extends Plane {

    constructor(plane) {
        super(plane.model, plane.maxSpeed, plane.maxFlightDistance, plane.maxLoadCapacity);
        this._maxPassengersCapacity = plane.maxPassengersCapacity;
    }
    
    get maxPassengersCapacity() {
        return this._maxPassengersCapacity;
    }
}

module.exports = PassengerPlane;
