import envModel from "../config";
import { DataSource } from "typeorm";
export const dataSource = new DataSource({
  type: "postgres",
  database: envModel.database.name,
  password: envModel.database.passsword,
  port: envModel.database.port,
  username: envModel.database.username,
  synchronize: false,
  entities: [
    'api/**/*.model.ts',
    'posts/**/*.model.ts'
  ], 
  migrations: ['migrations/*.ts'],

});
async function connectDB() {
  try {
    await dataSource.initialize();
    console.log("connection to database success");
  } catch (e) {
    console.log(`ERROR: connection fail: ${e}`);
  }
}
async function findById(id, TABLE) {
  return await dataSource.query(`SELECT * FROM ${TABLE} WHERE id = ${id}`);
}

async function list(TABLE, where) {
  try {
    // return await `SELECT * FROM persons`;
  } catch (e) {
    console.log(e);
  }
}
async function removedById(TABLE, id) {
  return await dataSource.query(`DELETE FROM ${TABLE} WHERE id = ${id}`);
}
async function insert(TABLE, user) {
  try {
    return await dataSource.query(
      `INSERT INTO ${TABLE} (id,lastname,firstname,address,username) VALUES (1,'${user.firstname}','${user.lastname}','${user.address}','${user.username}') `
    );
  } catch (e) {
    console.log(e);
  }
}
async function update(TABLE, data) {
  try {
    return await dataSource.query(
      `UPDATE ${TABLE} SET ${data} WHERE id=${data.id}`
    );
  } catch (e) {
    console.log(e);
  }
}
async function upsert(TABLE: string, data) {
  if (data && data.id) {
    return update(TABLE, data);
  } else {
    return insert(TABLE, data);
  }
}
export { connectDB, findById, removedById, upsert, list };
