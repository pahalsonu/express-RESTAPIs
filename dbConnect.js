const mongoose = require("mongoose");
const config = require('./config/index.json')

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo_uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
        console.log("Mongo DB Connected.")
    } catch (err) {
        console.log(err);
    }
}

connectDB();