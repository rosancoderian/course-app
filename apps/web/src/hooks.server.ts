import type { Handle } from '@sveltejs/kit'
import pb from '$lib/pocketbase/pb'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.pb = pb

  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get('cookie') ?? ''
  )

  if (pb.authStore.isValid) {
    event.locals.user = event.locals.pb.authStore.model
  } else {
    event.locals.user = null
  }

  const response = await resolve(event)

  response.headers.set(
    'set-cookie',
    event.locals.pb.authStore.exportToCookie({ secure: false })
  )

  return response
}
