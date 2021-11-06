const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');
const conectarDB = require('./config/db');
var bodyParser = require('body-parser');


const path = require('path');

const app = express();
conectarDB();
app.use(cors());
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.use('/api/dashboard', require('./routes/dashboard'));

// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server, {wsEngine: 'ws'});
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});