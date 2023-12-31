import mongoose from "mongoose";

const headerSchema = new mongoose.Schema({

    header: {
        type: String,
    }

});

export default mongoose.model("headerData", headerSchema);
