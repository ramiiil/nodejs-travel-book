require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/travel.routes');

const app = express();

//PORT
const PORT = process.env.PORT;

//connect to database
connectDB();

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/travel', router);

app.get('./books', (req, res) => {
    console.log('express.js framework')
})

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));