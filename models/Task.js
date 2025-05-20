const mongoose=require('mongoose');

//Crea la estructura que tendrá la base de datos
const taskMogoose=new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    completed:{
        type:Boolean,
        require:true
    }
},{timestamps:true});

const task=mongoose.model('task',taskMogoose);//Importamos el modelo de los datos

module.exports=taskMogoose;