'use server'

import { redirect } from 'next/navigation'
import {addBlog, updateBlog, delBlog} from '@/lib/redis';
import { revalidatePath } from 'next/cache';

export async function saveBlog(blogId, title, body) {
  
  const data = JSON.stringify({
    title,
    content: body,
    updateTime: new Date()
  })

  if (blogId) {
    updateBlog(blogId, data)
    revalidatePath('/', 'layout')
    redirect(`/blog/${blogId}`)
  } else {
    const res = await addBlog(data)
    revalidatePath('/', 'layout')
    redirect(`/blog/${res}`)
  }

}

export async function deleteBlog(blogId) {
  delBlog(blogId)
  revalidatePath('/', 'layout')
  redirect('/')
}

