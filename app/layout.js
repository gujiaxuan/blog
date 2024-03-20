import './style.css';

import Sidebar from '@/components/sidebar';

export default function RootLayout({
  children
}) {

  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="main">
            <Sidebar />
            <div className='col blog-viewer'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}

