const express=require('express');//iniciamos express
const router=express.Router();//requerimos como ruta
const Task=require('../models/Task.js');//Obtenemos el modelo de datos

//POST Create the task
router.post('/create',async(req,res)=>{
    try{
        const task= await Task.create(req.body);
        res.status(201).send(task);
    }catch{
        console.log(erro);
        res.status(500).send({message:"There was a problem trying to create a task"})
    }
});

//GET require Task "/:"
router.get('/',(req, res)=>{
    try{
    }catch{
        res.status(500).send({message: "There was a problem trying to create a task"});
    }
})
//GET require Task by ID "/id/:_id:"

//PUT update an ID "/markAsCompleted/:_id:"

//PUT uptdate a Task by ID "/id/:_id:"

//DELETE a task by ID "/id/:_id:"

module.exports=router;