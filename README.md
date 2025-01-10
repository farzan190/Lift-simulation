# Lift Simulation

This project simulates a lift (elevator) system with multiple lifts and floors. It dynamically responds to floor requests, manages lift movement, and provides real-time status updates. The system also optimizes lift allocation for faster response times.

## Features

- **Multiple Lifts and Floors:** The system allows you to generate multiple lifts and floors based on user input, creating a dynamic environment.
- **Efficient Lift Allocation Algorithm:** An optimized algorithm handles simultaneous floor requests, allocating lifts based on direction, distance, and availability to ensure quicker response times.
- **Queue System for Coordination:** The system includes a queue that coordinates lift movements, avoiding overlapping and ensuring smooth traffic flow, especially on busy floors.
- **Real-Time Lift Status:** The live status of each lift is logged in JSON format to the console, providing real-time updates on lift positions, directions, and states.

## How It Works

1. **Lift Movement Simulation:** Lifts move between floors based on floor requests. Each lift is assigned a task based on its current state (Idle, In Progress, Moving).
2. **Efficient Request Handling:** When a floor request is made, the system prioritizes lifts based on proximity and direction to optimize the allocation process.
3. **Queue for Collision Avoidance:** A queue ensures that multiple lifts are properly coordinated, avoiding any overlap in movements or conflicting requests.
4. **JSON Logging for Live Updates:** The current status of each lift (position, direction, and state) is logged to the console in real-time using a JSON format.

## Technologies Used

- **JavaScript:** For creating the simulation logic and managing interactions.
- **JSON:** For logging live data of lift movements and statuses.

## How to Run the Project

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/lift-simulation.git
