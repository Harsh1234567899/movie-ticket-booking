import mongoose from "mongoose";

const showSchema =  new mongoose.Schema(
    {
        movie: {type: String , required: true , ref: 'Movie'},
        showDateTime: {type: Date , required: true},
        showPrice: {type: String , required: true},
        occupiedSeats: {type: Map,          // or Object
            of: String,         // userId who booked the seat
            default: {}},
    }, {minimize: false}
)

const Show = mongoose.model('Show',showSchema)

export default Show