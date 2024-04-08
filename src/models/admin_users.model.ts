import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName: "admin_users",
})
export default class admin_users extends Model<admin_users> {
    // @Column({
    //     type: DataType.INTEGER,
    //     primaryKey: true,
    //     defaultValue: DataType.INTEGER, // Or DataTypes.UUIDV1
    //     field: "id"
    // })
    // id?: number;

    @Column({
        type: DataType.STRING(250),
        field: "firstname"
    })
    firstname?: string;

    @Column({
        type: DataType.STRING(250),
        field: "lastname"
    })
    lastname?: string;

    @Column({
        type: DataType.STRING(250),
        field: "username"
    })
    username?: string;
    @Column({
        type: DataType.STRING(100),
        field: "email"
    })
    email?: string;
    @Column({
        type: DataType.STRING(100),
        field: "password"
    })
    password?: string;

    @Column({
        type: DataType.STRING(100),
        field: "reset_password_token"
    })
    reset_password_token?: string;

    @Column({
        type: DataType.STRING(100),
        field: "registration_token"
    })
    registration_token?: string;

    @Column({
        type: DataType.BOOLEAN,
        field: "is_active"
    })
    is_active?: boolean;

    @Column({
        type: DataType.BOOLEAN,
        field: "blocked"
    })
    blocked?: boolean;
    @Column({
        type: DataType.STRING(100),
        field: "prefered_language"
    })
    prefered_language?: string;
    @Column({
        type: DataType.DATE,
        field: "created_at"
    })
    created_at?: Date;
    @Column({
        type: DataType.DATE,
        field: "updated_at"
    })
    updated_at?: Date;

    @Column({
        type: DataType.INTEGER,
        field: "created_by_id"
    })
    created_by_id?: number;
    @Column({
        type: DataType.INTEGER,
        field: "updated_by_id"
    })
    updated_by_id?: number;
}