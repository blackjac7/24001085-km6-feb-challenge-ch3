const carRepo = require("../../repository/car");

exports.getAllCars = (inputDate, inputCapacity) => {
    let data = carRepo.getAllCars();

    data = data.filter((car) => {
        let filteredStatus = true;
        if (inputDate) {
            filteredStatus =
                filteredStatus &&
                car.available &&
                new Date(car.availableAt) > new Date(inputDate);
        }
        if (inputCapacity) {
            filteredStatus =
                filteredStatus && car.capacity > Number(inputCapacity);
        }

        return filteredStatus;
    });

    return data;
};

exports.getCarById = (id) => {
    let data = carRepo.getCarById(id);

    return data;
};

exports.addCar = (car) => {
    const data = carRepo.addCar(car);

    return data;
};

exports.updateCar = (id, car) => {
    const data = carRepo.updateCar(id, car);

    return data;
};

exports.updateCarPatch = (id, car) => {
    const data = carRepo.updateCarPatch(id, car);

    return data;
};

exports.deleteCar = (id) => {
    const data = carRepo.deleteCar(id);

    return data;
};
