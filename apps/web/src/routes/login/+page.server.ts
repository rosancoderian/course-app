import { error, fail, redirect } from '@sveltejs/kit'

export const actions = {
  login: async ({ locals, request }: any) => {
    const body = Object.fromEntries(await request.formData())

    try {
      await locals.pb
        .collection('users')
        .authWithPassword(body.email, body.password)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: err.data.data })
    }

    throw redirect(303, '/')
  },
}
