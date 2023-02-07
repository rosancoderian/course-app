import pb from '$lib/pocketbase/pb'
import toPOJO from '$lib/utils/toPOJO'
import type { RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent) {
  // TODO typing
  let courses: any[] = toPOJO(await pb.collection('courses').getFullList())

  return {
    courses,
  }
}
