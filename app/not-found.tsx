import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function notFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-between  p-20 items-center ">
      <Link
        className="flex gap-2  text-blue-600 hover:underline cursor-pointer underline-offset-4 transition-all duration-250"
        href="/dashboard"
      >
        <ArrowLeft className="w-6 h-6" />
        Go to Dashboard
      </Link>
      <p className="p-4   text-lg text-blue-600">
        the page you are looking for does not exist 💀
      </p>
      <p className=" text-blue-600">Ferhat mohamed tahar</p>
    </div>
  )
}
