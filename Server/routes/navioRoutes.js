const express = require('express')
const { novoNavio, lerTodosNavio, lerUmNavio, apagarNavio, atualizarNavio} = require('../controllers/navioControllers')

const router = express.Router()
router.use(express.json())

router.post('/novoNavio',novoNavio)
router.get('/',lerTodosNavio)
router.get('/:IMO',lerUmNavio)
router.put('/atualizar/:IMO_navio',atualizarNavio)
router.delete('/delete/:IMO',apagarNavio)

module.exports = router