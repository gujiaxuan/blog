import SidebarBlogItem from '@/components/SidebarBlogItem';
import { getAllBlogs } from '@/lib/redis';

export default async function BlogList() {
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
