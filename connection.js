const mongoose = require('mongoose');
require('dotenv').config();


const connectdb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        if(connect){
            console.log('Database connected');
        }else{
            console.log('Database not connected');
        }
    }catch(err){
        console.log(err);
    }
}
module.exports = connectdb;