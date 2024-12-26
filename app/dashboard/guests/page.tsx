import { getGuestList } from '@/utils/attendees'
import { getCurrentUser } from '@/utils/user'

const GuestsPage = async () => {
  const user = await getCurrentUser()
  const guestsData = await getGuestList(user.id)
  const guests = guestsData.filter((guest) => guest.name !== null)
  return (
    <div className="flex  ">
      <div className="w-full max-w-md   p-6">
        <h1 className="text-2xl font-semibold  mb-6">Guest List</h1>
        <p className="text-gray-200">
          here is a list of all the guests, Number of Guests: {guests.length}
        </p>
        {guests.map((guest) => (
          <div key={guest.id} className="p-4  ">
            {guest.name && (
              <div className="p-4  rounded-lg bg-slate-950 hover:bg-slate-900 transition-colors duration-200">
                <p className="text-lg font-medium">{guest.name}</p>
                <p className="text-sm text-gray-400">{guest.email}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GuestsPage
