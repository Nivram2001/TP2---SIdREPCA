const express = require('express')
const { novaViagem, lerTodasViagens, lerUmaViagem, apagarViagem, atualizarViagem} = require('../controllers/viagemControllers')

const router = express.Router()
router.use(express.json())

router.post('/novaviagem',novaViagem)
router.get('/',lerTodasViagens)
router.get('/:id',lerUmaViagem)
router.put('/atualizar/:id',atualizarViagem)
router.delete('/delete/:id',apagarViagem)

module.exports = router