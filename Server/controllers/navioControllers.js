const bcrypt = require('bcrypt')
const Navio = require('../models/Navio')
const dbConn = require('../db/index')
Navio.init(dbConn)

module.exports = {
    lerUmNavio: async (req, res) => {
        const { IMO } = req.params
        try {
            const navio = await Navio.findByPk(IMO)
            if (!navio) return res.status(400).json({ "Error": "Navio não encontrado" })
            return res.status(200).json(navio)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },

    lerTodosNavio: async (req, res) => {
        try {
            const navio = await Navio.findAll()
            return res.status(200).json(navio)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    novoNavio: async (req, res) => {
        const { imo, nome, tipo, maxcargas, maxpassageiros, proprietario } = req.body

        try {
            const navio = await Navio.create({
                imo,
                nome,
                tipo,
                maxcargas,
                maxpassageiros,
                proprietario
            });
            return res.status(201).json({ navio })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    atualizarNavio: async (req, res) => {
        const { IMO_navio } = req.params;
        const { imo, nome, tipo, maxcargas, maxpassageiros, proprietario } = req.body;

        try {
            const navio = await Navio.update(
                { imo, nome, tipo, maxcargas, maxpassageiros, proprietario },
                { where: { imo: IMO_navio } })
            res.status(200).json({ navio });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    apagarNavio: async (req, res) => {
        const { IMO } = req.params;

        try {
            const navio = await Navio.destroy({ where: { imo: IMO } });

            res.status(200).json({ navio });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}