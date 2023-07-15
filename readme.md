
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

# overview

The Seat Booking System is designed to facilitate the booking of seats in a coach. It allows user to view the available seats and make bookings based on the stated logic. The system keeps track of the booked seats and updates the availability status in real-time.

## Booking Logic

The Seat Booking System implements the following logic for seat bookings:

When a user requests to book a certain number of seats:

The system checks each row to determine if there are enough consecutive available seats to accommodate the user's request. 

1. If there are enough consecutive available seats in a single row:
- The system books the seats in that row, marking them as "Booked" and updating their availability status.


![App Screenshot](https://drive.google.com/file/d/1Kbke43Vygkse7TD7KPE3jM_VwC2bGfmB/view?usp=sharing)

here the required seates are available to book in a row. So 
system booked the seats in that row

![App Screenshot](https://drive.google.com/file/d/1vxHHWhBgDC2kOXeMblzVNX0l3IS_BEEx/view?usp=sharing)


2. If there are not enough consecutive available seats in any row:
- The system searches for the closest available seats across all rows that can accommodate the requested number of seats.
- It calculates the distance between each available seat and its neighboring seats to determine the proximity.

![App Screenshot](https://drive.google.com/file/d/1EdzLyoQ-8DVjTnIk9iQZ99mAfCOQ8o_V/view?usp=sharing)

- The system then selects the seats with the closest proximity, ensuring they are adjacent to each other.

![App Screenshot](https://drive.google.com/file/d/1nyifRpnsiqUAo2cLp5vh3TlGMWLjfI9G/view?usp=sharing)

- These seats are booked, marked as "Booked," and their availability status is updated.


By following this logic, the system ensures that when the required number of seats is available in a single row, they are booked together. However, if the required number of seats is not available in any row, the system selects and books the seats that are closest to each other across rows.





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
