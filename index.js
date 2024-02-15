const express =require('express')
const app =express()
const PORT= 3000
const { dbConnection } = require('./config/config');
const taskrouter = require('./routes/task')


app.use(express.json())
dbConnection();
app.use ('/',taskrouter )


app.listen(PORT,()=>{
    console.log(`Express esta escuchando en http://localhost:${PORT}`)
})