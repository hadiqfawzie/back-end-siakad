const express = require('express')
const routerNilai = express.Router()
const ctrNilai = require('../controller/nilai')


routerNilai.get('/nilai/:nim', ctrNilai.getNilaiByNim)
routerNilai.get('/nilai/:nim/:semester', ctrNilai.getNilaiByNimSemester)

module.exports = routerNilai

