const { Schema, model } = require("mongoose");

const tripSchema = new Schema(
    {
        _id: Number,
        user_id: {
            type: Schema.Types.ObjectId,
            ref: User
        },
        from: {
            type: Schema.Types.ObjectId,
            ref: Location
        },
        to: {
            type: Schema.Types.ObjectId,
            ref: Location
        },
        date: Date,
        duration: String,
        base_price: {
            value: Number,
            currency: String
        }

    }

);

const Trip = model("Trip", tripSchema);

module.exports = Trip;
