import pb from '$lib/pocketbase/pb'
import AND from '$lib/utils/query/AND'
import toPOJO from '$lib/utils/toPOJO'
import { fail, json, type RequestEvent } from '@sveltejs/kit'

export const GET = async ({ locals }: RequestEvent) => {
  if (locals.pb.authStore.isValid) throw fail(403)

  const userId = locals.user.id

  const enrollments: any[] = toPOJO(
    await pb.collection('enrollment').getFullList(undefined, {
      filter: `user_id = "${userId}"`,
      sort: '-created',
    })
  )

  const queryFilterByCourseId = enrollments
    .map((enrollment) => 'id =' + enrollment.courseId)
    .join(' || ')

  const courses: any[] = toPOJO(
    await pb.collection('courses').getFullList(undefined, {
      filter: `is_published=TRUE ${AND(queryFilterByCourseId)}`,
      sort: '-created',
    })
  )

  return json(courses)
}
