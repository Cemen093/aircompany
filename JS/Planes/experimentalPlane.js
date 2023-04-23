const Plane = require('./Plane');

class ExperimentalPlane   extends Plane
{

    constructor(plane) {
        super(plane.model, plane.maxSpeed, plane.maxFlightDistance, plane.maxLoadCapacity);
        this._typeExperimentalPlane = plane.typeExperimentalPlane;
        this._classificationLevel = plane.classificationLevel;

    }

    get typeExperimentalPlane() {
        return this._typeExperimentalPlane;
    }

    get classificationLevel() {
        return this._classificationLevel;
    }
}

module.exports = ExperimentalPlane
