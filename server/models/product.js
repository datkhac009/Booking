import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    nameTour:{
        type:String,
        required:[true,"Please add to name Tuour"]
    },
    seats:{
        type:String,
        required:[true,"Please add to seats"]
    },
    location:{
        type:String,
        required:[true,"Please add to location"]
    },
    titleName:{
        type:String,
        required:[true,"Please add to titleName"]
    },
    operatingTime:{
        type:String,
        required:[true,"Please add to operatingTime"]
    },
    placeTour:{
        type:String,
        required:[true,"Please add to placeTour"]
    },
    price:{
        type:String,
        required:[true,"Please add to price"]
    }
})
const product = mongoose.model("product",productSchema);
export default product; 