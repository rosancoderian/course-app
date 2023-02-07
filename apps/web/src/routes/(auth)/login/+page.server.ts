import createErrors from '$lib/utils/createErrors'
import { fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals }: RequestEvent) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, '/')
  }
}

export const actions = {
  login: async ({ locals, request }: RequestEvent) => {
    const body = Object.fromEntries(await request.formData())

    try {
      await locals.pb
        .collection('users')
        .authWithPassword(body.email as string, body.password as string)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, {
        errors: createErrors(err),
      })
    }

    throw redirect(303, '/')
  },
}
