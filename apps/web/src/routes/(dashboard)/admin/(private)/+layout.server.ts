import { redirect, type RequestEvent } from '@sveltejs/kit'
import { Admin } from 'pocketbase'

export const load = async ({ locals }: RequestEvent) => {
  if (!locals.pb.authStore.isValid || !(locals.user instanceof Admin)) {
    throw redirect(303, '/')
  }
}
