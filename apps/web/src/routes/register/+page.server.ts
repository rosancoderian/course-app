import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals }: RequestEvent) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, '/')
  }
}

export const actions = {
  register: async ({ locals, request }: RequestEvent) => {
    const body = Object.fromEntries(await request.formData())

    const newUser = { name: body.username, ...body }

    try {
      await locals.pb.collection('users').create(newUser)
      await locals.pb
        .collection('users')
        .requestVerification(body.email as string)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: err.data.data })
    }

    throw redirect(303, '/login')
  },
}
