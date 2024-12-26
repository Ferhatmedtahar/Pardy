import { db } from '@/db/db'
import { events } from '@/db/schema'
import { and, asc, eq } from 'drizzle-orm'
import { memoize } from 'nextjs-better-unstable-cache'
import 'server-only'
import { delay } from './delay'
// /utils/events.ts
export const getEvents = memoize(
  async (userId: string) => {
    await delay()
    return db.query.events.findMany({
      where: eq(events.createdById, userId),
      orderBy: [asc(events.startOn)],
    })
  },
  {
    persist: true,
    revalidateTags: () => ['events'],
    suppressWarnings: true,
    logid: 'events',
  }
)

export const getOneEvent = memoize(
  async (userId: string, eventId: string) => {
    await delay()
    return db.query.events.findFirst({
      where: and(eq(events.createdById, userId), eq(events.id, eventId)),
    })
  },
  {
    persist: true,
    revalidateTags: (userId, eventId) => ['event', eventId],
    suppressWarnings: true,
    logid: 'event',
  }
)
