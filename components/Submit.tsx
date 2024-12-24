'use client'
import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

export default function Submit({
  children,
  btnProps,
}: {
  children: React.ReactNode
  btnProps: any
}) {
  const { pending } = useFormStatus()
  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {children}
    </Button>
  )
}
