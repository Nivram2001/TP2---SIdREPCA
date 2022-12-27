'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('viagem', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      porto_partida: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      porto_chegada: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      horario_partida: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      horario_chegada: {
        type: Sequelize.DATE,
        allowNull: false
      },
      qtd_carga: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qtd_passageiros: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_registo: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'user', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      imo_navio: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: { model: 'navio', key: 'imo'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('viagem')
  }
};
