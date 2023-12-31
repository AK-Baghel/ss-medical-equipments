import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
// import newVamaniData from "./models/newVamaniData.js";
// import newVamaniLogin from "./models/newVamaniLogin.js";
import headerData from "./models/masterHeader.js"
import categoryData from "./models/masterCategory.js"
import subCategoryData from "./models/masterSubCategory.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDb();



app.get("/headerData", async (req, resp) => {
    const data = await headerData.find();
    resp.send(data)
})
app.get("/categoryData", async (req, resp) => {
    const data = await categoryData.find();
    resp.send(data)
})
app.get("/subCategoryData", async (req, resp) => {
    const data = await subCategoryData.find();
    resp.send(data)
})




app.post("/headerData", async (req, resp) => {
    let user = new headerData(req.body);
    let result = await user.save();
    resp.send(result);
    console.log(result);
})
app.post("/categoryData", async (req, resp) => {
    let user = new categoryData(req.body);
    let result = await user.save();
    resp.send(result);
    console.log(result);
})
app.post("/subCategoryData", async (req, resp) => {
    let user = new subCategoryData(req.body);
    let result = await user.save();
    resp.send(result);
    console.log(result);
})





// app.post('/signin', async (req, resp) => {
//     // console.warn(req.body);
//     if (req.body.password && req.body.login) {
//         let user = await newVamaniLogin.findOne(req.body);
//         if (user) {
//             resp.send(user);
//         }
//     }
// })

// app.post("/login", async (req, resp) => {
//     let data = new newVamaniLogin(req.body);
//     let result = await data.save();
//     resp.send(result);
//     console.log(result);
// })

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
})