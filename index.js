const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT||8080;
const { dbConnection } = require('./config/config'); //Requerimos la conexión a la base de datos
const router = require('./routes/task'); //Requerimos las rutas de task.js

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', router);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));