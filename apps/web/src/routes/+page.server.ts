import pb from '$lib/pocketbase/pb'
import toPOJO from '$lib/utils/toPOJO'

export async function load() {
  const coursesData = await pb.collection('courses').getFullList()
  return {
    courses: toPOJO(coursesData),
  }
}
