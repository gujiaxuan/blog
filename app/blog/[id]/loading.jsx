export default function BlogSkeleton() {
    return (
      <div
        className="blog skeleton-container"
        role="progressbar"
        aria-busy="true"
      >
        <div className="blog-header">
          <div
            className="blog-title skeleton"
            style={{ height: '3rem', width: '65%', marginInline: '12px 1em' }}
          />
          <div
            className="skeleton skeleton--button"
            style={{ width: '8em', height: '2.5em' }}
          />
        </div>
        <div className="blog-preview">
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
        </div>
      </div>
    )
  }
  