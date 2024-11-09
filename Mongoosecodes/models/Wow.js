import mongoose from "mongoose";

const WowSchema = new mongoose.Schema({
    title: { type: String, required: true, default: "Title" },
    desc: String,
    isDone: Boolean
});


export const Wow = mongoose.model('Wow', WowSchema);