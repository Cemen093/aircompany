const assert = require('chai').assert;

const Airport = require('../Airport');
const PlaneFactory = require('../Planes/PlaneFactory');
const TypesSecrecyClassification = require('../models/TypesSecrecyClassification');
const TypesMilitaryPlane = require('../models/TypesMilitaryPlane');
const ModelsPlane = require('../models/ModelsPlane');

describe('TestAirport', () => {
    const planeFactory = new PlaneFactory();
    planes = Airport.createAllPlanesAndReturn();

    it('test get transport military planes', () => {
        const airport = new Airport(planes);
        const transportMilitaryPlanes = airport.transportMilitaryPlanes;
        const hasTransportType = transportMilitaryPlanes.every((militaryPlane) => militaryPlane.typeMilitaryPlane === TypesMilitaryPlane.TRANSPORT);
        assert.isTrue(hasTransportType);
    });

    it('test get passenger plane with max passengers capacity', () => {
        let airport = new Airport(planes);
        const actualPlane = airport.passengerPlaneWithMaxPassengersCapacity;
        assert.equal(actualPlane.maxPassengersCapacity, 242);
    });


    it('test sort by max load capacity', () => {
        const airport = new Airport(planes);
        airport.sortByMaxLoadCapacity();
        const sortedPlanes = airport.planes;
        for (let i = 0; i < sortedPlanes.length - 1; i++) {
            assert.isFalse(sortedPlanes[i].maxLoadCapacity > sortedPlanes[i + 1].maxLoadCapacity);
        }
    });

    it('test get bomber military planes ', () => {
        const airport = new Airport(planes);
        const bomberMilitaryPlanes  = airport.bomberMilitaryPlanes;
        assert.isTrue(bomberMilitaryPlanes.every((militaryPlane) => militaryPlane.typeMilitaryPlane === TypesMilitaryPlane.BOMBER));
    });

    it('test experimentsl planes has classification level higher than unclassified', () => {
        let airport = new Airport(planes);
        const bomberMilitaryPlanes = airport.experimentalPlanes;
        assert.isTrue(bomberMilitaryPlanes.every((experimentalPlane) => experimentalPlane.classificationLevel != TypesSecrecyClassification.UNCLASSIFIED));
    });

});
