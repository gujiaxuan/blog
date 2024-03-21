import Blog from '@/components/Blog'
import { getBlog } from '@/lib/redis';

export default async function Page({ params }) {
    const id = params.id;
    const blog = await getBlog(id)
 
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

