import createErrors from '$lib/utils/createErrors'
import toPOJO from '$lib/utils/toPOJO'
import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals, params }: RequestEvent) => {
  if (!params.courseId) {
    throw redirect(303, '/_/courses')
  }

  if (!params.chapterId) {
    throw redirect(303, `/_/courses/${params.courseId}/chapters`)
  }

  let chapter = null

  try {
    chapter = toPOJO(await locals.pb.collection('chapters').getOne(params.chapterId))
  } catch (err: any) {
    console.error('Error: ', err)
    throw error(err.status)
  }

  return { chapter }
}

export const actions = {
  update: async ({ locals, request, params }: RequestEvent) => {
    if (!params.courseId) {
      throw redirect(303, '/_/courses')
    }

    if (!params.chapterId) {
      throw redirect(303, `/_/courses/${params.courseId}/chapters`)
    }

    const formData = await request.formData()

    console.log(Object.fromEntries(formData))

    if ((formData.get('image') as Blob).size <= 0) {
      formData.delete('image')
    }

    if ((formData.get('media') as Blob).size <= 0) {
      formData.delete('media')
    }

    if ((formData.get('attachment') as Blob).size <= 0) {
      formData.delete('attachment')
    }

    try {
      await locals.pb.collection('chapters').update(params.chapterId, formData)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, `/_/courses/${params.courseId}/chapters`)
  },
  deleteImage: deleteFile('image'),
  deleteMedia: deleteFile('media'),
  deleteAttachment: deleteFile('attachment'),
}

function deleteFile(name: string) {
  return async ({ locals, request, params }: RequestEvent) => {
    if (!params.courseId) {
      throw redirect(303, '/_/courses')
    }

    if (!params.chapterId) {
      throw redirect(303, `/_/courses/${params.courseId}/chapters`)
    }

    try {
      await locals.pb.collection('chapters').update(params.chapterId, { [name]: null })
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, `/_/courses/${params.courseId}/chapters/${params.chapterId}`)
  }
}
