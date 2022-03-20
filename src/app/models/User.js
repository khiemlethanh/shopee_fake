const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const User = new Schema({
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);