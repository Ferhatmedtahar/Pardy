import 'server-only'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getUserFromToken } from './authTools'
import { COOKIE_NAME } from './constants'
import { cache } from 'react'

// export async function getCurrentUser() {

// }
export const getCurrentUser = cache(async () => {
  const token = cookies().get(COOKIE_NAME)
  if (!token) redirect('/signin')

  const user = await getUserFromToken(token)
  if (!user) redirect('/signin')
  return user
})
