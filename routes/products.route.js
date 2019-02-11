const express = require('express')
const router = express.Router();
const controller = require('../controllers/products.controller');
const requireAuth = require('../middleware/auth.login');


router.get('/', controller.index);
router.get('/search', requireAuth.authLogin, controller.search);
router.get('/:id', controller.viewDetail);


module.exports =router;