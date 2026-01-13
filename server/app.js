let express = require('express')
const mongoDb = require('./config/mongoDb');
const userRoute = require('./routes/userRoute');

let app = express()
app.use(express.json())

mongoDb();

app.use('/api/user', userRoute)


app.listen(3000, () => {
    console.log("Mithra-app server Connected");
})
