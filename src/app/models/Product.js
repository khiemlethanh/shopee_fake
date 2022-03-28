const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    Category: { type: String },
    status: { type: String },
    country: { type: String },
    // image: { type: String },
    qty: { type: Number },
    price: { type: String },
    discount:{type:Number},
    keywords: {type: String},
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Product', Product);