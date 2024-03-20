import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EditButton from '@/components/EditButton';
import SidebarBlogList from '@/components/SidebarBlogList';
import BlogListSkeleton from '@/components/BlogListSkeleton';

export default async function Sidebar() {

    return (
        <>
            <section className="col sidebar">
                <Link href={'/'} className="link--unstyled">
                    <section className="sidebar-header">
                        <Image
                            className="logo"
                            src="/next.svg"
                            width={22}
                            height={20}
                            alt=""
                            role="presentation"
                        />
                        <strong>古家轩的博客</strong>
                    </section>
                </Link>
                <section className="sidebar-menu" role="menubar">
                    <EditButton id={null}>新建</EditButton>
                </section>
                <nav>
                    <Suspense fallback={<BlogListSkeleton />}>
                        <SidebarBlogList />
                    </Suspense>
                </nav>
            </section>
        </>
    )
}
