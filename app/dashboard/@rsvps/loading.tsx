import { Spinner } from '@nextui-org/react'

export default function loading() {
  return (
    <div className="h-full w-full flex gap-4  justify-center items-center text-lg text-blue-900">
      <Spinner size="lg" color="primary" />
      loading Rsvps...
    </div>
  )
}
