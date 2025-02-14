'use client'
import { registerUser } from '@/actions/auth'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import Submit from './Submit'
const initialState = {
  message: '',
}
const SignupForm = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    /*@ts-ignore-next-line*/
    registerUser,
    initialState
  )

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign up</h3>
      <Input fullWidth size="lg" placeholder="Email" name="email" required />
      <Input
        name="password"
        fullWidth
        size="lg"
        type="password"
        placeholder="Password"
        required
      />
      {formState?.message && (
        <div className="text-red-500 py-1 px-2 rounded-md ">
          {formState.message}!
        </div>
      )}
      <Submit btnProps={{ size: 'lg', color: 'primary' }}>Sign up</Submit>

      <div>
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>
    </form>
  )
}

export default SignupForm
