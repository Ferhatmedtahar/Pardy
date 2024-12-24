'use server'

import { signin, signup } from '@/utils/authTools'
import { COOKIE_NAME } from '@/utils/constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const authSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email(),
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string',
  }),
})

export async function registerUser(prevState: any, formData: FormData) {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  try {
    const { token } = await signup(data)
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.log(e)
    return { message: 'failed to sign you up' }
  }
  redirect('/dashboard')
}

export async function signIn(prevState: any, formData: FormData) {
  const data = authSchema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  try {
    const { token } = await signin(data)
    cookies().set(COOKIE_NAME, token)
  } catch (e) {
    console.log(e)
    return { message: 'failed to sign you up' }
  }
  redirect('/dashboard')
}
