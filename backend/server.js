import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import headerData from "./models/masterHeader.js"
import categoryData from "./models/masterCategory.js"
import subCategoryData from "./models/masterSubCategory.js";
import loginData from "./models/masterLogin.js"
import productData from "./models/masterProduct.js"

import fs from "fs"  //uploadImage

import multer from "multer";    //uploadImage

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')) //uploadImage & also create "uploads" folder to store the images

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


//Random data from model
app.get('/randomProducts', async (req, res) => {
    try {
        const randomProducts = await productData.aggregate([{ $sample: { size: 3 } }]); // Fetch 3 random documents
        res.json(randomProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});



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


//************************************************* IMAGE GET & POST ************************************************************


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg'); // Define file name (fieldname + timestamp + extension)
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 500000 },
}).single('photo');

app.post('/uploadData', upload, async (req, res) => {
    try {
        const { name, title, desc } = req.body;
        const image = req.file ? req.file.path : ''; // Get the uploaded image path

        const newData = new productData({
            name,
            title,
            desc,
            image, // Save the image path to the model
        });

        await newData.save();
        res.status(201).json({ message: 'Data added successfully!' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/uploadData', async (req, res) => {
    try {
        const data = await productData.find(); // Retrieve all data from the model
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get("/uploadData/:id", async (req, resp) => {

    let result = await productData.findOne({ _id: req.params.id });    // Retrieve particulat data from the model
    if (result)
        resp.send(result);
    else
        resp.send({ result: "NO RECORD FOUND" });

})


app.delete('/uploadData/:id', async (req, res) => {
    const { id } = req.params;

    try {

        const dataToDelete = await productData.findById(id);

        if (!dataToDelete) {
            return res.status(404).json({ error: 'Data not found' });
        }

        // Delete associated photo
        if (dataToDelete.image) {
            // const image = path.join(__dirname, '..', 'uploads', dataToDelete.image);
            fs.unlinkSync(dataToDelete.image); // Delete the file
        }

        await productData.deleteOne({ _id: req.params.id }); // Delete data from database

        res.status(200).json({ message: 'Data deleted successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


//************************************************* IMAGE GET & POST ************************************************************


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