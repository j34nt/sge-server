var Line = require('../models/line');
var Notification = require('../models/notifications');

exports.getLines = async (req, res) => {
    try {
        var data = await Line.find({});
        res.status(200).json({
            ok: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            mensaje: 'Error en Bd',
            erros: error
            
        });
    }
}

exports.addNotification = async(req, res) => {
    var body = req.body;
    console.log(body);
    try {
        var data;
        if(!body._id) {
            body.created_at = Math.floor(new Date() / 1000);
            data = await Notification.create(body);

        } else {
            data = await Notification.findOneAndUpdate({_id: body._id}, body, {overwrite: true, strict: false}) 
        }
        console.log(data);
        res.status(200).json({
            ok: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            mensaje: 'Error en Bd',
            erros: error
            
        });
    }
}

exports.getNotificationByLine = async(req,res) => {
    var id_line = req.query.id_line;
    try {
        var data = await Notification.find({id_line: id_line, is_active: true});
        res.status(200).json({
            ok: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            ok:false,
            mensaje: 'Error en Bd',
            erros: error
            
        });
    }
}