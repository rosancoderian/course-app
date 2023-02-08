import createErrors from '$lib/utils/createErrors'
import toPOJO from '$lib/utils/toPOJO'
import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals, params }: RequestEvent) => {
  if (!params.courseId) {
    throw redirect(303, '/_/courses')
  }

  let chapters = []

  try {
    chapters = toPOJO(
      await locals.pb.collection('chapters').getFullList(undefined, {
        filter: `course_id = "${params.courseId}"`,
      })
    )
  } catch (err: any) {
    console.error('Error: ', err)
    throw error(err.status)
  }

  return { chapters }
}

export const actions = {
  deleteChapter: async ({ locals, request, params }: RequestEvent) => {
    if (!params.courseId) {
      throw redirect(303, '/_/courses')
    }

    const body = toPOJO(Object.fromEntries(await request.formData()))

    try {
      await locals.pb.collection('chapters').delete(body.chapterId)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, `/_/courses/${params.courseId}/chapters`)
  },
}
