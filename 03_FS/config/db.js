const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");


//we connect the mongo db using mongoose driver

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("MongoDB Conneted ....");

    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB;