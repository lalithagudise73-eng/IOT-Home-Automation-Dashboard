# IoT Home Automation Dashboard

## 📌 Project Description

The **IoT Home Automation Dashboard** is a web-based application designed to monitor and control smart home devices.

The dashboard simulates IoT devices such as lights, fans, an air conditioner, and a door lock. It also displays simulated temperature, humidity, and power-consumption values.

This project demonstrates the basic concepts of **IoT, web-based device control, sensor monitoring, JavaScript simulation, and automated testing**.

## 🎯 Objectives

* Monitor home environmental conditions.
* Control smart home devices from a dashboard.
* Simulate IoT sensor values.
* Display device status in real time.
* Calculate simulated power consumption.
* Test device-control functions using a JavaScript testbench.

## ✨ Features

* 💡 Light ON/OFF control
* 🌀 Fan ON/OFF control
* ❄️ AC ON/OFF control
* 🔒 Door lock/unlock control
* 🌡 Temperature monitoring
* 💧 Humidity monitoring
* ⚡ Power-consumption monitoring
* 🔄 Automatic sensor simulation
* 📱 Responsive dashboard
* 🧪 JavaScript testbench

## 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript
* JSON
* VS Code
* Git
* GitHub
* Node.js for running the testbench and simulation

## 📂 Project Structure

```text
iot-home-automation-dashboard/
│
├── README.md
├── index.html
├── style.css
├── script.js
│
├── testbench/
│   └── testbench.js
│
├── simulation/
│   ├── simulation.js
│   └── sample-data.json
│
└── screenshots/
    └── dashboard.png
```

## ⚙️ How to Run

### Method 1: Browser

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a web browser.
4. Use the buttons to control the simulated devices.

### Method 2: VS Code Live Server

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The dashboard will open in your browser.

## 🧪 Running the Testbench

Install Node.js if it is not already installed.

Open the terminal in the project folder and run:

```bash
node testbench/testbench.js
```

Expected output:

```text
====================================
 IoT HOME AUTOMATION TESTBENCH
====================================

Test 1: Light ON
PASS

Test 2: Fan ON
PASS

Test 3: AC ON
PASS

Test 4: Door Unlock
PASS

Test 5: Power Calculation
PASS

====================================
 TESTBENCH COMPLETED
====================================
```

## 🔬 Running the Simulation

Run:

```bash
node simulation/simulation.js
```

The simulation demonstrates:

```text
Initial State
      ↓
Light ON
      ↓
Fan ON
      ↓
AC ON
      ↓
Door UNLOCKED
      ↓
Power Calculation
      ↓
Simulation Completed
```

## 📊 Example Simulation Result

| Parameter   | Example Value |
| ----------- | ------------: |
| Temperature |         25 °C |
| Humidity    |          60 % |
| Light       |            ON |
| Fan         |            ON |
| AC          |            ON |
| Door        |      UNLOCKED |
| Power       |        1060 W |

## 🏠 System Architecture

```text
        ┌──────────────────────┐
        │     IoT Sensors      │
        │ Temperature/Humidity │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │   JavaScript Logic   │
        │  Device Simulation   │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │  Web Dashboard       │
        │                      │
        │ Light   Fan          │
        │ AC      Door         │
        │ Temp    Humidity     │
        │ Power Consumption    │
        └──────────┬───────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │    User Controls     │
        └──────────────────────┘
```

## 🧪 Test Cases

| Test Case | Input          | Expected Result                 |
| --------- | -------------- | ------------------------------- |
| TC01      | Light ON       | Light becomes ON                |
| TC02      | Fan ON         | Fan becomes ON                  |
| TC03      | AC ON          | AC becomes ON                   |
| TC04      | Door toggle    | Door becomes UNLOCKED           |
| TC05      | All devices ON | Power = 1060 W                  |
| TC06      | Sensor update  | Temperature and humidity update |

## 🔮 Future Enhancements

* Connect the dashboard to an ESP32.
* Add real temperature and humidity sensors.
* Use MQTT for communication.
* Add user authentication.
* Add energy-consumption graphs.
* Add voice control.
* Add mobile application support.
* Store sensor data in a cloud database.
* Add automatic scheduling for devices.

## 📚 Learning Outcomes

After completing this project, the student will understand:

* Basic IoT architecture.
* Web dashboard development.
* JavaScript event handling.
* Sensor-data simulation.
* Device-state management.
* Automated testing.
* Git and GitHub project management.

## ✅ Conclusion

The IoT Home Automation Dashboard provides a simple simulation of a smart home environment. It demonstrates how IoT devices can be monitored and controlled through a web interface while providing simulated sensor readings and power consumption.

The project can be extended by connecting the dashboard to real IoT hardware such as an **ESP32, sensors, relays, and MQTT server**.
