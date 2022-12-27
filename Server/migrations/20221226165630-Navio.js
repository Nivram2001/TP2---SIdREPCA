'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('navio', {
      imo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      maxcargas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      maxpassageiros: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      proprietario: {
        type: Sequelize.STRING(70),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('navio')
  }
};
