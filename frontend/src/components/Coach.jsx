import React, { useState, useEffect } from 'react'
import "./coach.css"
import axios from "axios"
export const Coach = () => {
    const [requiredSeats, setRequiredSeats] = useState(0);
    const [allSeatsdata, setAllSeatsData] = useState([])

    const handleInput = (e) => {
        setRequiredSeats(e.target.value)
    }

    const allSeats = async () => {
        try {
            const res = await axios.get("http://localhost:8080/seats");
            console.log(res.data)
            setAllSeatsData(res.data)
        } catch (error) {
            console.log("error while fetching the data", error.message)
        }

    }


    useEffect(() => {
        allSeats()
    }, [])

    console.log(requiredSeats)
    return (
        <div className='container'>
            <h1>Seat Booking System</h1>
            <div className='mainComponent'>

                <div className='coach'>
                    {
                        allSeatsdata.length !== 0 ? allSeatsdata.map((item, index) => (
                            <div key={index} className='seats'>
                                <p>{item.seatNo}</p>
                            </div>
                        )):<div className='loading'>Loading...</div>
                    }

                </div>

                <div className='booking'>

                    <input type="number" onChange={(e) => { handleInput(e) }} />
                    <button>Book Ticket</button>
                    <button>Reset Bookings</button>

                </div>
            </div>
        </div>
    )
}
