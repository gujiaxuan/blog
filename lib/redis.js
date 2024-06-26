import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL);

const initialData = {
  "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

export async function getAllBlogs() {
  const data = await redis.hgetall("list");
  if (Object.keys(data).length == 0) {
    await redis.hset("list", initialData);
  }
  return await redis.hgetall("list")
}

export async function addBlog(data) {
  const uuid = Date.now().toString();
  await redis.hset("list", [uuid], data);
  return uuid
}

export async function updateBlog(uuid, data) {
  await redis.hset("list", [uuid], data);
}

export async function getBlog(uuid) {
  return JSON.parse(await redis.hget("list", uuid));
}

export async function delBlog(uuid) {
  return redis.hdel("list", uuid)
}

export default redis
