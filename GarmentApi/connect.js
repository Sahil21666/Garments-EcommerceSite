const mongoose = require("mongoose")
require("dotenv").config();

const connectDB = async () => {
    try {
        // console.log(process.env.MONGODB_URI)
        return await mongoose.connect(
            process.env.MONGODB_URI

        )
        console.log("success");


    } catch (err) {
        console.log(err);


    }
}
connectDB();
const productschema = mongoose.Schema({
    Leggings: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Jeggings: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Fashion_Wear: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Inner_Wear: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Active_Wear: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Accesories: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Blouse: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Bermudas: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Capri: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Track_Pant: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Track_pant_slim_fit: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    Joggers: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    new_arrival: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ],
    best_seller: [
        {
            id: Number,
            name: String,
            image: {
                main: String,
                back: String,
                side_view_1: String,
                side_view_2: String
            },
            rating: Number,
            price: Number,
            category: String,
            description: String,
            stock: Number
        }
    ]
})

module.exports = connectDB;
module.exports = mongoose.model("Product", productschema);
