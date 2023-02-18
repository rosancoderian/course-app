import { redirect, type RequestEvent } from '@sveltejs/kit'

export const POST = ({ locals }: RequestEvent) => {
  locals.pb.authStore.clear()
  locals.user = undefined

  throw redirect(303, '/login')
}
