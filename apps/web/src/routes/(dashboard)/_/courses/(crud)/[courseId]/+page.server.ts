import createErrors from '$lib/utils/createErrors'
import toPOJO from '$lib/utils/toPOJO'
import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals, params }: RequestEvent) => {
  if (!params.courseId) {
    throw redirect(303, '/_/courses')
  }

  let course = null

  try {
    course = toPOJO(await locals.pb.collection('courses').getOne(params.courseId))
  } catch (err: any) {
    console.error('Error: ', err)
    throw error(err.status)
  }

  return { course }
}

export const actions = {
  update: async ({ locals, request, params }: RequestEvent) => {
    if (!params.courseId) throw error(404)

    const formData = await request.formData()

    const image = formData.get('image') as any

    if (image?.size <= 0) {
      formData.delete('image')
    }

    try {
      await locals.pb.collection('courses').update(params.courseId, formData)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, `/_/courses/${params.courseId}`)
  },
  deleteImage: async ({ locals, request, params }: RequestEvent) => {
    if (!params.courseId) throw error(404)

    try {
      await locals.pb.collection('courses').update(params.courseId, { image: null })
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, `/_/courses/${params.courseId}`)
  },
}
