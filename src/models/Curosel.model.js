import mongoose from "mongoose";

const CuroselSchema = new mongoose.Schema({
        image1: {
            type: String,
            required: true
        },
        image2: {
            type: String,
            required: true
        },
        image3: {
            type: String,
            required: true
        }
    
})

export const Curosel = mongoose.model("curosel", CuroselSchema)

