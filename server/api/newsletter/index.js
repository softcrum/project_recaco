'use strict';

const express = require('express');
const controller = require('./newsletter.controller');
const router = express.Router();

router.delete('/:id', controller.destroy);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/search_email/:email', controller.findEmail);
router.patch('/:id', controller.update);
router.post('/', controller.create);
router.put('/:id', controller.update);

module.exports = router;
