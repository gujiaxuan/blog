export default function NoteListSkeleton() {
    return (
      <div>
        <ul className="blogs-list skeleton-container">
          <li className="v-stack">
            <div
              className="sidebar-blog-list-item skeleton"
              style={{height: '5em'}}
            />
          </li>
          <li className="v-stack">
            <div
              className="sidebar-blog-list-item skeleton"
              style={{height: '5em'}}
            />
          </li>
          <li className="v-stack">
            <div
              className="sidebar-blog-list-item skeleton"
              style={{height: '5em'}}
            />
          </li>
        </ul>
      </div>
    );
  }
  