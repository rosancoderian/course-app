import pb from '$lib/pocketbase/pb'
import createErrors from '$lib/utils/createErrors'
import toPOJO from '$lib/utils/toPOJO'
import { fail, redirect, type RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent) {
  // TODO typing
  let courses: any[] = toPOJO(await pb.collection('courses').getFullList())

  return {
    courses,
  }
}

export const actions = {
  deleteCourse: async ({ locals, request }: RequestEvent) => {
    const body = toPOJO(Object.fromEntries(await request.formData()))

    try {
      await locals.pb.collection('courses').delete(body.courseId)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, '/_/courses')
  },
}
