console.log("====================================");
console.log(" IoT HOME AUTOMATION TESTBENCH");
console.log("====================================");


// Simulated device states

let devices = {
    light: false,
    fan: false,
    ac: false,
    door: true
};


// Toggle device function

function toggleDevice(device) {

    devices[device] = !devices[device];

    return devices[device];
}


// Power calculation

function calculatePower() {

    let power = 0;

    if (devices.light)
        power += 10;

    if (devices.fan)
        power += 50;

    if (devices.ac)
        power += 1000;

    return power;
}


// Test 1: Light

console.log("\nTest 1: Light ON");

toggleDevice("light");

console.log(
    devices.light === true
    ? "PASS"
    : "FAIL"
);


// Test 2: Fan

console.log("\nTest 2: Fan ON");

toggleDevice("fan");

console.log(
    devices.fan === true
    ? "PASS"
    : "FAIL"
);


// Test 3: AC

console.log("\nTest 3: AC ON");

toggleDevice("ac");

console.log(
    devices.ac === true
    ? "PASS"
    : "FAIL"
);


// Test 4: Door

console.log("\nTest 4: Door Unlock");

toggleDevice("door");

console.log(
    devices.door === false
    ? "PASS"
    : "FAIL"
);


// Test 5: Power

console.log("\nTest 5: Power Calculation");

let power = calculatePower();

console.log(
    power === 1060
    ? "PASS"
    : "FAIL"
);


console.log("\n====================================");
console.log(" TESTBENCH COMPLETED");
console.log("====================================");