import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import headerData from "./models/masterHeader.js"
import categoryData from "./models/masterCategory.js"
import subCategoryData from "./models/masterSubCategory.js";
import loginData from "./models/masterLogin.js"
import productData from "./models/masterProduct.js"

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
app.get("/loginData", async (req, resp) => {
    const data = await loginData.find();
    resp.send(data)
})
app.get("/productData", async (req, resp) => {
    const data = await productData.find();
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
app.post("/productData", async (req, resp) => {
    let user = new productData(req.body);
    let result = await user.save();
    resp.send(result);
    console.log(result);
})




app.delete("/header/:id", async (req, resp) => {
    const result = await headerData.deleteOne({ _id: req.params.id });
    resp.send(result);
})
app.delete("/category/:id", async (req, resp) => {
    const result = await categoryData.deleteOne({ _id: req.params.id });
    resp.send(result);
})
app.delete("/subCategory/:id", async (req, resp) => {
    const result = await subCategoryData.deleteOne({ _id: req.params.id });
    resp.send(result);
})



// app.put('/product/:id', async (req, resp) => {
//     let result = await Product.updateOne({ _id: req.params.id }, { $set: req.body })
//     resp.send(result);
// })



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