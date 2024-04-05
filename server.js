import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'

//configure env
dotenv.config();
//rest object
const app = express()
//rest api
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the e-commerce </h1>')
})

//port
const PORT = process.env.PORT || 400;


//run listen
app.listen(PORT, () => {
    console.log('Server Running on ${PORT}');
});