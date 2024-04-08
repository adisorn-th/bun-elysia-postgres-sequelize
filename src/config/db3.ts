//import { Sequelize } from "sequelize";
// import { Sequelize } from "sequelize";
import admin_users from "../models/admin_users.model";
import { Sequelize } from "sequelize-typescript";

const dbUser = process.env.dbUser;
const dbUserPass = process.env.dbUserPass;
const dbName = process.env.dbName;


const sequelize = new Sequelize({
  database: dbName,
  username: dbUser,
  password: dbUserPass,
  host: 'localhost',
  dialect: 'postgres',
  timezone: "+07:00",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  models: [admin_users],
  logging: true
});
sequelize.authenticate();

const DB = {
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};
//export default DB;
export {
  DB
}