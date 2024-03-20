'use client'

import { useState } from 'react'
import { deleteBlog, saveBlog } from '../app/actions'
import BlogPreview from '@/components/BlogPreview'
import { useFormStatus } from 'react-dom'
import Image from 'next/image'

export default function BlogEditor({
    id,
    initialTitle,
    initialBody
}) {

    const { pending } = useFormStatus()
    const [title, setTitle] = useState(initialTitle)
    const [body, setBody] = useState(initialBody)
    const isDraft = !id

    return (
        <div className="blog-editor">
            <form className="blog-editor-form" autoComplete="off">
                <label className="offscreen" htmlFor="blog-title-input">
                    Enter a title for your blog
                </label>
                <input
                    id="blog-title-input"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <label className="offscreen" htmlFor="blog-body-input">
                    Enter the body for your blog
                </label>
                <textarea
                    value={body}
                    id="blog-body-input"
                    onChange={(e) => setBody(e.target.value)}
                />
            </form>
            <div className="blog-editor-preview">
                <form className="blog-editor-menu" role="menubar">
                    <button
                        className="blog-editor-done"
                        disabled={pending}
                        type="submit"
                        formAction={() => saveBlog(id, title, body)}
                        role="menuitem"
                    >
                        <Image
                            src="/checkmark.svg"
                            width={14}
                            height={10}
                            alt=""
                            role="presentation"
                        />
                        完成
                    </button>
                    {!isDraft && (
                        <button
                            className="blog-editor-delete"
                            disabled={pending}
                            formAction={() => deleteBlog(id)}
                            role="menuitem"
                        >
                            <Image
                                src="/cross.svg"
                                width={10}
                                height={10}
                                alt=""
                                role="presentation"
                            />
                            删除
                        </button>
                    )}
                </form>
                <div className="label label--preview" role="status">
                    预览
                </div>
                <h1 className="blog-title">{title}</h1>
                <BlogPreview>{body}</BlogPreview>
            </div>
        </div>
    )
}
