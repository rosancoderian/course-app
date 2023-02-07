import createErrors from '$lib/utils/createErrors'
import { fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const actions = {
  login: async ({ locals, request }: RequestEvent) => {
    const body = Object.fromEntries(await request.formData())
    try {
      const authData = await locals.pb.admins.authWithPassword(
        body.email as string,
        body.password as string
      )
      locals.pb.authStore.save(authData.token, authData.admin)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, {
        errors: createErrors(err),
      })
    }

    throw redirect(303, '/_/courses')
  },
}
