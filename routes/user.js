const express = require('express');
const routerUser = express.Router();
const ctrUser = require('../controller/user')

//!user
routerUser.post('/login', ctrUser.login)
routerUser.post('/register',ctrUser.authenticate,ctrUser.register)
routerUser.post('/logout',ctrUser.logout)

module.exports = routerUser;


