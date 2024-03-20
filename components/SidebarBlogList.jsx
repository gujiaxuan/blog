import SidebarBlogItem from '@/components/SidebarBlogItem';
import { getAllNotes } from '@/lib/redis';

export default async function NoteList() {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  await sleep(500);
  const blogs = await getAllNotes()

  const arr = Object.entries(blogs);

  return <ul className="blogs-list">
    {arr.map(([id, item]) => {
      return <li key={id}>
        <SidebarBlogItem id={id} blog={JSON.parse(item)} />
      </li>
    })}
  </ul>
}
