const { io } = require('../server');
var Notification = require('../models/notifications');
var Line = require('../models/line');


io.on('connection', (client) => {
    client.on('joinLine', (line, callback) => {
        // console.log(line);
        client.join(line._id);
        // Notification.watch().on('change', async (change) => {
        //     // const linee = await Line.find({_id: change.fullDocument.id_line});
        //     // console.log(line);
        //     let notification = change.fullDocument;
        //     client.broadcast.to(notification.id_line).emit('notificationChange', notification);
        // });
            
    });
    // console.log(client);

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('connect', () => {
        // console.log('linea conectada');
    })



    client.on('disconnect', () => {
        // console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });

        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!!!!!!'
        //     });
        // }



    });

});