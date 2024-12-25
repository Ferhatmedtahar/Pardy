'use client'

import { Spinner } from '@nextui-org/react'

export default function loading() {
  return (
    <Spinner
      size="lg"
      color="primary"
      className="w-full h-full flex justify-center items-center p-4"
    />
  )
}
