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
