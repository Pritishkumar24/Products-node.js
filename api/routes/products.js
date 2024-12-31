const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST'
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'Handling special ID',
            id: id
        })
    }else{
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
});

module.exports = router;