import "reflect-metadata"
import { DataSource } from "typeorm"
import { Blog } from "./entity/Blog"
import { Paslon } from "./entity/Paslon"
import Partai from "./entity/Partai"
import { User } from "./entity/User"
import { Voter } from "./entity/Voter"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost", //localhost
    port: 5432, //5432
    username: "postgres",
    password: "Alfan2911",
    database: "kpu_web", //postgres
    synchronize: true,
    logging: false,
    entities: [Blog, Paslon, Partai, User, Voter],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
