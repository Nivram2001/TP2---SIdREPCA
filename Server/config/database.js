require('dotenv').config()

module.exports = {
    host: process.env.db_host,
    username: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
    dialect: 'postgres',
    port: 5432,
    dialectOptions:{

    },
    define:{
        timestamps:false,
        underscored: true,
    }
}