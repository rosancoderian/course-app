import createErrors from '$lib/utils/createErrors'
import { fail, redirect, type RequestEvent } from '@sveltejs/kit'

export async function load({ fetch, locals, cookies }: RequestEvent) {
  let courses = await (await fetch(`/api/courses`)).json()

  return {
    courses,
  }
}

export const actions = {
  enroll: async ({ locals, request }: RequestEvent) => {
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
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, `/course/${body.courseId}`)
  },
}
