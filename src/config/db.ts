import { Sequelize, QueryTypes } from "sequelize";
import { DB } from "./db3"
import admin_users from "../models/admin_users.model";


//const  db  = require("./db3")
// import postgres from 'postgres'

// const sql = postgres( {
//   host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
//   port                 : 5432,          // Postgres server port[s]
//   database             : 'strapi-app',            // Name of database to connect to
//   username             : 'postgres',            // Username of database user
//   password             : '11681168',            // Password of database user
// })


// export default sql




// const getUsersOver = async () => {
//   const users = await DB.sequelize.query(`select * from admin_users`, { type: QueryTypes.SELECT });
//   // const users = await db.sequelize.query(`select * from admin_users`, {
//   //   type: QueryTypes.SELECT,
//   //   raw: true
//   // }).then((data) => {
//   //   console.log(data);
//   //   result(null, data)

//   // }).catch((err) => {
//  // console.log(users)
//   // });
//   return users;
// }
const getUsersbyone = async () => {
  const users = await admin_users.findAll()
  return users;
}


export {
  getUsersbyone
}

