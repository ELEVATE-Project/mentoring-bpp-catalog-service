'use strict'
const router = require('express').Router()
const bppCatalog = require('@controllers/')

router.post('/search', bppCatalog.search)

module.exports = router
