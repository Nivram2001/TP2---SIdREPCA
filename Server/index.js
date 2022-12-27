const express = require('express')
const bcrypt = require('bcrypt')

const viagemRoutes = require('./routes/viagemRoutes')
const navioRoutes = require('./routes/navioRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

const port = process.env.port || 8080

const cors = require('cors')
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

app.use('/user/:key', async (req, res, next) => {
    const { key } = req.params
    const keyAccess = await bcrypt.hash(key, await bcrypt.genSalt(10));
    bcrypt.compare(process.env.ACCESS_KEY, keyAccess, async (err, result) => {
        if (result) {
            next()
        }
        else {
            res.status(400).json({ "Error": "Acesso não autorizado!" })
        }
    });
})

app.use('/navio/:key', async (req, res, next) => {
    const { key } = req.params
    const keyAccess = await bcrypt.hash(key, await bcrypt.genSalt(10));
    bcrypt.compare(process.env.AGENTE_ACCESS_KEY, keyAccess, async (err, result) => {
        if (result) {
            next()
        }
        else {
            res.status(400).json({ "Error": "Acesso não autorizado!" })
        }
    });
})

app.use('/viagem/:key', async (req, res, next) => {
    const { key } = req.params
    const keyAccess = await bcrypt.hash(key, await bcrypt.genSalt(10));
    bcrypt.compare(process.env.AGENTE_ACCESS_KEY, keyAccess, async (err, result) => {
        if (result) {
            next()
        }
        else {
            res.status(400).json({ "Error": "Acesso não autorizado!" })
        }
    });
})

app.use('/user/:key', userRoutes)
app.use('/navio/:key', navioRoutes)
app.use('/viagem/:key', viagemRoutes)



app.disable('x-power-by')
app.use(express.urlencoded({ extended: true }))

app.listen(port, () =>
    console.log(`Servidor a rodar em http://localhost:${port}`))

module.exports = app