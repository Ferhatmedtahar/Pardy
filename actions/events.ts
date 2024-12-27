'use server'

import { db } from '@/db/db'
import { events } from '@/db/schema'
import { delay } from '@/utils/delay'
import { getCurrentUser } from '@/utils/user'
import { revalidateTag } from 'next/cache'
export async function createNewEvent({ formData }: { formData: FormData }) {
  await delay(1000)
  const user = await getCurrentUser()

  // Validate and extract event data
  const name = formData.get('name') as string | null
  const description = formData.get('description') as string | null

  if (!name) {
    throw new Error('Event name is required')
  }

  const newEvent = await db.insert(events).values({
    name,
    description: description || '',
    streetNumber: 123,
    street: 'Innovation Blvd',
    zip: 12345,
    bldg: 'Building 1',
    status: 'live',
    startOn: new Date().toUTCString(),
    createdById: user.id,
    isPrivate: false,
  })
  console.log(newEvent)

  return revalidateTag('dashboard:events')
}
