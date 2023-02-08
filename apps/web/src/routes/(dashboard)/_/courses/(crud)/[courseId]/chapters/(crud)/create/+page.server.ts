import createErrors from '$lib/utils/createErrors'
import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const actions = {
  create: async ({ locals, request, params }: RequestEvent) => {
    if (!params.courseId) throw error(404)

    const formData = await request.formData()

    formData.set('course_id', params.courseId)

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
      await locals.pb.collection('chapters').create(formData)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, `/_/courses/${params.courseId}/chapters`)
  },
}
