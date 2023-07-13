
# Seat Booking System

The Seat Booking System is a web application that allows users to book seats in a coach. It provides a user-friendly interface for selecting seats and managing bookings. 

## Features
- Display available and booked seats in the coach.
- Book a seat by selecting the desired seat number.
- Reset all bookings to make all seats available again.
- one can book maximum 7 seats at a time.

## Technologies Used
- **Frontend:** React.js
- **Backend:**   Node.js with Express.js
- **Database:** MongoDB
- **Deployment:**  Frontend- Netlify && Backend - Render
- **Version Control:** GIT

# Frontend
The frontend of the Seat Booking System is built using React.js, a popular JavaScript library for building user interfaces. It leverages the power of React components and state management to provide a dynamic and interactive user experience.


## Installation

1. Clone the repository:

```bash
  git clone https://github.com/hemantjayas/seatBookingApp
```
2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install the dependencies:
```bash
npm install
```
## Usage

1. Start the frontend development server:
```bash
npm start
```

2. Open a web browser and visit http://localhost:3000 to access the Seat Booking System.


# Backend

The backend of the Seat Booking System is built using Node.js and Express.js, providing a RESTful API for handling seat bookings and retrieving seat information from the database.
## Installation

1. Clone the repository:
```bash
git clone https://github.com/hemantjayas/seatBookingApp
```
2. Navigate to the backend directory:
```bash
cd backend
```
3. Install the dependencies:
```bash
npm install
```

### Configuration
1. Create a .env file in the backend directory.
2. Add the following environment variables to the .env file:

```makefile
PORT=<backend-port>
MONGODB_URI=<mongodb-connection-string>
```

Replace <backend-port> with the desired port number for the backend server.

Replace <mongodb-connection-string> with the connection string for your MongoDB database.

## Usage 
1. Start the backend server:
```bash
npm run dev
```
The backend server will start listening on the configured port.
2. The API endpoints will be available at 
`http://localhost:<backend-port>/seats`.



This README provides an overview of the Seat Booking System, including instructions for setting up the frontend and backend environments. It also includes information on how to contribute to the project and the license under which it is distributed. Feel free to customize it further according to your specific project requirements.