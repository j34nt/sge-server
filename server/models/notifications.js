var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
    created_at: {type: Number, required:[true, 'created_at es necesario']},
    id_line: {type: String, required:[true, 'id_line es requerido']},
    is_active:{type:Boolean},
    type: {type:String},
    type_name:{type: String},
    date_message:{type: Number},
    date_attention:{type: Number},
    date_close:{type: Number},
    date_notice:{type:Number}
});

module.exports = mongoose.model('Notification', notificationSchema);