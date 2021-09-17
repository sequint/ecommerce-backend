const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.JAWSDB_URL || `mysql://root:${process.env.PASSWORD}@localhost:3306/ecommerce_db`)

module.exports = sequelize
