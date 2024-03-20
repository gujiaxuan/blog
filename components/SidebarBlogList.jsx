import SidebarBlogItem from '@/components/SidebarBlogItem';
import { getAllBlogs } from '@/lib/redis';

export default async function BlogList() {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(500);
  const blogs = await getAllBlogs()

  const arr = Object.entries(blogs);

  return <ul className="blogs-list">
    {arr.map(([id, item]) => {
      return <li key={id}>
        <SidebarBlogItem id={id} blog={JSON.parse(item)} />
      </li>
    })}
  </ul>
}
