import mongoose from "mongoose";

const CuroselSchema = new mongoose.Schema({
    images : {
        type : Array,
        required : true
    }
})

export const Curosel = mongoose.model("curosel", CuroselSchema)

