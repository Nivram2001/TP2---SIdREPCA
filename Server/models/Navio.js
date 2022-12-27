const { Model, DataTypes } = require('sequelize')

class Navio extends Model {
    static init(connection) {
        super.init({
            imo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("O Nome tem um tamnho máximo de 70 caractéres")                 
                    },
                }
            },
            tipo: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 30) throw new Error("O Tipo tem um tamnho máximo de 30 caractéres")                 
                    },
                }
            },
            maxcargas: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            maxpassageiros: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            proprietario: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("O Tipo tem um tamnho máximo de 70 caractéres")                 
                    },
                }
            }
        }, {
            sequelize: connection,
            tableName: 'navio',
        })
    }
}

module.exports = Navio