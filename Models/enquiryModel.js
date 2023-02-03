import mongoose, { SchemaTypes } from "mongoose";

const enquirySchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type: String,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    product:{
        type: String,
        required:true
    },
    enquiry:{
        type: String,
        required:true
    }
},
    {
        timestamps: true


    })

var EnquiryModel = mongoose.model("Enquiry", enquirySchema)
export default EnquiryModel