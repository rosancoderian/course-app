import pb from '$lib/pocketbase/pb'
import toPOJO from '$lib/utils/toPOJO'
import type { RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent) {
  // TODO typing
  let courses: any[] = toPOJO(await pb.collection('courses').getFullList())
  let enrollments: any[] = []

  if (event.locals.pb.authStore.isValid) {
    enrollments = toPOJO(
      await pb.collection('enrollment').getFullList(undefined, {
        filter: `user_id = "${event.locals.user.id}"`,
      })
    )

    const enrolledCourseIds = enrollments.map((enrollment) => enrollment.course_id)

    courses = courses.map((course) => {
      return { ...course, enrolled: enrolledCourseIds.includes(course.id) }
    })
  }

  return {
    courses,
    enrollments,
  }
}
