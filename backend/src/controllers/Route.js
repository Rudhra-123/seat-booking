const express = require("express")
const Seats = require("../models/seatSchema");
const router = express.Router();
const seatArray = require("../data")


router.post("/", async (req, res) => {
    try {
        // const totalseats = await Seats.find();
        const seat = await Seats.insertMany(seatArray);
        res.status(201).send(seat)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
});


router.get("/", async (req, res) => {
    try {
        const allseats = await Seats.find().sort({seatNo:1}).lean().exec();
        res.send(allseats);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
});


router.put("/resetAll", async (req, res) => {

    try {
        const allSeats = await Seats.updateMany({}, { $set: { status: true } });
        res.status(201).json({ message: "Seats reset successfully." })
        console.log("in reset one")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


router.put("/:requiredSeats", async (req, res) => {
    console.log("in required one")
    const requiredSeats = parseInt(req.params.requiredSeats);
    // Validate the requiredSeats value
    if (requiredSeats < 1 || requiredSeats > 7) {
        return res.status(400).json({ message: "Invalid input. Please enter a value between 1 and 7." });
    }
    const availableSeats = await Seats.find({ status: true }).sort({ seatNo: 1 });

    let seatsBooked = false;
    let bookedSeats = [];

    for (let i = 0; i < availableSeats.length; i++) {
        const currentSeat = availableSeats[i];
        const currentRow = currentSeat.row;

        const rowSeats = availableSeats.filter(
            (seat) => seat.row === currentRow && seat.status === true
        );

        if (rowSeats.length >= requiredSeats) {
            try {
                bookedSeats = rowSeats.slice(0, requiredSeats)
                const seatIdsToUpdate = rowSeats.slice(0, requiredSeats).map((seat) => seat._id);
                console.log(bookedSeats)
                await Seats.updateMany(
                    { _id: { $in: seatIdsToUpdate } },
                    { $set: { status: false } }
                );

                seatsBooked = true;
                break;
            } catch (error) {
                return res.status(500).json({ message: error.message });
            }
        }
    }



    // Check if seats were successfully booked
    if (seatsBooked) {
        res.status(201).send(bookedSeats);
    } else {
        const closestSeatsAvailableToUpdate = closestSeats(availableSeats, requiredSeats);
        try {
            const closestSeatsIDsToUpdate = closestSeatsAvailableToUpdate.map((seat) => seat._id);
            const closestUpdated = await Seats.updateMany(
                { _id: { $in: closestSeatsIDsToUpdate } },
                { $set: { status: false } }
            );
            res.status(201).send(closestSeatsAvailableToUpdate)

        } catch (error) {

            return res.status(404).json({ message: "Required number of seats not available.", reason: error.message })
        }



    }
});



const closestSeats = (seatsArray, seatWindow) => {
    seatsArray.sort((a, b) => a.seatNo - b.seatNo)
    let minDistance = Infinity;
    let closestSeatsAvailable = [];
    for (let i = 0; i < seatsArray.length - seatWindow; i++) {
        const currentDistance = seatsArray[i + seatWindow - 1].seatNo - seatsArray[i].seatNo

        if (currentDistance < minDistance) {
            minDistance = currentDistance;
            closestSeatsAvailable = seatsArray.slice(i, i + seatWindow)
        }
    }
    return closestSeatsAvailable
}








module.exports = router