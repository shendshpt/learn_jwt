import {Sequelize} from 'sequelize'

const db = new Sequelize('jwt_att','root','',{
    host: "localhost",
    dialect: "mysql"
})

export default db;