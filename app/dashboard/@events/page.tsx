import { pause } from '@/utils/pause'
import { Suspense } from 'react'

export default async function Page() {
  await pause(2000)

  return (
    <div>
      <h2>events</h2>
      <Suspense fallback={<div>Loading Rsvps...</div>}>
        <p>Events Page</p>
      </Suspense>
    </div>
  )
}
