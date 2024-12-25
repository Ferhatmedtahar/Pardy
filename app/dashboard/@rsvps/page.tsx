import { pause } from '@/utils/pause'

export default async function page() {
  await pause(2000)
  return <div>Rsvps Page</div>
}
