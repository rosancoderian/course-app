import { error, fail, redirect } from '@sveltejs/kit'

export const actions = {
  register: async ({ locals, request }: any) => {
    const body = Object.fromEntries(await request.formData())

    const newUser = { name: body.username, ...body }

    try {
      await locals.pb.collection('users').create(newUser)
      await locals.pb.collection('users').requestVerification(body.email)
    } catch (err: any) {
      console.error('Error: ', err.data.data)
      return fail(err.status, { errors: err.data.data })
    }

    throw redirect(303, '/login')
  },
}
