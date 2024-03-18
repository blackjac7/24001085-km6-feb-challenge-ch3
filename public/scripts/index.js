import cars from "./cars.js";

const carCard = document.getElementById("car-card");
const filterForm = document.getElementById("filter-form");
const driverTypeInput = filterForm.querySelector("#tipe-sopir");
const dateInput = filterForm.querySelector("#tanggal");
const pickupTimeInput = filterForm.querySelector("#waktu-jemput");
const passengerCountInput = filterForm.querySelector("#jumlah-penumpang");

async function getCars(date, passengerCount) {
    const carsData = await cars.getCarsData(date, passengerCount);
    let carsDataCard = "";
    carsData.map((car) => {
        carsDataCard += `
        <div class="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
            <div class="card flex-column" style="width: 18rem">
                <img
                    src="${car.image}"
                    class="card-img-top"
                    alt="car-img"
                    style="width: 100%; height: 200px; object-fit: cover;"

                />
                <div class="card-body flex-grow-1">
                    <h5 class="card-title">${car.manufacture} ${car.model}</h5>
                    <p class="card-text price">Rp ${car.rentPerDay} / hari</p>
                    <p class="card-text" style="height: 7rem">
                        ${car.description}
                    </p>
                    <p>
                        <img src="img/fi_users.png" alt="users" /><span
                            class="ps-2"
                            >${car.capacity}</span
                        >
                    </p>
                    <p>
                        <img
                            src="img/fi_settings.png"
                            alt="users"
                        /><span class="ps-2">${car.transmission}</span>
                    </p>
                    <p>
                        <img
                            src="img/fi_calendar.png"
                            alt="users"
                        /><span class="ps-2">Tahun ${car.year}</span>
                    </p>
                    <a href="#" class="btn btn-success btn-pilih"
                        >Pilih Mobil</a
                    >
                </div>
            </div>
        </div>`;
    });
    carCard.innerHTML = carsDataCard;
}

function showError(message) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        confirmButtonColor: "#d63031",
    });
}

filterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const driverType = driverTypeInput.value;
    const date = dateInput.value;
    const pickupTime = pickupTimeInput.value;
    const passengerCount = passengerCountInput.value;

    if (!driverType || !date || !pickupTime) {
        if (!driverType) driverTypeInput.style.borderColor = "red";
        if (!date) dateInput.style.borderColor = "red";
        if (!pickupTime) pickupTimeInput.style.borderColor = "red";

        showError("Tipe Driver, Tanggal, dan Waktu Jemput harus diisi!");
        return;
    }

    getCars(date, passengerCount);
});

driverTypeInput.addEventListener("input", () => {
    if (driverTypeInput.value) {
        driverTypeInput.style.borderColor = "";
    }
});

dateInput.addEventListener("input", () => {
    if (dateInput.value) {
        dateInput.style.borderColor = "";
    }
});

pickupTimeInput.addEventListener("input", () => {
    if (pickupTimeInput.value) {
        pickupTimeInput.style.borderColor = "";
    }
});

getCars("", "");
