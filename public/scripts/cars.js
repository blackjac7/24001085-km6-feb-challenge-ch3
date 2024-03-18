const getCarsData = async (date) => {
    const res = await fetch(`/cars?date=${date}`);
    const { data, message } = await res.json();
    return data;
};

export default { getCarsData };
