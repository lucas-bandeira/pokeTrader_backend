const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema(
    {
        pokeLeft: {
            type: String,
            required: true,
        },
        pokeRight: {
            type: String,
            required: true,
        },
        tradedAt: {
            type: Date,
            required: true,
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Trade', TradeSchema);

