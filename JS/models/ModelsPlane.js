const TypesSecrecyClassification = require('./TypesSecrecyClassification');
const TypesExperimentalPlane = require('./TypesExperimentalPlane');
const TypesMilitaryPlane = require('./TypesMilitaryPlane');
const TypesPlane = require('./TypesPlane');

const ModelsPlane = {
    BOEING_737: {  
        typePlane: TypesPlane.PASSENGER,  
        plane: { model: "Boeing-737", maxSpeed: 900, maxFlightDistance: 12000, maxLoadCapacity: 60500, maxPassengersCapacity: 164 }
    },
    BOEING_737_800: {  
        typePlane: TypesPlane.PASSENGER, 
        plane: { model: "Boeing-737-800", maxSpeed: 940, maxFlightDistance: 12300, maxLoadCapacity: 63870, maxPassengersCapacity: 192 }
    },
    BOEING_747: {  
        typePlane: TypesPlane.PASSENGER, 
        plane: { model: "Boeing-747", maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, maxPassengersCapacity: 242 }
    },
    AIRBUS_A320: {  
        typePlane: TypesPlane.PASSENGER, 
        plane: { model: "Airbus A320", maxSpeed: 930, maxFlightDistance: 11800, maxLoadCapacity: 65500, maxPassengersCapacity: 188 }
    },
    AIRBUS_A330: {  
        typePlane: TypesPlane.PASSENGER, 
        plane: { model: "Airbus A330", maxSpeed: 990, maxFlightDistance: 14800, maxLoadCapacity: 80500, maxPassengersCapacity: 222 }
    },
    EMBRAER_190: {  
        typePlane: TypesPlane.PASSENGER, 
        plane: { model: "Embraer 190", maxSpeed: 870, maxFlightDistance: 8100, maxLoadCapacity: 30800, maxPassengersCapacity: 64 }
    },
    SUKHOI_SUPERJET_100: {  
        typePlane: TypesPlane.PASSENGER, 
        plane: { model: "Sukhoi Superjet 100", maxSpeed: 870, maxFlightDistance: 11500, maxLoadCapacity: 50500, maxPassengersCapacity: 140 }
    },
    BOMBARDIER_CS300: {  
        typePlane: TypesPlane.PASSENGER, 
        plane: { model: "Bombardier CS300", maxSpeed: 920, maxFlightDistance: 11000, maxLoadCapacity: 60700, maxPassengersCapacity: 196 }
    },
    B_1B_LANCER: {  
        typePlane: TypesPlane.MILITARY, 
        plane: { model: "B-1B Lancer", maxSpeed: 1050, maxFlightDistance: 21000, maxLoadCapacity: 80000, typeMilitaryPlane: TypesMilitaryPlane.BOMBER }
    },
    B_2_SPIRIT: {  
        typePlane: TypesPlane.MILITARY, 
        plane: { model: "B-2 Spirit", maxSpeed: 1030, maxFlightDistance: 22000, maxLoadCapacity: 70000, typeMilitaryPlane: TypesMilitaryPlane.BOMBER }
    },
    B_52_STRATOFORTRESS: {  
        typePlane: TypesPlane.MILITARY, 
        plane: { model: "B-52 Stratofortress", maxSpeed: 1000, maxFlightDistance: 20000, maxLoadCapacity: 80000, typeMilitaryPlane: TypesMilitaryPlane.BOMBER }
    },
    F_15: {  
        typePlane: TypesPlane.MILITARY, 
        plane: { model: "F-15", maxSpeed: 1500, maxFlightDistance: 12000, maxLoadCapacity: 10000, typeMilitaryPlane: TypesMilitaryPlane.FIGHTER }
    },
    F_22: {  
        typePlane: TypesPlane.MILITARY, 
        plane: { model: "F-22", maxSpeed: 1550, maxFlightDistance: 13000, maxLoadCapacity: 11000, typeMilitaryPlane: TypesMilitaryPlane.FIGHTER }
    },
    C_130_HERCULES: {  
        typePlane: TypesPlane.MILITARY, 
        plane: { model: "C-130 Hercules", maxSpeed: 650, maxFlightDistance: 5000, maxLoadCapacity: 110000, typeMilitaryPlane: TypesMilitaryPlane.TRANSPORT }
    },
    BELL_X_14: {  
        typePlane: TypesPlane.EXPERIMENTAL, 
        plane: { model: "Bell X-14", maxSpeed: 277, maxFlightDistance: 482, maxLoadCapacity: 500, typeExperimentalPlane: TypesExperimentalPlane.HIGH_ALTITUDE, classificationLevel: TypesSecrecyClassification.SECRET }
    },
    RYAN_X_13_VERTIJET: {  
        typePlane: TypesPlane.EXPERIMENTAL, 
        plane: { model: "Ryan X-13 Vertijet", maxSpeed: 560, maxFlightDistance: 307, maxLoadCapacity: 500, typeExperimentalPlane: TypesExperimentalPlane.VTOL, classificationLevel: TypesSecrecyClassification.TOP_SECRET }
    }
}

module.exports = ModelsPlane;