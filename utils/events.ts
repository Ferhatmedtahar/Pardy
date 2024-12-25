import { db } from '@/db/db'
import { events } from '@/db/schema'
import { asc, eq } from 'drizzle-orm'
import { memoize } from 'nextjs-better-unstable-cache'
import 'server-only'
import { delay } from './delay'

export const getEvents = memoize(
  async (userId: string) => {
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
  },
  {
    persist: true,
    revalidateTags: () => ['dashboard:events'],
    log: ['datacache', 'verbose', 'dedupe'],
    logid: 'dashboard-events',
  }
)
