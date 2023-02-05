import pb from '$lib/pocketbase/pb'

export async function load() {
  const coursesData = await pb.collection('courses').getFullList()
  return {
    courses: JSON.parse(JSON.stringify(coursesData)),
  }
}
