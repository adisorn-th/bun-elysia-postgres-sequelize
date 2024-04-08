import { Sequelize, QueryTypes } from "sequelize";
import { getUsersbyone } from "../config/db"
import admin_users from "../models/admin_users.model";
interface Iadmin_usersRepository {
  getUsers(): Promise<admin_users[]>;
  getUsersbyone(id:number): Promise<admin_users| null>;
  save(admin_user: admin_users): Promise<admin_users>;
}

class Admin_UsersRepository implements Iadmin_usersRepository {
  async getUsers(): Promise<admin_users[]> {
    try {
      return await admin_users.findAll();
    } catch (error) {
      throw new Error("Failed to retrieve admin_users!" + error);
    }
  }
  async getUsersbyone(id:number): Promise<admin_users| null> {
    try {
      return await admin_users.findByPk(id);
    } catch (error) {
      throw new Error("Failed to retrieve admin_users!" + error);
    }
  }
  async save(admin_user: admin_users): Promise<admin_users> {
    try {
      return await admin_users.create(admin_user);
    } catch (err) {
      throw new Error("Failed to create admin_user!"+err);
    }
  }
}
export default new Admin_UsersRepository();