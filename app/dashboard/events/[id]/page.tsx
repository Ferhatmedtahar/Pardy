import { getOneEvent } from '@/utils/events'
import { getCurrentUser } from '@/utils/user'
import { redirect } from 'next/navigation'

const EventPage = async ({ params }: { params: { id: string } }) => {
  const user = await getCurrentUser()
  const event = await getOneEvent(user.id, params.id)

  if (!event) redirect('/dashboard/events')

  return (
    <div className=" mx-auto container  px-10 py-6 cursor-default">
      <div className="w-full  rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">{event.name}</h1>
          <span
            className={`px-3 py-1 text-sm rounded ${
              event.isPrivate
                ? 'bg-red-500 text-white'
                : 'bg-green-500 text-white'
            }`}
          >
            {event.isPrivate ? 'Private' : 'Public'}
          </span>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-400">{event.description}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Location</h2>
          <p className="text-gray-400">
            {event.streetNumber} {event.street}, {event.zip} - Building{' '}
            {event.bldg}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Start Date</h2>
          <p className="text-gray-400">
            {new Date(event.startOn).toLocaleDateString()}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Created By</h2>
          <p className="text-gray-400">{event.createdById}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Status</h2>
          <span className="px-3 py-1 text-sm rounded bg-yellow-500 text-black">
            {event.status}
          </span>
        </div>
        <footer className="text-right text-sm text-gray-500">
          Created on: {new Date(event.createdAt).toLocaleDateString()}
        </footer>
      </div>
    </div>
  )
}

export default EventPage
