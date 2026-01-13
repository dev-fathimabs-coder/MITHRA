let mongoose = require('mongoose')

async function mongoDb() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Mithra");
        console.log("mongoDb is Connected");
    } catch (err) {
        console.error("Connection Error", err);
        process.exit(1);
    }
}

module.exports = mongoDb

