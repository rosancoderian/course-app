import { Admin } from 'pocketbase'

const isAdmin = (user: Admin) => {
  return user instanceof Admin
}

export default isAdmin
