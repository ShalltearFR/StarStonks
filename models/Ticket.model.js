const { Schema, model } = require("mongoose");

const ticketSchema = new Schema(
    {
        id: Number,
        trip_id: {
            type: Schema.Types.ObjectId,
            ref: "Trip"
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        passengers: Number,
        bags: Number,
        class: String,
        price: {
            value: Number,
            currency: {
                type: String,
                default: "EUR"
            }
        }
    }
);

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;