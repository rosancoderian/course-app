import PocketBase from 'pocketbase'
import { PUBLIC_PB_BASE_URL } from '$env/static/public'

const pb = new PocketBase(PUBLIC_PB_BASE_URL)

export default pb