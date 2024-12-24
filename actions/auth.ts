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
  try {
    const data = authSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    })
    const { token } = await signup(data)
    cookies().set(COOKIE_NAME, token)
  } catch (error: any | z.ZodError) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      const validationErrors = error.errors.map((e) => e.message).join(', ')
      return { message: validationErrors } // Pass validation error messages to the form state
    }

    console.error(error)
    return { message: error?.message } // Pass any other error messages to the form state
  }
  redirect('/dashboard')
}

export async function signIn(prevState: any, formData: FormData) {
  try {
    const data = authSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    })
    const { token } = await signin(data)
    cookies().set(COOKIE_NAME, token)
  } catch (error: any | z.ZodError) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      const validationErrors = error.errors.map((e) => e.message).join(', ')
      return { message: validationErrors }
    }

    console.error(error)
    return { message: error?.message }
  }
  redirect('/dashboard')
}
