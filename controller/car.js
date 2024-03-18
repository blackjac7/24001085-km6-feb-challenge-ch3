const carUsecase = require("../usecase/car");

exports.getAllCars = (req, res, next) => {
    const { inputDate, inputCapacity } = req.query;

    // call the usecase
    const data = carUsecase.getAllCars(inputDate, inputCapacity);

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.getCarById = (req, res, next) => {
    const { id } = req.params;

    // call the usecase
    const data = carUsecase.getCarById(id);

    if (!data) {
        return next({
            statusCode: 404,
            message: `Car with id ${id} not found`,
        });
    }

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.addCar = (req, res, next) => {
    const {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        available,
        availableAt,
        transmission,
        type,
        year,
        options,
        specs,
    } = req.body;

    if (!plate || plate == "") {
        return next({
            statusCode: 400,
            message: "Plate must be filled!",
        });
    }
    if (!manufacture || manufacture == "") {
        return next({
            statusCode: 400,
            message: "Manufacture must be filled!",
        });
    }
    if (!model || model == "") {
        return next({
            statusCode: 400,
            message: "Model must be filled!",
        });
    }
    if (!image || image == "") {
        return next({
            statusCode: 400,
            message: "Image must be filled!",
        });
    }
    if (!rentPerDay || rentPerDay == "" || isNaN(rentPerDay)) {
        return next({
            statusCode: 400,
            message: "RentPerDay must be filled and must be a number!",
        });
    }
    if (!capacity || capacity == "" || isNaN(capacity)) {
        return next({
            statusCode: 400,
            message: "Capacity must be filled and must be a number!",
        });
    }
    if (!description || description == "") {
        return next({
            statusCode: 400,
            message: "Description must be filled!",
        });
    }
    if (!available || available == "" || typeof available !== "boolean") {
        return next({
            statusCode: 400,
            message: "Available must be filled and must be a boolean!",
        });
    }
    if (!availableAt || availableAt == "") {
        return next({
            statusCode: 400,
            message: "AvailableAt must be filled!",
        });
    }
    if (!transmission || transmission == "") {
        return next({
            statusCode: 400,
            message: "Transmission must be filled!",
        });
    }
    if (!type || type == "") {
        return next({
            statusCode: 400,
            message: "Type must be filled!",
        });
    }
    if (!year || year == "" || isNaN(year)) {
        return next({
            statusCode: 400,
            message: "Year must be filled and must be a number!",
        });
    }
    if (!options || options == "" || !Array.isArray(options)) {
        return next({
            statusCode: 400,
            message: "Options must be filled and must be an array!",
        });
    }
    if (!specs || specs == "" || !Array.isArray(specs)) {
        return next({
            statusCode: 400,
            message: "Specs must be filled and must be an array!",
        });
    }

    const payload = req.body;

    // call the usecase
    const data = carUsecase.addCar(payload);

    const response = {
        data,
        message: null,
    };

    res.status(201).json(response);
};

exports.updateCar = (req, res, next) => {
    const id = req.params.id;
    const payload = req.body;

    // call the usecase
    const data = carUsecase.updateCar(id, payload);

    if (!data) {
        return next({
            statusCode: 404,
            message: `Car with id ${id} not found`,
        });
    }

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.updateCarPatch = (req, res, next) => {
    const id = req.params.id;
    const payload = req.body;

    // call the usecase
    const data = carUsecase.updateCarPatch(id, payload);

    if (!data) {
        return next({
            statusCode: 404,
            message: `Car with id ${id} not found`,
        });
    }

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.deleteCar = (req, res, next) => {
    const id = req.params.id;

    // call the usecase
    const data = carUsecase.deleteCar(id);

    if (!data) {
        return next({
            statusCode: 404,
            message: `Car with id ${id} not found`,
        });
    }

    const response = {
        data,
        message: "Car deleted",
    };

    res.status(200).json(response);
};
