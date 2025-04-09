import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "db",
  port: 3306,
  username: "root",
  password: "root",
  database: "gedcoplamar",
  synchronize: true,
  logging: true,
  entities: [User],
});
