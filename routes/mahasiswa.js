const express = require('express');
const routerMhs = express.Router();
const ctrMhs = require('../controller/mahasiswa')
const ctrUser = require('../controller/user')

//!mahasiswa
routerMhs.get('/mahasiswa',ctrUser.authenticate, ctrMhs.getMhs)
routerMhs.get('/mahasiswa/:nim',ctrUser.authenticate, ctrMhs.getMhsByNim)
routerMhs.post('/mahasiswa',ctrUser.authenticate, ctrMhs.insertMhs)
routerMhs.put('/mahasiswa/:nim',ctrUser.authenticate, ctrMhs.updateMhs)
routerMhs.delete('/mahasiswa/:nim',ctrUser.authenticate, ctrMhs.deleteMhs )

module.exports = routerMhs;
