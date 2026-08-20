
console.log("====================================");
console.log(" IoT HOME AUTOMATION SIMULATION");
console.log("====================================");


// Initial sensor values

let temperature = 25;
let humidity = 60;


// Device states

let light = false;
let fan = false;
let ac = false;
let doorLocked = true;


// Display initial state

console.log("\nInitial State");

console.log("Temperature:", temperature, "°C");
console.log("Humidity:", humidity, "%");
console.log("Light:", light ? "ON" : "OFF");
console.log("Fan:", fan ? "ON" : "OFF");
console.log("AC:", ac ? "ON" : "OFF");
console.log("Door:", doorLocked ? "LOCKED" : "UNLOCKED");


// Simulation Step 1

console.log("\nSimulation Step 1");

light = true;

console.log("Light turned ON");


// Simulation Step 2

console.log("\nSimulation Step 2");

fan = true;

console.log("Fan turned ON");


// Simulation Step 3

console.log("\nSimulation Step 3");

ac = true;

console.log("AC turned ON");


// Simulation Step 4

console.log("\nSimulation Step 4");

doorLocked = false;

console.log("Door UNLOCKED");


// Calculate power

let power = 0;

if (light)
    power += 10;

if (fan)
    power += 50;

if (ac)
    power += 1000;


console.log("\nFinal Power Consumption:", power, "W");

console.log("\n====================================");
console.log(" SIMULATION COMPLETED");
console.log("====================================");