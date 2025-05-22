const express=require('express');//iniciamos express
const router=express.Router();//requerimos como ruta
const Task=require('../models/Task.js');//Obtenemos el modelo de datos

//POST '/create' Create the task
router.post('/create',async(req,res)=>{
    try{
        const task= await Task.create(req.body);
        res.status(201).send(task);
        
    }catch{
        res.status(500).send({message:"There was a problem trying to create a task"})
    }
});

//GET require Task "/:"
router.get('/',async(req, res)=>{
    const {task}=req.params;
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch{
        res.status(500).send({message: "There was a problem trying to get a task"});
    }
})
//GET require Task by ID "/id/:_id:"
router.get('/id/:id',async(req, res)=>{
    const{id}=req.params;//Recoge el id de los parámetros
    try{
        console.log(id)
        const utasks = await Task.findById(id);
        console.log(utasks)
        res.json(utasks);
    }catch{
        res.status(500).send({message: "There was a problem trying to get a task"});
    }
})
//PUT update an ID "/markAsCompleted/:_id:"
router.put('/markAsCompleted/:_id',async(req,res)=>{
    const id=req.params;//Requerimos el id de la URL
    const title = req.body.title; //obtenemos el valor del título de la task
    try{
        console.log(id)
        console.log(title)
        const updateTitleTask = await Task.findByIdAndUpdate(id,{title}, {new: true})//Actualizamos el title de la task
        res.json(updateTitleTask)//enviamos los datos a la base de datos
    }catch{
        res.status(500).send({message: "There was a problem trying to update ID"});
    }
})

//DELETE a task by ID "/id/:_id:"
// router.delete('id/:_id',async(req,res)=>{
//     const {id}=req.params;
//     try{
//         console.log(id)
//         const deletTask=Task.deleteOne(id);
//         res.json({ message: "Task successfully deleted", deletTask });

//     }catch{
//         res.status(500).send({message: "There was a problem trying to delete a task"});
//     }
// })


module.exports=router;