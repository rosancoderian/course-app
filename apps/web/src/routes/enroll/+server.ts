import { fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const POST = async ({ locals, request, url }: RequestEvent) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login')
  }

  const newErollment = {
    course_id: url.searchParams.get('id'),
    user_id: locals.user.id,
  }

  try {
    await locals.pb.collection('enrollment').create(newErollment)
  } catch (err: any) {
    console.error('Error: ', err)
    return fail(err.status, { errors: err.data.data })
  }

  throw redirect(303, '/login')
}
