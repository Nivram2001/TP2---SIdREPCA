const conn = require('../config/database')

const Sequelize = require('sequelize')
const dbConn = new Sequelize(conn)
const ligar = async () => {
  try {
    await dbConn.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    
  }
}
ligar();


const Viagem = require('../models/Viagem')
const Navio = require('../models/Navio')
const User = require('../models/User')


Viagem.init(dbConn)
Navio.init(dbConn)
User.init(dbConn)

module.exports = dbConn