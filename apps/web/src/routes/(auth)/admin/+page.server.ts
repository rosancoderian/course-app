import { error, fail, redirect, type RequestEvent } from '@sveltejs/kit'

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
        errors: {
          ...err.data.data,
          auth: {
            code: err.data.code,
            message: err.data.message,
          },
        },
      })
    }

    throw redirect(303, '/_/courses')
  },
}
