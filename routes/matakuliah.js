const express = require('express');
const routerMk = express.Router();
const ctrMk = require('../controller/matakuliah')

//*matakuliah
routerMk.get('/matakuliah', ctrMk.getMk)
routerMk.get('/matakuliah/:kdMk', ctrMk.getMkByKdMk)
routerMk.post('/matakuliah', ctrMk.insertMk )
routerMk.put('/matakuliah/:kdMk', ctrMk.updateMk)
routerMk.delete('/matakuliah/:kdMk', ctrMk.hapusMk)

module.exports = routerMk;