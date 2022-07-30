const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
    {
        id: Number,
        trip_id: {
            type: Schema.Types.ObjectId,
            ref: Trip
        },
        passengers: Number,
        bags: Number,
        class: String,
        price: {
            value: Number,
            currency: 'EUR'
        }
    }
);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;