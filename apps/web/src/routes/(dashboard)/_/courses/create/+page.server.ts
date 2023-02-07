import createErrors from '$lib/utils/createErrors'
import { fail, redirect, type RequestEvent } from '@sveltejs/kit'

export const actions = {
  create: async ({ locals, request }: RequestEvent) => {
    const formData = await request.formData()

    const image = formData.get('image') as any

    if (image?.size <= 0) {
      formData.delete('image')
    }

    try {
      await locals.pb.collection('courses').create(formData)
    } catch (err: any) {
      console.error('Error: ', err)
      return fail(err.status, { errors: createErrors(err) })
    }

    throw redirect(303, '/_/courses')
  },
}
