import pb from '$lib/pocketbase/pb'
import toPOJO from '$lib/utils/toPOJO'
import { fail, redirect, type RequestEvent } from '@sveltejs/kit'

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

export const actions = {
  enroll: async ({ locals, url, request }: RequestEvent) => {
    if (!locals.pb.authStore.isValid) {
      throw redirect(303, '/login')
    }

    const body = Object.fromEntries(await request.formData())

    const newErollment = {
      course_id: body.courseId,
      user_id: locals.user.id,
    }

    try {
      await locals.pb.collection('enrollment').create(newErollment)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: err.data.data })
    }

    throw redirect(303, '/')
  },
}
