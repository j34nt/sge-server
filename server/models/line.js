var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lineSchema = new Schema({
    _id: {type: String},
    efficiency: {type: Number},
    name: {type: String, req:[true, 'name es requerido']},
    is_active:{type:Boolean},
    oee: {type:Number},
});

module.exports = mongoose.model('Line', lineSchema);