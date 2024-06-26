'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation'
import Image from 'next/image';

export default function SidebarBlogContent({
    id,
    title,
    children,
    expandedChildren,
}) {
    const router = useRouter()
    const pathname = usePathname()
    const selectedId = pathname?.split('/')[1] || null

    const [isPending] = useTransition()
    const [isExpanded, setIsExpanded] = useState(false)
    const isActive = id === selectedId

    const itemRef = useRef(null);
    const prevTitleRef = useRef(title);

    useEffect(() => {
        if (title !== prevTitleRef.current) {
            prevTitleRef.current = title;
            itemRef.current.classList.add('flash');
        }
    }, [title]);

    return (
        <div
            ref={itemRef}
            onAnimationEnd={() => {
                itemRef.current.classList.remove('flash');
            }}
            className={[
                'sidebar-blog-list-item',
                isExpanded ? 'blog-expanded' : '',
            ].join(' ')}>
            {children}
            <button
                className="sidebar-blog-open"
                style={{
                    backgroundColor: isPending
                        ? 'var(--gray-80)'
                        : isActive
                            ? 'var(--tertiary-blue)'
                            : '',
                    border: isActive
                        ? '1px solid var(--primary-border)'
                        : '1px solid transparent',
                }}
                onClick={() => {
                    const sidebarToggle = document.getElementById('sidebar-toggle')
                    if (sidebarToggle) {
                        sidebarToggle.checked = true
                    }
                    router.push(`/blog/${id}`)
                }}>
                Open blog for preview
            </button>
            <button
                className="sidebar-blog-toggle-expand"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                }}>
                {isExpanded ? (
                    <Image
                        src="/chevron-down.svg"
                        width={10}
                        height={10}
                        alt="Collapse"
                    />
                ) : (
                    <Image src="/chevron-up.svg" width={10} height={10} alt="Expand" />
                )}
            </button>
            {isExpanded && expandedChildren}
        </div>
    );
}
