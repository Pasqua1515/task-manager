const express = require("express")

const Task = require("../models/taskModel")
const router = express.Router()

router.post("/tasks", async(req,res)=>{
    try{
    console.log("New task posted")

    const { title, description, completed} = req.body;

    const task =await  Task.create({ title, description, completed})
    const newTask = await task.save()
    
  
       
        res.status(201).send(newTask)
    }catch(e){
        res.status(400).send({message: e.message})

       // res.status(409).send({ message: "This email is already registered" })
    }
})

router.get("/tasks", async(req, res) => {
    const allTasks = await Task.find()
    res.status(201).send(allTasks)
})


module.exports = router
