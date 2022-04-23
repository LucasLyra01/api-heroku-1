
require('dotenv').config({
    path: '.env'
});

const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Servidor rodando'
    });
});

app.listen(port, hostname, () => {
    console.log(`Servidor rodando no endereço ${hostname}:${port}`)
})


