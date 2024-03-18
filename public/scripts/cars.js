const getCarsData = async (date, passengerCount) => {
    const res = await fetch(
        `/cars?inputDate=${date}&inputCapacity=${passengerCount}`
    );
    const { data, message } = await res.json();

    const availableCars = data.filter((car) => car.available);
    return availableCars;
};

export default { getCarsData };
