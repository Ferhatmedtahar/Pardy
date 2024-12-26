import { getEvents } from '@/utils/events'
import { getCurrentUser } from '@/utils/user'
import Link from 'next/link'

const Events = async () => {
  const user = await getCurrentUser()
  const events = await getEvents(user.id)

  return (
    <div className="w-full h-full p-4 ">
      <h1 className="text-2xl ">Events :</h1>
      <ul className=" flex flex-col gap-4 py-4 px-8  list-decimal  ">
        {events.map((event) => (
          <li key={event.id}>
            <Link
              className="hover:underline decoration-blue-600 hover:underline-offset-4 transition-all duration-200 hover:text-primary"
              href={`/dashboard/events/${event.id}`}
            >
              {event.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Events
