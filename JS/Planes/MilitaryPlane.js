const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(plane) {
        super(plane.model, plane.maxSpeed, plane.maxFlightDistance, plane.maxLoadCapacity);
        this._typeMilitaryPlane = plane.typeMilitaryPlane ;

    }

    get typeMilitaryPlane() {
        return this._typeMilitaryPlane;
    }
}

module.exports = MilitaryPlane;
