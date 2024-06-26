import dayjs from 'dayjs';

export default function SidebarBlogItemHeader({title, updateTime}) {
  return (
      <header className="sidebar-blog-header">
          <strong>{title}</strong>
          <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
  );
}
