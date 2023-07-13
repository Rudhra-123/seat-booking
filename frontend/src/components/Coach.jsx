import React, { useState, useEffect } from 'react'
import "./coach.css"
import axios from "axios"
import { Notification } from './Notification/Notification';
export const Coach = () => {
    const [requiredSeats, setRequiredSeats] = useState("");
    const [allSeatsdata, setAllSeatsData] = useState([])
    const [showError, setShowError] = useState(false);
    const handleInput = (e) => {
        let value = parseInt(e.target.value);
        setRequiredSeats(value);
        setShowError(false);

    }

    const validateInput = () => {
        // Perform input validation logic here
        const isValid = parseInt(requiredSeats) >= 1 && parseInt(requiredSeats) <= 7;
        return isValid;
    };


    const allSeats = async () => {
        try {
            const res = await axios.get("http://localhost:8080/seats");
            setAllSeatsData(res.data)
        } catch (error) {
            console.log("error while fetching the data", error.message)
        }

    }


    const handleBooking = async () => {
        if (!validateInput()) {
            setShowError(true); // Show error message if input is invalid
            setRequiredSeats("")
            return;
        }

        try {

            const resp = await axios.put(`http://localhost:8080/seats/${requiredSeats}`);
            console.log(resp.data)
            allSeats()
            setRequiredSeats("")


        } catch (error) {
            console.log("error while booking the seats", error.message)

        }



    };

    const handleReseting = async () => {
        try {
            await axios.put(`http://localhost:8080/seats/resetAll`);
            allSeats()

        } catch (error) {
            console.log("error while reseting the seats", error.message)
        }

    }

    useEffect(() => {
        if (!showError) {
            setRequiredSeats("");
        }
    }, [showError]);


    useEffect(() => {
        allSeats()
    }, [])
    return (
        <div className='container'>
            <h1>Seat Booking System</h1>
            <div className='mainComponent'>

                <div className='coach'>
                    {
                        allSeatsdata.length !== 0 ? allSeatsdata.map((item, index) => (
                            <div key={index} className='seats' style={{ background: item.status === true ? "#00bdf2" : "#bcb5b5", color: item.status === true ? "white":"white" }}>
                                <p>{item.seatNo}</p>
                            </div>
                        )) : <div className='loading'>Loading...</div>
                    }

                </div>

                <div className='booking'>

                    <div className='seatStatus'>
                        <div className='seatSattusDiv'>
                            <div className='statusColorbooked'></div>
                            <div>Booked Seats</div>
                        </div>
                        <div className='seatSattusDiv'>
                            <div className='statusColoravail'></div>
                            <div>Available Seats</div>
                        </div>
                    </div>


                    <div className='inputButton'>
                    <input type="number" placeholder='Enter Number 1-7 to book Seats' value={requiredSeats} onChange={(e) => { handleInput(e) }} />
                    <button className='bookingButton' onClick={handleBooking}>Book Ticket</button>
                    <button className='resetAll' onClick={handleReseting}>Reset Bookings</button>
                    </div>

                </div>
            </div>

            {(showError) && (
                <Notification message="Invalid input. Please enter a value between 1 and 7." />
            )}
        </div>
    )
}
