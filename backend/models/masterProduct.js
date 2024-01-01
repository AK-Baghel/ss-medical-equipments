import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
})

export default mongoose.model("productData", productSchema);
