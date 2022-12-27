const { Router } = require('express')
const express = require('express')
const { novoUser, lerTodosUser, lerUmUser, apagarUser, atualizarUser} = require('../controllers/userControllers')

const router = express.Router()
router.use(express.json())

router.post('/novouser',novoUser)
router.get('/',lerTodosUser)
router.get('/:id',lerUmUser)
router.put('/atualizar/:id',atualizarUser)
router.delete('/delete/:id',apagarUser)

module.exports = router