'use client'
import { signIn } from '@/actions/auth'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import Submit from './Submit'
const initialState = {
  message: '',
}
const SigninForm = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    /*@ts-ignore-next-line*/
    signIn,
    initialState
  )
  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 "
    >
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />
      {formState?.message && (
        <div className="text-red-500 py-1 px-2 rounded-md ">
          {formState.message}!
        </div>
      )}
      <Submit btnProps={{ size: 'lg', color: 'primary' }}>Sign In</Submit>
      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
    </form>
  )
}

export default SigninForm
