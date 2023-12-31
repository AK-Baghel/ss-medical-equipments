import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    category: {
        type: String
    },
    subCategory: {
        type: String
    }
})

export default mongoose.model("subCategoryData", subCategorySchema)