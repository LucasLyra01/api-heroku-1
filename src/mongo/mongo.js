const mongoose = require('mongoose');

strConnection = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@agenda.xnq4q.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`

mongoose.connect(strConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(
    console, "erro ao conectar no mongo"
));

db.once('open', () => {
    console.log("Banco conectado")
});

module.exports = db;