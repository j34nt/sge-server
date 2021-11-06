// create and connect to db andon
var db = connect('andon.antaresmexico.com:27017/andon'),
    allAndon = null;

//create the lines collection and add documents
db.lines.insert({'name':'Línea 1', 'is_active': true, 'efficiency': 80, 'oee':90});
db.lines.insert({'name':'Línea 2', 'is_active': true, 'efficiency': 80, 'oee':90});
db.lines.insert({'name':'Línea 3', 'is_active': true, 'efficiency': 80, 'oee':90});
db.lines.insert({'name':'Línea 4', 'is_active': true, 'efficiency': 80, 'oee':90});
db.lines.insert({'name':'Línea 5', 'is_active': true, 'efficiency': 80, 'oee':90});
db.lines.insert({'name':'Línea 6', 'is_active': true, 'efficiency': 80, 'oee':90});
db.lines.insert({'name':'Línea 7', 'is_active': true, 'efficiency': 80, 'oee':90});
db.lines.insert({'name':'Línea 8', 'is_active': true, 'efficiency': 80, 'oee':90});

// set reference to all documents
allAndon = db.lines.find();

while(allAndon.hasNext()){
    printjson(allAndon.next());
}