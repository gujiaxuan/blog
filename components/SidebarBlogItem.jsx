import SidebarBlogItemContent from '@/components/SidebarBlogItemContent';
import SidebarBlogItemHeader from '@/components/SidebarBlogItemHeader';

export default function SidebarBlogItem({ id, blog }) {

    const { title = '', content = '', updateTime } = blog;
    return (
        <SidebarBlogItemContent
            id={id}
            title={title}
            expandedChildren={
                <p className="sidebar-blog-excerpt">
                    {content.substring(0, 20) || <i>(没有内容了···)</i>}
                </p>
            }
        >
            <SidebarBlogItemHeader title={title} updateTime={updateTime} />
        </SidebarBlogItemContent>
    );
}
