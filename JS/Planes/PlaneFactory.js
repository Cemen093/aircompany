const TypesPlane = require('../models/TypesPlane');
const PassengerPlane = require('./PassengerPlane');
const MilitaryPlane = require('./MilitaryPlane');
const ExperimentalPlane = require('./ExperimentalPlane');

class PlaneFactory {

    constructor () {}

    create(model) {
        switch(model.typePlane) {
            case TypesPlane.PASSENGER:
                return new PassengerPlane(model.plane)
                break;
            case TypesPlane.MILITARY:
                 return new MilitaryPlane(model.plane);
                break;
            case TypesPlane.EXPERIMENTAL:
                return new ExperimentalPlane(model.plane);
                break;
            default:
            throw new Error('Invalid plane type specified');
        }
    }
} 

module.exports =  PlaneFactory;