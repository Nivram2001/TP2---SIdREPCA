const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(connection) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("O Nome tem um tamnho máximo de 70 caractéres")                 
                    }
                }
            }, 
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 30) throw new Error("A Password tem um tamnho máximo de 30 caractéres")                 
                    }
                }
            },
            valido: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize: connection,
            tableName: 'user',
        })
    }
}

module.exports = User