const mongoose = require('mongoose')
 
const  HouseSchema= new mongoose.Schema({   
    _id : Number,
    address: String,
    county:String,
    description: String,
    price: Number,
    photo: String
})

const EnquirySchema = new mongoose.Schema({
    ename: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,     // not unique so that a particular user can have multiple enquiries
    },
    remarks: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true    // unique here because it's a login
    },
    pass: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum:['customer','realtor'],    // we will have one realtor per county
        default: 'customer'
    }
});


const Houses = mongoose.model('House',HouseSchema);


const Enquiries = mongoose.model('Enquiry', EnquirySchema);
Enquiries.createIndexes();


const Users = mongoose.model('User', UserSchema);
Users.createIndexes();


// export model
module.exports = {Houses,Enquiries,Users};


