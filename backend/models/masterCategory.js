import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    header: {
        type: String,
    },
    category: {
        type: String,
    }

});

export default mongoose.model("categoryData", categorySchema);
