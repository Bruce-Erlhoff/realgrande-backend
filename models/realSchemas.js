const mongoose = require('mongoose') 
 
const  HouseSchema= new mongoose.Schema({   
    _id : Number,
    address: String,
    country:String,
    description: String,
    price: Number,
    photo: String
})

// const EnquirySchema = new mongoose.Schema({
//     ename: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: 'Email address is required',
//         validate: [validateEmail, 'Please fill a valid email address'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     },
//     remarks: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// });

const Houses = mongoose.model('House',HouseSchema);

// const Enquiries = mongoose.model('enquiries', EnquirySchema);
// Enquiries.createIndexes();

// export model 
//module.exports = {Houses,Enquiries};
// module.exports = {Houses};  // this doesnt work!!
module.exports = Houses;