const { Schema, model } = require("mongoose");

const tripSchema = new Schema(
    {
        from: {
            type: Schema.Types.ObjectId,
            ref: "Location"
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: "Location"
        },
        date: Date,
        arrived: Date,
        base_price: {
            value: Number,
            currency: {
                type: String,
                default: "EUR"
            }
        },
        class : String

    }

);

const Trip = model("Trip", tripSchema);

module.exports = Trip;
