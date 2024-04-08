// import { getUsersOver,getUsersbyone } from "../config/db";
import Admin_Users from "../service/service";
import admin_users from "../models/admin_users.model";
import { Elysia } from 'elysia'
// const getusers = async () => {
//   return await getUsersOver()
// }
const getUsers = async () => {
  return await Admin_Users.getUsers()
}
const getUsersbyid = async (req: number) => {
  return await Admin_Users.getUsersbyone(req)
}
const createuser = async (req: any) => {
  try {
    const admin_user: admin_users = req.body;
    return await Admin_Users.save(admin_user)
  }
  catch (error) {
    return { status: 'error', error }
  }
}

export {
  getUsersbyid,
  createuser,
  getUsers
}

// //export default class UsersController {
// const create = (req: Request, res: Response) => {
//   if (!req.body) {
//     new Elysia()
//       .onBeforeHandle(({ set }) => {
//         set.status = 400
//         message: "Content can not be empty!"
//         return set
//       })
//   }
//   try {
//     //const admin_user: admin_users = req.body;
//     //const savedmsoutlab = await Admin_Users.save(admin_user);

//     new Elysia()
//       .onBeforeHandle(({ set }) => {
//         set.status = 201
//         message: "Content can not be empty!"
//         return { status: "true", data: [] }
//       })
//     // res.status(201).send({ status: "true", data: savedmsoutlab });
//   } catch (err) {
//     new Elysia()
//       .onBeforeHandle(({ set }) => {
//         set.status == 200
//         return {
//           status: "false",
//           message: "Some error occurred while retrieving Trinputoutlabs." + err
//         };
//       })
//   }
// }
// const findAll = async (req: Request, res: Response) => {
//   //const title = typeof req.query.title === "string" ? req.query.title : "";
//   console.log(req)
//   try {
//     const msoutlabs = await Admin_UsersRepository.getUsersbyone();
//     console.log(msoutlabs)
//     new Elysia()
//       .onBeforeHandle(({ set }) => {
//         set.status == 200
//         return msoutlabs
//       })
//   } catch (err) {
//     new Elysia()
//       .onBeforeHandle(({ set }) => {
//         set.status == 500
//         return {
//           message: "Some error occurred while retrieving msoutlabs."
//         }
//       })
//   }
// }
// export {
//   findAll,create
// }


