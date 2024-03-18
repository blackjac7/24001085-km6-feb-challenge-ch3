const carUsecase = require("../usecase/car");

exports.getAllCars = (req, res) => {
    const { inputDate, inputCapacity } = req.query;

    // call the usecase
    const data = carUsecase.getAllCars(inputDate, inputCapacity);

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.getCarById = (req, res) => {
    const { id } = req.params;

    // call the usecase
    const data = carUsecase.getCarById(id);

    if (!data) {
        return res
            .status(404)
            .json({ data: null, message: `Car with id ${id} not found` });
    }

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.addCar = (req, res) => {
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
        return res.status(400).json({ message: "Plate must be filled!" });
    }
    if (!manufacture || manufacture == "") {
        return res.status(400).json({ message: "Manufacture must be filled!" });
    }
    if (!model || model == "") {
        return res.status(400).json({ message: "Model must be filled!" });
    }
    if (!image || image == "") {
        return res.status(400).json({ message: "Image must be filled!" });
    }
    if (!rentPerDay || rentPerDay == "" || isNaN(rentPerDay)) {
        return res.status(400).json({
            message: "Rent per day must be filled and must be a number!",
        });
    }
    if (!capacity || capacity == "" || isNaN(capacity)) {
        return res
            .status(400)
            .json({ message: "Capacity must be filled and must be a number!" });
    }
    if (!description || description == "") {
        return res.status(400).json({ message: "Description must be filled!" });
    }
    if (!available || available == "" || typeof available !== "boolean") {
        return res.status(400).json({
            message: "Available must be filled and must be a boolean!",
        });
    }
    if (!availableAt || availableAt == "") {
        return res.status(400).json({ message: "AvailableAt must be filled!" });
    }
    if (!transmission || transmission == "") {
        return res
            .status(400)
            .json({ message: "Transmission must be filled!" });
    }
    if (!type || type == "") {
        return res.status(400).json({ message: "Type must be filled!" });
    }
    if (!year || year == "" || isNaN(year)) {
        return res
            .status(400)
            .json({ message: "Year must be filled and must be a number!" });
    }
    if (!options || options == "" || !Array.isArray(options)) {
        return res
            .status(400)
            .json({ message: "Options must be filled and must be an array!" });
    }
    if (!specs || specs == "" || !Array.isArray(specs)) {
        return res
            .status(400)
            .json({ message: "Specs must be filled and must be an array!" });
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

exports.updateCar = (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    // call the usecase
    const data = carUsecase.updateCar(id, payload);

    if (!data) {
        return res
            .status(404)
            .json({ data: null, message: `Car with id ${id} not found` });
    }

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.updateCarPatch = (req, res) => {
    const id = req.params.id;
    const payload = req.body;

    // call the usecase
    const data = carUsecase.updateCarPatch(id, payload);

    if (!data) {
        return res
            .status(404)
            .json({ data: null, message: `Car with id ${id} not found` });
    }

    const response = {
        data,
        message: null,
    };

    res.status(200).json(response);
};

exports.deleteCar = (req, res) => {
    const id = req.params.id;

    // call the usecase
    const data = carUsecase.deleteCar(id);

    if (!data) {
        return res
            .status(404)
            .json({ data: null, message: `Car with id ${id} not found` });
    }

    const response = {
        data,
        message: "Car deleted",
    };

    res.status(200).json(response);
};
