const cars = require("../../data/cars.json");
const { v4: uuidv4 } = require("uuid");
const id = uuidv4();

exports.getAllCars = () => {
    let data = cars.map((car) => car);

    return data;
};

exports.getCarById = (id) => {
    let data = cars.find((car) => car.id === id);

    return data;
};

exports.addCar = (car) => {
    const newCar = {
        id: id,
        ...car,
    };
    cars.push(newCar);

    return newCar;
};

exports.updateCar = (id, car) => {
    const carIndex = cars.findIndex((car) => car?.id === id);
    if (carIndex === -1) {
        return null;
    }
    cars[carIndex] = {
        id: id,
        ...car,
    };

    return cars[carIndex];
};

exports.updateCarPatch = (id, car) => {
    const carIndex = cars.findIndex((car) => car?.id === id);
    if (carIndex === -1) {
        return null;
    }
    cars[carIndex] = {
        ...cars[carIndex],
        ...car,
    };

    return cars[carIndex];
};

exports.deleteCar = (id) => {
    const carIndex = cars.findIndex((car) => car?.id === id);
    if (carIndex === -1) {
        return null;
    }
    const deletedCar = cars.splice(carIndex, 1);

    return deletedCar;
};
