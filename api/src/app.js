const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routers/user")
const cors = require('cors');
const {port, host, mongoURL} = require("./configuration/index")

const app = express()
app.use(
    cors()
);

app.use(express.json()) //body-parser
app.use("/users", userRouter)


const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is absolutely available on http://${host}:${port}`)
    })
}

mongoose.connect(mongoURL)
mongoose.connection.on('error', (error) => {
    console.log(error.message);
}).once('open', () => {
    startServer();
})


