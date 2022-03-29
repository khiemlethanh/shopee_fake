const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const User = new Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true },
    fullAddress: { type: String, },
    city: { type: String, },
    country: { type: String, },
    telephone: { type: String, },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);