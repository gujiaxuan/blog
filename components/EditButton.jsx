import Link from 'next/link'

export default function EditButton({ id, children }) {
    const isDraft = id == null;
    return (
        <Link href={`/blog/edit/${id || ''}`} className="link--unstyled">
            <button
                className={[
                    'edit-button',
                    isDraft ? 'edit-button--solid' : 'edit-button--outline',
                ].join(' ')}
                role="menuitem">
                {children}
            </button>
        </Link>
    );
}
