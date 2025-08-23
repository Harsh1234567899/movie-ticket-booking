import Booking from "../models/Booking.js"
import Show from "../models/Show.js"

//function to check seat is available or not 
const checkSeatsAvailability = async (showId,selectedSeats)=> {
    try {
        const showData = await Show.findById(showId)
        if(!showData) return false

        const occupiedSeats =showData.occupiedSeats
        const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat])

        return !isAnySeatTaken
    } catch (error) {
        console.log(error.message)
        return false
    }
}

export const createBooking = async (req,res) => {
    try {
        const {userId} = req.auth()
        const {showId , selectedSeats} = req.body
        const {origin} = req.headers

        // check if seats avilable
        const isAvailable = await checkSeatsAvailability(showId , selectedSeats)
        if(!isAvailable){
            return res.json({success:false,message: "seat are not avilable"})
        }
        //get the show details
        const showData = await Show.findById(showId).populate('movie')

        //create new booking
        const booking = await Booking.create({
            user: userId,
            show: showId,
            amount: showData.showPrice * selectedSeats.length,
            bookedSeats: selectedSeats,

        })
        selectedSeats.map((seat)=> {
            showData.occupiedSeats[seat] = userId
        })
        showData.markModified('occupiedSeats')

        await showData.save()

        //payment gatway

        res.json({success: true,message: 'booked'})
    } catch (error) {
        console.log(error.message)
        res.json({success: false,message: error.message})
    }
}

export const getOccupiedSeats = async (res,req) => {
    try {
        const {showId} = req.params
        const showData = await Show.findById(showId)
        const occupiedSeats = Object.keys(showData.occupiedSeats)
        res.json({success: true,occupiedSeats})
    } catch (error) {
        console.log(error.message)
        res.json({success: false,message: error.message})
    }
}