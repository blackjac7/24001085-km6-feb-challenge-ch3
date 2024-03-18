const express = require("express");
const { v4: uuidv4 } = require("uuid");

const cars = require("./data/cars.json");
const id = uuidv4();

// Initiate express app
const app = express();
const PORT = 3000;

// Enable request body (json)
app.use(express.json());

// Enable static public directory
app.use(express.static("public"));

// Enable routing
app.get("/cars", (req, res) => {
    let data = cars.map((car) => car);

    data = data.filter((car) => {
        let filteredStatus = true;
        if (req.query.inputDate) {
            filteredStatus =
                filteredStatus &&
                car.available &&
                new Date(car.availableAt) > new Date(req.query.inputDate);
        }
        if (req.query.inputCapacity) {
            filteredStatus =
                filteredStatus &&
                car.capacity > Number(req.query.inputCapacity);
        }

        return filteredStatus;
    });

    res.status(200).json({ data, message: null });
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find((car) => car.id === req.params.id);
    if (!car) {
        res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json(car);
});

app.post("/cars", (req, res) => {
    const newCar = {
        id,
        ...req.body,
    };
    cars.push(newCar);
    res.status(201).json(newCar);
});

app.put("/cars/:id", (req, res) => {
    const car = cars.find((car) => car.id === req.params.id);
    if (!car) {
        return res.status(404).json({ message: "Car not found" });
    }
    const updatedCar = {
        ...car,
        ...req.body,
    };
    cars[cars.indexOf(car)] = updatedCar;
    res.status(200).json(updatedCar);
});

app.patch("/cars/:id", (req, res) => {
    const car = cars.find((car) => car.id === req.params.id);
    if (!car) {
        return res.status(404).json({ message: "Car not found" });
    }
    const updatedCar = {
        ...car,
        ...req.body,
    };
    cars[cars.indexOf(car)] = updatedCar;
    res.status(200).json(updatedCar);
});

app.delete("/cars/:id", (req, res) => {
    const car = cars.find((car) => car.id === req.params.id);
    if (!car) {
        return res.status(404).json({ message: "Car not found" });
    }
    cars.splice(cars.indexOf(car), 1);
    res.status(200).json({ data: cars, message: "Car deleted" });
});

// Listening server on PORT
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
