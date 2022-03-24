const express = require("express")
//const dotenv = require("dotenv")
const taskRoutes = require("./routes/taskRoute")
require("./db/mongoose")

const Task = require("./routes/taskRoute")

const app = express()
const port = process.env.port || 8080
app.use(express.json())
app.use(taskRoutes)

app.listen(port, () => {
    console.log("App is listening on port " + port)
})