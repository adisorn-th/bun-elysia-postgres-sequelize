import { Elysia } from "elysia";
import { getUsersbyid, createuser, getUsers } from "./controller/users";

import { swagger } from '@elysiajs/swagger'
import { DB } from "./config/db3"
const db = DB.sequelize.authenticate();
const app = new Elysia()
  .use(swagger());
// app.guard({
//   beforeHandle: ({ set, profile }) => {
//     if (!(profile)) {
//       set.status = 401
//       return 'Unauthorized'
//     }
//   }
//}, app => {
app.get("/getUsers", () => getUsers());
app.get("/getUsersbyid/:id", async ({ params, set }) => {
  const response = await getUsersbyid(parseInt(params.id))
  if (response.status == 'error') {
    set.status = 400
    return {
      message: 'get incomplete'
    }
  }
  set.status = 200
  return { message: 'ok', data: response }
});
app.post("/createUsers", async ({ body, set }) => {
  const response = await createuser({ body })
  console.log(response)
  if (response.status == 'error') {
    set.status = 400
    return {
      message: 'insert incomplete'
    }
  }
  set.status = 200
  return { message: 'ok', data: response }
});
// return app
app.listen({
  port: 3001,
});

