const { Model, DataTypes } = require('sequelize')

class Viagem extends Model {
    static init(connection) {
        super.init({
            porto_partida: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("O Porto de Partida tem um tamnho máximo de 70 caractéres")                 
                    },
                }
            },
            porto_chegada: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("O Porto de Chegada tem um tamnho máximo de 70 caractéres")                 
                    },
                }
            },
            horario_partida: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            horario_chegada: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            qtd_carga: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            qtd_passageiros: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize: connection,
            tableName: 'viagem',
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_registo', as: 'user' }) 
        this.belongsTo(models.Navio, { foreignKey: 'IMO_navio', as: 'navio' })       
    }
}

module.exports = Viagem