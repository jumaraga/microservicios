import { createClient } from "redis";
import config from "../config";

const client = createClient({
    url: `redis://${config.redis.host}:${config.redis.port}`
})
client.connect()
async function get(table, id) {

    const data = await client.get(`${table}${id}`);
    let res = data || null;
    if (data) {
        res = JSON.parse(data);
    }
    return res
}
async function list(table) {
    const data = await client.get(table);
    let res = data || null;
    if (data) {
        res = JSON.parse(data);
    }
    return res

}
async function upsert(table, data) {
    let key = table;
    if (data && data.id) {
        key = key + '' + data.id;
    }
    await client.setEx(key, 3000, JSON.stringify(data));
    return true
}
export default {upsert, list ,get}