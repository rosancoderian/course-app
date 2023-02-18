import type { RequestEvent } from '@sveltejs/kit'

export async function load({ fetch, locals }: RequestEvent) {
  let courses = await (await fetch(`/api/courses`)).json()

  return {
    courses,
  }
}
