export default function EditSkeleton() {
    return (
      <div
        className="blog-editor skeleton-container"
        role="progressbar"
        aria-busy="true"
      >
        <div className="blog-editor-form">
          <div className="skeleton v-stack" style={{ height: '3rem' }} />
          <div className="skeleton v-stack" style={{ height: '100%' }} />
        </div>
        <div className="blog-editor-preview">
          <div className="blog-editor-menu">
            <div
              className="skeleton skeleton--button"
              style={{ width: '8em', height: '2.5em' }}
            />
            <div
              className="skeleton skeleton--button"
              style={{ width: '8em', height: '2.5em', marginInline: '12px 0' }}
            />
          </div>
          <div
            className="blog-title skeleton"
            style={{ height: '3rem', width: '65%', marginInline: '12px 1em' }}
          />
          <div className="blog-preview">
            <div className="skeleton v-stack" style={{ height: '1.5em' }} />
            <div className="skeleton v-stack" style={{ height: '1.5em' }} />
            <div className="skeleton v-stack" style={{ height: '1.5em' }} />
            <div className="skeleton v-stack" style={{ height: '1.5em' }} />
            <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          </div>
        </div>
      </div>
    )
  }
  
  