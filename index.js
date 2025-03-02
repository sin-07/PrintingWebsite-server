const express = require('express');
const router = require('./Routes/router');
const connectdb = require('./connection');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api',router)

connectdb();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});