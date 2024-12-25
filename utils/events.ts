import 'server-only'
import { delay } from './delay'
import { db } from '@/db/db'
import { asc, eq } from 'drizzle-orm'
import { events } from '@/db/schema'

export async function getEvents(userId: string) {
  await delay()

  const data = db.query.events.findMany({
    where: eq(events.createdById, userId),
    columns: {
      id: true,
      name: true,
      startOn: true,
      status: true,
    },
    with: {
      rsvps: true,
    },
    limit: 5,
    orderBy: [asc(events.startOn)],
  })
  return data ?? []
}
