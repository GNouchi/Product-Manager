const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const { alphaOnly } = require('./masterValidator')(); 

mongoose.connect(
    'mongodb://localhost/productmanager',
    {useNewUrlParser:true},
    err => err ? console.log(err) : console.log("====> db running fine"),    
)


const ProductSchema = new Schema({
    title: { 
        type: String, 
        minlength: 4,
        maxlength: 45,
        required:[true,'Please enter a name'],
        validate: [ alphaOnly.validator, alphaOnly.description, ],
        unique: true,
        uniqueCaseInsensitive: true ,
    },
    price:  { 
        type: String, 
        required:true,
        min: 1.00,
    },
    url:{ 
        type:String, 
        minlength: 8,
        maxlength: 200,
     },
})

ProductSchema.plugin(uniqueValidator, { message: 'Sorry, that product is already on our site!' });



module.exports = {
    Product : mongoose.model('Product', ProductSchema),
}