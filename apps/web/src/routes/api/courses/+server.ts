import pb from '$lib/pocketbase/pb'
import toPOJO from '$lib/utils/toPOJO'
import { json, type RequestEvent } from '@sveltejs/kit'

export const GET = async ({ locals, url }: RequestEvent) => {
  let courses: any[] = []
  let enrollments: any[] = []

  courses = toPOJO(
    await pb
      .collection('courses')
      .getFullList(undefined, { filter: `is_published=TRUE`, sort: '-created' })
  )

  if (locals.pb.authStore.isValid) {
    const userId = locals.user.id
    enrollments = toPOJO(
      await pb.collection('enrollment').getFullList(undefined, {
        filter: `user_id = "${userId}"`,
        sort: '-created',
      })
    )
  }

  const enrolledCourseIds = enrollments.map((enrollment) => enrollment.course_id)

  courses = courses.map((course) => {
    return { ...course, enrolled: enrolledCourseIds.includes(course.id) }
  })

  return json(courses)
}
