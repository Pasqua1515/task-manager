const { timeStamp } = require("console")
const { default: mongoose } = require("mongoose")
const {Schema, model} = require("mongoose")

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
       
    }
},{
    timeStamp: true
})

const Tasks = model("Task", taskSchema)

module.exports = Tasks