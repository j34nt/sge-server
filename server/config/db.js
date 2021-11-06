const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
require('dotenv')
var Notification = require('../models/notifications');
const { io } = require('../server');

console.log(process.env.DB_MONGO);

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            poolSize: 100
        });
        
    } catch (error) {
        console.log(error);
        process.exit(1); // stop app
        
    }

}

module.exports = conectarDB;