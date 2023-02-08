import createErrors from '$lib/utils/createErrors'
import toPOJO from '$lib/utils/toPOJO'
import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals, params }: RequestEvent) => {
  if (!params.courseId) {
    throw redirect(303, '/_/courses')
  }

  let course = null
  let chapters = []

  try {
    course = toPOJO(await locals.pb.collection('courses').getOne(params.courseId))
    chapters = toPOJO(
      await locals.pb.collection('chapters').getFullList(undefined, {
        filter: `course_id = "${course.id}"`,
      })
    )
  } catch (err: any) {
    console.error('Error: ', err)
    throw error(err.status)
  }

  return { course, chapters }
}

export const actions = {
  update: async ({ locals, request, params }: RequestEvent) => {
    if (!params.courseId) throw error(404)

    const formData = await request.formData()

    const image = formData.get('image') as Blob

    if (image?.size <= 0) {
      formData.delete('image')
    }

    if (formData.get('is_published')) {
      formData.set('is_published', 'true')
    } else {
      formData.set('is_published', 'false')
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
