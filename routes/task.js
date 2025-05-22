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
    console.log(id);
    try{
        const utasks = await Task.findById(id);
        console.log(utasks)
        res.json(utasks);
    }catch{
        res.status(500).send({message: "There was a problem trying to get a task"});
    }
})
//PUT update an ID "/markAsCompleted/:_id:"
// router.put('/markAsCompleted/:_id',(req,res)=>{
//     try{
//         const {id}=req.params;
//         Task.updateOne({$set:{_id}}).then((data)=>res.json(data));
//     }catch{
//         res.status(500).send({message: "There was a problem trying to update ID"});
//     }
// })
//PUT uptdate a Task by ID "/id/:_id:"
// router.put('/markAsCompleted/:_id',(req,res)=>{
//     try{
//         const {id}=req.params;
//         const {title, completed}=req.body;
//         Task.updateOne({_id: id},{$set:{title,completed}}).then((data)=>res.json(data));
//     }catch{
//         res.status(500).send({message: "There was a problem trying to update a task"});
//     }
// })
//DELETE a task by ID "/id/:_id:"
// router.delete('id/:_id',(req,res)=>{
//     const {id}=req.params;
//     try{
//         taskMogoose.updateOne({_id:id}).then((data)=>res.json(data))
//     }catch{
//         res.status(500).send({message: "There was a problem trying to delete a task"});
//     }
// })


module.exports=router;