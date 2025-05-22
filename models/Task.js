const mongoose=require('mongoose');

//Crea la estructura que tendrá la base de datos
const taskMogoose=new mongoose.Schema({
    title: String,
    completed: Boolean
},{timestamps:true});//Timestamps, crea dos valores de creación y actualización con las fechas

const Task=mongoose.model('task',taskMogoose);//Importamos el modelo de los datos

module.exports=Task;