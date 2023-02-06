import toPOJO from '$lib/utils/toPOJO'
import type { ServerLoad } from '@sveltejs/kit'

export const load: ServerLoad = ({ locals }) => {
  if (locals.user) {
    return {
      user: toPOJO(locals.user),
    }
  }

  return {
    user: undefined,
  }
}
