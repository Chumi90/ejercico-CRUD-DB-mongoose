const mongoose=require('mongoose');

//Crea la estructura que tendrá la base de datos
const taskMogoose=new mongoose.Schema({
    title: String,
    completed: String
},{timestamps:true});

const task=mongoose.model('task',taskMogoose);//Importamos el modelo de los datos

module.exports=taskMogoose;