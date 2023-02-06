import pb from '$lib/pocketbase/pb'
import toPOJO from '$lib/utils/toPOJO'
import type { RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent) {
  // TODO typing
  let courses: any[] = []
  let enrollments: any[] = []

  enrollments = toPOJO(
    await pb.collection('enrollment').getFullList(undefined, {
      filter: `user_id = "${event.locals.user.id}"`,
    })
  )

  const enrolledCourseIds = enrollments.map((enrollment) => enrollment.course_id)

  courses = toPOJO(
    await pb.collection('courses').getFullList(undefined, {
      filter: enrolledCourseIds.map((id) => `id = "${id}"`).join(' || '),
    })
  )

  return {
    courses,
    enrollments,
  }
}
