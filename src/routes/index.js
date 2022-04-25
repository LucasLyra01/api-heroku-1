let router = require('express').Router();

router.get('/', (req, res) => {

    console.log('Pingando no get')
    res.json({
        status: 'ok',
        message: 'Entrei no /api'
    })

});

module.exports = router;