import { Sequelize } from 'sequelize'
import db from '../config/db.js'

const { DataTypes  }  = Sequelize

const Users = db.define('users', {
    nas:{
        type: DataTypes.INTEGER,
        unique: true
    },
    name:{
        type:  DataTypes.STRING
    },
    username:{
        type:  DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
    },
    refresh_token:{
        type:  DataTypes.TEXT
    }

},{
    freezetableName:true
})

export default  Users