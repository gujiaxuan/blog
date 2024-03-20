import dayjs from 'dayjs';
import BlogPreview from '@/components/BlogPreview'
import EditButton from '@/components/EditButton'

export default function Blog({ id, blog }) {
    const { title, content, updateTime } = blog

    return (
        <div className="blog">
            <div className="blog-header">
                <h1 className="blog-title">{title}</h1>
                <div className="blog-menu" role="menubar">
                    <small className="blog-updated-at" role="status">
                        上次更新于{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}
                    </small>
                    <EditButton id={id}>编辑</EditButton>
                </div>
            </div>
            <BlogPreview>{content}</BlogPreview>
        </div>
    )
}
