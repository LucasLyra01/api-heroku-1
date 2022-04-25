
require('dotenv').config({
    path: '.env'
});

const express = require('express');
const cors = require('cors');
// const mongo = require('./mongo/mongo');
const app = express();

// const pingRouter = require('./routes/index');

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.methods === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, ´POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

// app.use('/api', pingRouter);

app.get('/', async (req, res) => {
    await res.send({
        status: 'ok',
        message: 'Rodando'
    });
});

app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.json({
        erro: error.message
    });
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço ${hostname}:${port}`)
});


