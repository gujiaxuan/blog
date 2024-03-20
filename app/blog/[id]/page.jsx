import Blog from '@/components/Blog'
import { getNote } from '@/lib/redis';

export default async function Page({ params }) {
    const id = params.id;
    const blog = await getNote(id)
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(500);

    if (blog == null) {
        return (
            <div className="blog--empty-state">
                <span className="blog-text--empty-state">
                    点击左侧查看详情
                </span>
            </div>
        )
    }

    return <Blog id={id} blog={blog} />
}

