import { PUBLIC_PB_BASE_URL } from '$env/static/public'

const getFileUrl = (collection: string, id: string, url: string) => {
  return `${PUBLIC_PB_BASE_URL}/api/files/${collection}/${id}/${url}`
}

export default getFileUrl
