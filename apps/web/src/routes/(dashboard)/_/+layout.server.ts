import isAdmin from '$lib/utils/isAdmin'
import { redirect, type RequestEvent } from '@sveltejs/kit'

export const load = async ({ locals }: RequestEvent) => {
  if (!locals.pb.authStore.isValid || !isAdmin(locals.user)) {
    throw redirect(303, '/')
  }
}
