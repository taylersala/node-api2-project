// implement your posts router here
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('hello from the /get/api/posts endoiunt')
});

router.get('./:id', (req, res) => {
    const id = req.params.id
    res.status(200).send(`hello from the GET /api/posts/${id} endpoint`);
});

router.post('/', (req, res) => {
    res.status(200).send(`hello from the POST /posts/${id}`);
});

module.exports = router;