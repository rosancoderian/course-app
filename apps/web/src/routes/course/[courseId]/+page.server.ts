import toPOJO from '$lib/utils/toPOJO'
import { error, redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals, params }: RequestEvent) => {
  if (!params.courseId) {
    throw redirect(303, '/_/courses')
  }

  let enrollment = null
  let course = null
  let chapters = []

  try {
    enrollment = toPOJO(
      await locals.pb
        .collection('enrollment')
        .getFirstListItem(`course_id="${params.courseId}" && user_id="${locals.user.id}"`)
    )
  } catch {
    enrollment = null
  }

  try {
    course = toPOJO(await locals.pb.collection('courses').getOne(params.courseId))
    if (enrollment) {
      chapters = toPOJO(
        await locals.pb.collection('chapters').getFullList(undefined, {
          filter: `course_id = "${course.id}"`,
          sort: 'title',
        })
      )
    }
  } catch (err: any) {
    console.error('Error: ', err)
    throw error(err.status)
  }

  return { course, chapters, enrollment }
}
