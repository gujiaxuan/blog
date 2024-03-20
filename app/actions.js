'use server'

import { redirect } from 'next/navigation'
import {addBlog, updateBlog, delBlog} from '@/lib/redis';
import { revalidatePath } from 'next/cache';

export async function saveBlog(noteId, title, body) {
  
  const data = JSON.stringify({
    title,
    content: body,
    updateTime: new Date()
  })

  if (noteId) {
    updateBlog(noteId, data)
    revalidatePath('/', 'layout')
    redirect(`/note/${noteId}`)
  } else {
    const res = await addBlog(data)
    revalidatePath('/', 'layout')
    redirect(`/note/${res}`)
  }

}

export async function deleteBlog(noteId) {
  delBlog(noteId)
  revalidatePath('/', 'layout')
  redirect('/')
}

