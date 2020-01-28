import {Sequelize, Op, Model, DataType} from 'sequelize';

export default function connection() {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DIALECT_MYSQL,
    });
    try {
        sequelize.authenticate();
        console.log(`Success Connect to ${process.env.DB_NAME}`)
    } catch (e) {
        console.error(`${process.env.DB_NAME} Connection Failed...`)
    }
}