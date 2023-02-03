import EnquiryModel from "../Models/enquiryModel.js";
import mongoose from "mongoose";

//Create new Post

export const createEnquiry = async (req, res) => {
    const newEnquiry = new EnquiryModel(req.body);
    newEnquiry._id = mongoose.Types.ObjectId();
    try {
        await newEnquiry.save();
        res.status(200).json(newEnquiry);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

//Get a Post
export const getEnquiry = async (req, res) => {
   
    try {
        const enquiey = await EnquiryModel.find();

        res.status(200).json(enquiey);
    } catch (error) {
        res.status(500).json(error);
    }
};




export const deleteEnquiry = async (req, res) => {
   const {id}=req.params;
    try {
        const enquiey = await EnquiryModel.deleteOne( { _id :id } );

        res.status(200).json(enquiey);
    } catch (error) {

        res.status(500).json(error);
    }
};


