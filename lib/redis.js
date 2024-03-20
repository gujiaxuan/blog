import Redis from 'ioredis'

const redis = new Redis()

const initialData = {
  "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

export async function getAllNotes() {
  const data = await redis.hgetall("list");
  if (Object.keys(data).length == 0) {
    await redis.hset("list", initialData);
  }
  return await redis.hgetall("list")
}

export async function addNote(data) {
  const uuid = Date.now().toString();
  await redis.hset("list", [uuid], data);
  return uuid
}

export async function updateNote(uuid, data) {
  await redis.hset("list", [uuid], data);
}

export async function getNote(uuid) {
  return JSON.parse(await redis.hget("list", uuid));
}

export async function delNote(uuid) {
  return redis.hdel("list", uuid)
}

export default redis
