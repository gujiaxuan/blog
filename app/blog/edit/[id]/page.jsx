import BlogEditor from '@/components/BlogEditor'
import {getNote} from '@/lib/redis';

export default async function EditPage({ params }) {
  const id = params.id;
  const blog = await getNote(id)

  if (blog === null) {
    return (
      <div className="blog--empty-state">
        <span className="blog-text--empty-state">
          Click a blog on the left to view something! 
        </span>
      </div>
    )
  }

  return <BlogEditor id={id} initialTitle={blog.title} initialBody={blog.content} />
}

