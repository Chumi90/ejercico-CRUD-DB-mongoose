const mongoose=require('mongoose');//Requerimos las librerias de Mongoose

require('dotenv').config();//Requerimos la configuración para el acceso a la clave
const MONGO_URI=process.env.MONGO_URI;//Guardamos la contraseña que esta en el archivo .env

const dbConnection=async()=>{
    try{
        await mongoose.connect(MONGO_URI);//Realizamos la conexión con MogoDB
        console.log('Connection is running');//Comprobamos que la conexión ha sido realizada correctamente
    }catch{
        throw new Error('Connetion is throw');//Throw an error 
    }
};

//export the conection
module.exports={
    dbConnection
};