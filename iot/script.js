// Device states

let devices = {
    light: false,
    fan: false,
    ac: false,
    door: true
};

// Toggle IoT device

function toggleDevice(device) {

    if (device === "door") {

        devices.door = !devices.door;

        document.getElementById("door-status").textContent =
            devices.door ? "LOCKED" : "UNLOCKED";

    } else {

        devices[device] = !devices[device];

        document.getElementById(device + "-status").textContent =
            devices[device] ? "ON" : "OFF";
    }

    calculatePower();

    updateTime();
}


// Calculate simulated power consumption

function calculatePower() {

    let power = 0;

    if (devices.light) {
        power += 10;
    }

    if (devices.fan) {
        power += 50;
    }

    if (devices.ac) {
        power += 1000;
    }

    document.getElementById("power").textContent = power + " W";
}


// Generate simulated sensor values

function updateSensors() {

    let temperature =
        Math.floor(Math.random() * 8) + 23;

    let humidity =
        Math.floor(Math.random() * 20) + 50;

    document.getElementById("temperature").textContent =
        temperature + " °C";

    document.getElementById("humidity").textContent =
        humidity + " %";

    updateTime();
}


// Update timestamp

function updateTime() {

    let currentTime = new Date();

    document.getElementById("time").textContent =
        currentTime.toLocaleTimeString();
}


// Simulate sensors every 5 seconds

setInterval(updateSensors, 5000);


// Initial dashboard update

updateSensors();
calculatePower();