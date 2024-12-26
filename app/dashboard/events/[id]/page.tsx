import { getOneEvent } from '@/utils/events'
import { getCurrentUser } from '@/utils/user'
import { redirect } from 'next/navigation'

const EventPage = async ({ params }: { params: { id: string } }) => {
  const user = await getCurrentUser()
  const event = await getOneEvent(user.id, params.id)

  if (!event) redirect('/dashboard/events')

  return <div>{event.name}</div>
}

export default EventPage
