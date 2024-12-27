import { getrsvps } from '@/utils/rsvps'
import { getCurrentUser } from '@/utils/user'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'

const statusColors = {
  going: 'primary',
  maybe: 'warning',
  'not-going': 'danger',
}

type RsvpType = { id: string; status: 'going' | 'maybe' | 'not-going' }
type EventType = { id: string; name: string }
type AttendeeType = { name: string }

const RsvpsSlot = async () => {
  const user = await getCurrentUser()
  const data = await getrsvps(user.id)

  return (
    <div className="w-full h-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center text-xl">{`RSVPs`}</h2>
        <div className="rounded-md border border-default-100 my-8">
          {data.map(
            ({
              rsvps,
              events,
              attendees,
            }: {
              rsvps: RsvpType | null
              events: EventType | null
              attendees: AttendeeType | null
            }) => (
              <div
                key={rsvps?.id || Math.random()}
                className="border-b border-default-100 p-2 flex gap-2 "
              >
                <span className="text-sm md:text-md lg:text-lg">
                  {attendees?.name || 'Unknown Attendee'}
                </span>
                <span>
                  {rsvps ? (
                    <Chip
                      size="sm"
                      color={
                        statusColors[rsvps.status] as
                          | 'primary'
                          | 'warning'
                          | 'danger'
                      }
                    >
                      {rsvps.status}
                    </Chip>
                  ) : (
                    <Chip size="sm" color="default">
                      No Status
                    </Chip>
                  )}
                </span>
                <span>
                  {events ? (
                    <Link href={`/dashboard/events/${events.id}`}>
                      <Chip size="sm" variant="faded">
                        {events.name}
                      </Chip>
                    </Link>
                  ) : (
                    <Chip size="sm" variant="faded">
                      Unknown Event
                    </Chip>
                  )}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default RsvpsSlot
