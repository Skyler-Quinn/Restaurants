/*const express = require('express')
const mongoose = require('mongoose')

const app = express()
const uri = "mongodb+srv://admin:admin@cluster0.aajywfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DB_NAME = "restaurants_db";

mongoose.connect(uri + DB_NAME);

const UserSchema = new mongoose.Schema({
name: String,
phone: String,
address: String,
img: String
})

const UserModel = mongoose.model("restaurants", UserSchema);

app.get("/getRestaurants", (req, res) => {
UserModel.find({}).then(function(users) {
    res.json(users)
    }).catch(function(err) {
        console.log(err)

    })
})

app.post('/addRestaurant', (req, res)=>{
    database.collection ("restaurants").count({}, function (error, numOfDocs) {
    database.collection("restaurants").insertOne({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        img: req.body.img
    });
    response.json("Added Succesfully");
    })
})

app.listen(3000, () => {
console.log("Server is running...")
})*/

const express = require('express');
const mongoose = require('mongoose');
var cors = require("cors");
const multer  = require('multer');

const app = express();
const uri = "mongodb+srv://admin:admin@cluster0.aajywfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var DB_NAME = "restaurants_db";

const PORT = 3000;

mongoose.connect(uri + DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    phoneNumber: String,
   img: String 
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

app.use(express.json());
app.use(cors());

app.get("/getRestaurants", (req, res) => {
    Restaurant.find({}).then(function(users) {
        res.json(users)
    }).catch(function(err) {
        console.log(err)    
    })
})

const upload = multer({ dest: 'uploads/' }); 

app.post('/restaurants', upload.single('img'), async (req, res) => {
    try {
        let { name, address, phoneNumber, img } = req.body;

        if (req.is('json')) {
            const jsonData = JSON.parse(req.body);
            name = jsonData.name;
            address = jsonData.address;
            phoneNumber = jsonData.phoneNumber;
            img = jsonData.img;
        }

        const restaurant = new Restaurant({ name, address, phoneNumber, img});
        const savedRestaurant = await restaurant.save();
        res.json(savedRestaurant);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
